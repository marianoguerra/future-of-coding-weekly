
history-index:
	cd history; ls -1 2020-*/*/*.json > index.txt

update-search-index:
	git pull
	python3 search/tools/ingest.py 'history/20*' history/users.json
