SLACK_TOKEN := dummy-token-change-me
HISTORY_YEAR := 2021

history-index:
	cd history; ls -1 2020-*/*/*.json > index.txt

update-search-index:
	git pull
	python3 search/tools/ingest.py 'history/20*' history/users.json

download-message-files:
	./attachmentdump.py "history/${HISTORY_YEAR}/*/*/*.json" history/msg_files/ ${SLACK_TOKEN}

list-files-throttle-response:
	grep -lR "https://a.slack-edge.com/" history/msg_files/* | uniq

remove-files-throttle-response:
	rm $$(grep -lR "https://a.slack-edge.com/" history/msg_files/* | uniq)

