# Opanuj Frontend: AI Edition - Materiały dla studenta
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

Aby uruchomić jeden z przykładów, np. `module1/lesson1/validate-it` wystarczy, że wykonasz polecenie:

```bash
# npm run example {project_name}
npm run example validate-it
```

## Weryfikacja realizacji ćwiczeń

Aby zweryfikować poprawność realizacji ćwiczenia z modułu 1, np. `module1/lesson1/solver`, uruchom polecenie:

```bash
# npm run verify {project_name}
npm run verify solver
```

## Przykładowe rozwiązania ćwiczeń

Przykładowe rozwiązania ćwiczeń umieszczamy w folderach `examples/{module}/{lesson}/_solutions`.

Aby uruchomić wybrany projekt, np. `module1/lesson1/_solutions/solver` wystarczy, że wykonasz polecenie:

```bash
npm run example _solutions/solver
```

## Zasoby lokalne

Korzystając z polecenia `npm run example` (szczegóły powyżej) uruchamiasz serwer developerski, który wystawia kilka publicznych zasobów. Możesz z nich skorzystać w trakcie realizowania kolejnych ćwiczeń i fragmentów lekcji.

Wszystkie zasoby znajdziesz w folderze `examples/scripts/data`, a w aplikacji pod `/api/data/{resource}`:

```bash
GET http://localhost:3000/api/data/articles
GET http://localhost:3000/api/data/authors
GET http://localhost:3000/api/data/bootstrap
GET http://localhost:3000/api/data/comments
...
```

Te same endpointy akceptują również metodę POST, które możesz wykorzystać do symulowania zapisu danych.

## Aktualizacja forka

Do aktualizowania Twojego forka tego repozytorium możesz wykorzystywać "Sync fork" z UI GitHuba lub uruchamiać poniższy skrypt Bash z terminalu:

```bash
chmod +x sync-fork.sh # tylko za pierwszym razem, nadaje uprawnienia do uruchamiania skryptu

./sync-fork.sh
```

## Uruchamianie testów w module 2

Testy jednostkowe możesz uruchomić poleceniem `npm test`. Polecenie przyjmuje jako parametr właściwy folder z testami, np. `npm test module2/lesson1/mocks-spies`.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://jnalewajk.me"><img src="https://avatars.githubusercontent.com/u/38465906?v=4?s=100" width="100px;" alt="Jakub Nalewajk"/><br /><sub><b>Jakub Nalewajk</b></sub></a><br /><a href="https://github.com/przeprogramowani/opanuj-frontend-praktyka/commits?author=jaqubowsky" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gromen"><img src="https://avatars.githubusercontent.com/u/14578910?v=4?s=100" width="100px;" alt="Marcin Gromek"/><br /><sub><b>Marcin Gromek</b></sub></a><br /><a href="https://github.com/przeprogramowani/opanuj-frontend-praktyka/commits?author=gromen" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/KamilBarczyk"><img src="https://avatars.githubusercontent.com/u/62600472?v=4?s=100" width="100px;" alt="Kamil Barczyk"/><br /><sub><b>Kamil Barczyk</b></sub></a><br /><a href="https://github.com/przeprogramowani/opanuj-frontend-praktyka/issues?q=author%3AKamilBarczyk" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!