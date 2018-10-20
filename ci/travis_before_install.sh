#!/bin/bash

set -e

case "$TRAVIS_OS_NAME" in
    linux)
        sudo apt-key adv --fetch-keys http://dl.yarnpkg.com/debian/pubkey.gpg
        echo "deb http://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
        sudo apt-get update -qq
        sudo apt-get install -y -qq yarn
        ;;
esac
