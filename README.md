# future-of-coding-weekly
repository to work on future of coding weekly newsletter

## Subscribe

https://tinyletter.com/marianoguerra/

## Contribute

An issue will be open per week, if you want to contribute open the issue and paste a resource you think is worth sharing in the newsletter and comment on the issue of the week. 

If there's no issue for the week open one using the standard template, follow the instructions in the template and add a comment.

Use comment reactions on issue comments to upvote/downvote/whatever each submission. The reactions that have a clear sense of positive/negative will be considered to rank the submissions of the week.

If you want to propose a resource that wasn't discussed in FoC, maybe share it first there, if not, add it to the queue.md file as a Pull Request.


## Archiver

Script heavily based on this: https://github.com/zach-snell/slack-export

### Setup

Create an app here: https://api.slack.com/apps

Install this libraries

```
pip3 install slackclient slacker pick
```

### User Token Scopes

```
channels:history
	View messages and other content in the user’s public channels
channels:read
	View basic information about public channels in the workspace
groups:read
	View basic information about the user’s private channels
identify
	View information about the user’s identity
users:read
	View people in the workspace
```

Change the dates (usually from monday to monday) and the output dir

```
export SLACK_TOKEN=xoxp-your-token-here
python3 slack_export.py --token $SLACK_TOKEN --publicChannels general feedback --from-date=2020-04-06 --to-date=2020-04-13 --output-dir=history/2020-04-w-2
```
