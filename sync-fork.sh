#!/bin/bash

# Adres URL repozytorium źródłowego
UPSTREAM_REPO=https://github.com/przeprogramowani/opanuj-frontend-praktyka.git

# Dodaj repozytorium źródłowe jako 'upstream', jeśli jeszcze nie zostało dodane
if ! git remote get-url upstream > /dev/null 2>&1; then
  git remote add upstream $UPSTREAM_REPO
fi

# Pobierz zmiany z repozytorium źródłowego
git fetch upstream

# Dodaj zmiany z repozytorium źródłowego do gałęzi master Twojego forka
git checkout master
git merge upstream/master

# Wypchnij zmiany do repozytorium forka na GitHub
git push origin HEAD