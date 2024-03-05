#!/bin/bash
# simpler way to push my code
# pass the commit message as the first argument
# ./git_bash "commit message"
git add .; git commit -m "$1"; git push
