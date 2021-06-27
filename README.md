# future-of-coding-weekly

repository to work on future of coding weekly newsletter

## Subscribe

https://tinyletter.com/marianoguerra/

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

## Asset storage

https://docs.ipfs.io/install/command-line/#official-distributions
https://www.maxlaumeister.com/u/run-ipfs-on-boot-ubuntu-debian/

```
If your app's bot user has permission to access a file, your app can download
file data by accessing url_private_download etc. with
Authorization: Bearer xoxb-***
header.
```
