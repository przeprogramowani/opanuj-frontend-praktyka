# Opanuj Frontend: AI Edition - Materiały dla studenta

![](./_resources/img/header.png)

W tym repozytorium znajdziesz:

- kod prezentowany w lekcjach kursu
- narzędzia do realizowania ćwiczeń w każdej lekcji

## Aktualizacja forka

Do zaktualizowania Twojego forka tego repozytorium możesz wykorzystywać "Sync fork" z UI GitHuba lub uruchamiać poniższy skrypt Bash z terminalu:

```bash
chmod +x sync-fork.sh # tylko za pierwszym razem, nadaje uprawnienia do uruchamiania skryptu

./sync-fork.sh
```

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
