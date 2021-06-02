# ![tune-cloud-logo](https://github.com/tune-cloud/tune-cloud-images/blob/main/logo.png?raw=true) Tune Cloud [![Deploy to Github pages](https://github.com/tune-cloud/tune-cloud.github.io/actions/workflows/build.yml/badge.svg)](https://github.com/tune-cloud/tune-cloud.github.io/actions/workflows/build.yml)
Visualizes your favorite music using word cloud.

# Build
To build `tune-cloud` run the following command.

```shell
npm install
npm run build
```

# Tests

## Unit
To run all unit tests run the following command:

```shell
npm test
```

# Run

to start `tune-cloud` locally run the following command:

```shell
npm run start
```

# Deploy

`tune-cloud` run on Github pages. to deploy build the app and merge the `build` directory into `main`

# Scanning

All Scans are ran as part of the build pipeline.

## Sonar

The sonar client can be used to run locally.

## Snyk
to run Snyk scans locally run the following command:

```shell
snyk test
```

## CodeQL
TODO: Run scan locally
