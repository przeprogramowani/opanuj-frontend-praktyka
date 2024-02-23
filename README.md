# Opanuj Frontend: AI Edition - Materiały dla studenta

![](./_resources/img/header.png)

W tym repozytorium znajdziesz:

- kod prezentowany w lekcjach kursu
- narzędzia do realizowania ćwiczeń w każdej lekcji

## Wymagania

- Node w wersji 20.9.0 lub nowszej (możesz wykorzystać narzędzie nvm)

## Przykłady z lekcji

Przykłady prezentowane w lekcjach znajdziesz w folderze `examples`.

Aby zainstalować niezbędne zależności, wykonaj te polecenia:

```bash
cd examples
npm install
```

Aby uruchomić jeden z przykładów, np. `module1/lesson4/api-contract` wystarczy, że wykonasz polecenie:

```bash
# npm run example {project_name}
npm run example api-contract
```

Testy jednostkowe możesz uruchomić poleceniem `npm test`. Polecenie przyjmuje jako parametr właściwy folder z testami, np. `npm test module2/lesson1/mocks-spies`.

## Zasoby lokalne

Korzystając z polecenia `npm run example` (szczegóły powyżej) uruchamiasz serwer developerski, który wystawia kilka publicznych zasobów. Możesz z nich skorzystać w trakcie realizowania kolejnych ćwiczeń i fragmentów lekcji.

Wszystkie zasoby znajdziesz w folderze `examples/scripts/data`, a w aplikacji pod `/api/data/{resource}`:

```bash
GET http://localhost:3000/api/data/articles
GET http://localhost:3000/api/data/authors
GET http://localhost:3000/api/data/boostrap
GET http://localhost:3000/api/data/comments
...
```

Te same endpointy akceptują również metodę POST, które możesz wykorzystać do symulowania zapisu danych.

## Realizacja ćwiczeń

Realizacja ćwiczeń odbywa się w folderze `practice`.

Znajdziesz tam trzy foldery z przykładowymi aplikacjami w React, Vue i Angular, w których możesz realizować ćwiczenia.

Wybór frameworka zależy od Ciebie. Możesz wybrać ten, z którym pracujesz na co dzień, lub ten, który chcesz poznać.

Aby zainstalować niezbędne zależności, wykonaj te polecenia:

```bash
cd practice
cd react-app # lub vue-app / angular-app
npm install
```

## Przykładowe rozwiązania ćwiczeń

Przykładowe rozwiązania ćwiczeń umieszczamy w folderach `examples/{module}/{lesson}/_solutions`.

Aby uruchomić wybrany projekt, np. `module1/lesson1/_solutions/solver` wystarczy, że wykonasz polecenie:

```bash
npm run example _solutions/solver
```

## Aktualizacja forka

Do zaktualizowania Twojego forka tego repozytorium możesz wykorzystywać "Sync fork" z UI GitHuba lub uruchamiać poniższy skrypt Bash z terminalu:

```bash
chmod +x sync-fork.sh # tylko za pierwszym razem, nadaje uprawnienia do uruchamiania skryptu

./sync-fork.sh
```
