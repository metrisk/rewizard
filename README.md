# Rewizard 🧙‍♂️

[![Build Status](https://travis-ci.com/metrisk/rewizard.svg?branch=master)](https://travis-ci.com/metrisk/rewizard)
[![Coverage Status](https://coveralls.io/repos/github/metrisk/rewizard/badge.svg?branch=master)](https://coveralls.io/github/metrisk/rewizard?branch=master)

## Introduction
Rewizard makes it easy to collect data from forms in React! Please view all demos and full documentation on our [Github Pages](https://metrisk.github.io/rewizard/?path=/docs/getting-started-introduction--page).

## Contributing

To contribute, clone the repo, install dependencies (`npm i`) and run:

### Develop
```sh
$ npm run dev
```

### Build
```sh
$ npm run build
```

Build individual elements:

| Command | Description |
|:-|:-|
| `$ npm run build:components` | Build components ready for publishing |
| `$ npm run build:docs` | Build just the storybook documentation |

<br/>

### Testing
Run all unit and integration tests:
```sh
$ npm run test
```

Run individual tests:

| Command | Description |
|:-|:-|
| `$ npm run test:unit` | Run just unit tests |
| `$ npm run test:cypress` | Run in-browser integration tests |
| `$ npm run test:coverage` | Run tests with coverage report |