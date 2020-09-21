from slacker import Slacker
import json
import argparse
import os
import io
import shutil
import copy
from datetime import datetime, timedelta
from pick import pick
from time import sleep

# START monkey patching stuff
import slacker
import functools
def paginated(list_func):
    # See https://api.slack.com/docs/pagination
    next_cursor = None
    while True:
        response = list_func(cursor=next_cursor)
        yield response
        next_cursor = response.body['response_metadata']['next_cursor']
        if not next_cursor:
            break

def monkey_patched_list(self, presence=False, cursor=None, limit=None):
    return self.get(
        'users.list',
        params={
            'presence': int(presence),
            'cursor': cursor,
            'limit': limit,
        }
    )

slacker.Users.list = monkey_patched_list

# END monkey patching stuff

# fetches the complete message history for a channel/group/im
#
# pageableObject could be:
# slack.channel
# slack.groups
# slack.im
#
# channelId is the id of the channel/group/im you want to download history for.
def getHistory(pageableObject, channelId, from_dtime, to_dtime, pageSize = 100):
    messages = []
    lastTimestamp = datetime_to_slack_timestamp(to_dtime)

    while(True):
        response = pageableObject.history(
            channel = channelId,
            latest  = lastTimestamp,
            oldest  = datetime_to_slack_timestamp(from_dtime),
            count   = pageSize
        ).body

        messages.extend(response['messages'])

        if (response['has_more'] == True):
            lastTimestamp = messages[-1]['ts'] # -1 means last element in a list
            sleep(1) # Respect the Slack API rate limit
        else:
            break

    messages.sort(key = lambda message: message['ts'])

    return messages


def mkdir(directory):
    if not os.path.isdir(directory):
        os.makedirs(directory)


# create datetime object from slack timestamp ('ts') string
def parseTimeStamp(timeStamp):
    if '.' in timeStamp:
        t_list = timeStamp.split('.')
        if len(t_list) != 2:
            raise ValueError('Invalid time stamp')
        else:
            return datetime.utcfromtimestamp(float(t_list[0]))


# move channel files from old directory to one with new channel name
def channelRename(oldRoomName, newRoomName):
    # check if any files need to be moved
    if not os.path.isdir(oldRoomName):
        return
    mkdir(newRoomName)
    for fileName in os.listdir(oldRoomName):
        shutil.move(os.path.join(oldRoomName, fileName), newRoomName)
    os.rmdir(oldRoomName)


def writeMessageFile(fileName, messages):
    directory = os.path.dirname(fileName)

    # if there's no data to write to the file, return
    if not messages:
        return

    if not os.path.isdir(directory):
        mkdir(directory)

    with open(fileName, 'w') as outFile:
        json.dump(messages, outFile, indent=4)


# parse messages by date
def parseMessages(base_dir, roomDir, messages, roomType):
    nameChangeFlag = roomType + "_name"

    currentFileDate = ''
    currentMessages = []
    for message in messages:
        #first store the date of the next message
        ts = parseTimeStamp(message['ts'])

        # check if current message is a name change
        # dms won't have name change events
        if roomType != "im" and ('subtype' in message) and message['subtype'] == nameChangeFlag:
            roomDir = message['name']
            oldRoomPath = message['old_name']
            newRoomPath = roomDir
            channelRename(oldRoomPath, newRoomPath)

        currentMessages.append(message)
    outFileName = u'{room}.json'.format(room = roomDir, file = currentFileDate)
    writeMessageFile(os.path.join(base_dir, outFileName), currentMessages)

def filterConversationsByName(channelsOrGroups, channelOrGroupNames):
    return [conversation for conversation in channelsOrGroups if conversation['name'] in channelOrGroupNames]

def promptForPublicChannels(channels):
    channelNames = [channel['name'] for channel in channels]
    selectedChannels = pick(channelNames, 'Select the Public Channels you want to export:', multi_select=True)
    return [channels[index] for channelName, index in selectedChannels]

# fetch and write history for all public channels
def fetchPublicChannels(channels, from_dtime, to_dtime):
    if dryRun:
        print("Public Channels selected for export:")
        for channel in channels:
            print(channel['name'])
        print()
        return

    for channel in channels:
        channel_name = channel['name']
        print(u"Fetching Public Channel: {0} {1} {2}".format(channel_name, from_dtime, to_dtime))
        base_dir = os.path.join(date_to_dirname(from_dtime))
        mkdir(base_dir)
        messages = getHistory(slack.channels, channel['id'], from_dtime, to_dtime)
        parseMessages(base_dir, channel_name, messages, 'channel')

def date_to_dirname(date):
    return os.path.join(str(date.year), str(date.month), str(date.day))

