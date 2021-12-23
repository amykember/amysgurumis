#!/bin/bash

set -eufo pipefail

cd "$(dirname "$0")"

./fix-stuff.sh
zola build
git add .

if [[ -z "$(git status --porcelain)" ]]; then
    echo "no changes to publish!" >&2
    exit 1
fi

git commit -m "$1"
git push

