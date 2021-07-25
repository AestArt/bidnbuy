#!/bin/bash

#  Add global dependencies
npm i -g eslint gh-pages live-server netlify prettier yarn

#  Add global dependencies
yarn add -D eslint eslint-config-google pre-commit

# Start with live server
yarn dev