# write channels.json file
def dumpChannelFile():
    print("Making channels file")

    #We will be overwriting this file on each run.
    with open('channels.json', 'w') as outFile:
        json.dump(channels , outFile, indent=4)

# fetch all users for the channel and return a map userId -> userName
def getUserMap():
    global userNamesById, userIdsByName
    for user in users:
        userNamesById[user['id']] = user['name']
        userIdsByName[user['name']] = user['id']

# stores json of user info
def dumpUserFile():
    #write to user file, any existing file needs to be overwritten.
    with open("users.json", 'w') as userFile:
        json.dump(users, userFile, indent=4)

# get basic info about the slack channel to ensure the authentication token works
def doTestAuth():
    testAuth = slack.auth.test().body
    teamName = testAuth['team']
    currentUser = testAuth['user']
    print(u"Successfully authenticated for team {0} and user {1} ".format(teamName, currentUser))
    return testAuth

# Since Slacker does not Cache.. populate some reused lists
def bootstrapKeyValues():
    global users, channels
    for response in paginated(functools.partial(slack.users.list, limit=500)):
        users_page = response.body['members']
        print(u"Found {0} Users".format(len(users_page)))
        users.extend(users_page)
        sleep(1)

    channels = slack.channels.list().body['channels']
    print(u"Found {0} Public Channels".format(len(channels)))
    sleep(1)

    getUserMap()

# Returns the conversations to download based on the command-line arguments
def selectConversations(allConversations, commandLineArg, filter, prompt):
    global args
    if isinstance(commandLineArg, list) and len(commandLineArg) > 0:
        return filter(allConversations, commandLineArg)
    elif commandLineArg != None or not anyConversationsSpecified():
        if args.prompt:
            return prompt(allConversations)
        else:
            return allConversations
    else:
        return []

# Returns true if any conversations were specified on the command line
def anyConversationsSpecified():
    global args
    return args.publicChannels != None

# This method is used in order to create a empty Channel if you do not export public channels
# otherwise, the viewer will error and not show the root screen. Rather than forking the editor, I work with it.
def dumpDummyChannel():
    channelName = channels[0]['name']
    mkdir(channelName)
    fileDate = '{:%Y-%m-%d}'.format(datetime.today())
    outFileName = u'{room}/{file}.json'.format(room = channelName, file = fileDate)
    writeMessageFile(outFileName, [])

def iso_date_to_datetime(date_str):
    if date_str == 'now':
        return datetime.now()

    return datetime.fromisoformat(date_str)

def datetime_to_slack_timestamp(dt):
    return str(dt.timestamp())

def iso_date_to_slack_timestamp(date_str):
    dt = iso_date_to_datetime(date_str)
    ts = dt.timestamp()
    return str(ts)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Export Slack history')

    parser.add_argument('--token', required=True, help="Slack API token")

    parser.add_argument(
        '--dryRun',
        action='store_true',
        default=False,
        help="List the conversations that will be exported (don't fetch/write history)")

    parser.add_argument(
        '--publicChannels',
        nargs='*',
        default=None,
        metavar='CHANNEL_NAME',
        help="Export the given Public Channels")

    parser.add_argument(
        '--prompt',
        action='store_true',
        default=False,
        help="Prompt you to select the conversations to export")

    parser.add_argument('--from-date', required=True, help='ISO formatted date from')
    parser.add_argument('--to-date', required=True, help='ISO formatted date from (can be the value "now")')
    parser.add_argument('--output-dir', required=True, help='Name of the output directory to export to')

    args = parser.parse_args()

    users = []
    channels = []
    userNamesById = {}
    userIdsByName = {}

    slack = Slacker(args.token)
    testAuth = doTestAuth()
    tokenOwnerId = testAuth['user_id']

    bootstrapKeyValues()

    dryRun = args.dryRun

    outputDirectory = args.output_dir
    mkdir(outputDirectory)
    os.chdir(outputDirectory)

    selectedChannels = selectConversations(
        channels,
        args.publicChannels,
        filterConversationsByName,
        promptForPublicChannels)

    from_dtime_base = iso_date_to_datetime(args.from_date)
    to_dtime_final = iso_date_to_datetime(args.to_date)
    one_day = timedelta(days=1)

    from_dtime = from_dtime_base
    to_dtime = from_dtime + one_day

    if len(selectedChannels) > 0:
        while from_dtime < to_dtime_final:
            fetchPublicChannels(selectedChannels, from_dtime, to_dtime)
            from_dtime = to_dtime
            to_dtime = to_dtime + one_day

    if not dryRun:
        dumpUserFile()
        dumpChannelFile()

