
history-index:
	cd history; ls -1 2020-*/*/*.json > index.txt

update-search-index:
	git pull
	cd search; python3 ingest.py '../history/20*'
