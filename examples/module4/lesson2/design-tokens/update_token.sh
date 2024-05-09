#!/usr/bin/env bash

new_token=$(aws codeartifact get-authorization-token --domain przeprogramowani-ofe --domain-owner 438634852085 --query authorizationToken --output text)

sed -i "" "s|authToken=.*|authToken=$new_token|" .npmrc

echo "New auth token generated inside .npmrc"
