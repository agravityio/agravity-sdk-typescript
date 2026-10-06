# Agravity SDK sample

Minimal Angular app that consumes `@agravity/public` and calls `GET /search`.
Enter the API endpoint URL (including `/api`) and an API key in the UI.

## Run

```console
npm run setup   # npm install + build the SDK from ../src/agravityAPI-public and install it
npm start       # http://localhost:4200
```

The API must allow the origin `http://localhost:4200` (CORS), otherwise the browser reports status 0.

## Choosing the SDK build

| Command | Uses |
| --- | --- |
| `npm run sdk:local` | The current source in `../src/agravityAPI-public`, built with ng-packagr and installed as a tarball from `.sdk/` |
| `npm run sdk:registry` | The latest `@agravity/public` from npm |
| `npm run sdk:registry -- 11.1.3` | A specific published version |

Re-run `npm run sdk:local` after every change to the SDK.

## Notes for consuming the SDK

- The SDK must be installed from its **build output** (`dist`). The `package.json` in `src/agravityAPI-public` has no `module`/`exports` fields, so referencing that folder directly (`file:../src/agravityAPI-public`, a git URL or `npm link` to the source folder) cannot be resolved by Angular.
- Peer dependencies: Angular 21 (`@angular/core ^21`) and `rxjs ^7.4`.
- `provideApi(...)` needs an argument (base path or config object); `provideApi()` from the generated README does not type check.
