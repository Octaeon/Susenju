#!/bin/zsh

spago build

esbuild compiled=output/Main/index.js --bundle --platform=node --outdir=bot/ --format=cjs
