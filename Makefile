SLACK_TOKEN := dummy-token-change-me
HISTORY_YEAR := 2021
FROM_DATE := 2021-09-06
TO_DATE := 2021-09-13

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

export-history:
	python3 slack_export.py --token ${SLACK_TOKEN} --publicChannels linking-together present-company share-your-work thinking-together two-minute-week --output-dir history --from-date ${FROM_DATE} --to-date ${TO_DATE}

start-search-server:
	cd search && python3 server.py

start-search-sonic:
	cd .. && sonic -c config.cfg

