setup:
	npm install
	bower install

clean:
	rm -rf node_modules

setup-clean: clean setup

start: simple

simple:
	node --harmony app.js

build:
	grunt build


.PHONY: setup start simple open run cycle profile profile-lazy debug debug-brk build