
SERVER_NAME=159.89.48.57

run:
	sonic -c config.cfg

.PHONY: dist
dist:
	rm -rf dist foc-search-server.tgz
	mkdir dist
	cp config.cfg dist
	cp -r data dist
	cp $$(which sonic) dist
	cd server/foc-search-server/ && cargo build --release
	cp server/foc-search-server/target/release/foc-search-server dist
	cp -r server/foc-search-server/static/ dist
	tar -czf foc-search-server.tgz dist

deploy: dist
	scp foc-search-server.tgz foc@${SERVER_NAME}:/opt/foc/
