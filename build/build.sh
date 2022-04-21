#!/bin/sh

REPO_ROOT=$(dirname $0)/..
IMAGE_NAME=ipfs-desktop-build-env

cd $REPO_ROOT
docker build -t $IMAGE_NAME -f build/Dockerfile 
docker run --rm -it -v ./:/root/app:Z $IMAGE_NAME /bin/sh -c 'cd /root/app && npm ci && npm run package'
