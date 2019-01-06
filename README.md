# enactus-site

_Enactus UW's website._

[![Code Style: Prettier][prettier-img]][prettier]
[![Build: Travis][travis-img]][travis]

## Project setup

```bash
yarn install    # installs package dependencies
yarn run serve  # compiles and hot-reloads for development
yarn run build  # compiles and minifies for production
yarn run lint   # lints and fixes files
```

## Continuous Integration

This project is configured to build and deploy to the `gh-pages` branch using
[Travis](https://travis-ci.com).

You'll need to add a
[personl access token from Github](https://github.com/settings/tokens) to the
project settings on [Travis](https://travis-ci.com) in order for Travis to be
able to deploy the site to your repository.

[prettier]: https://github.com/prettier/prettier
[prettier-img]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[travis]: https://travis-ci.com/liu-jeffrey/enactus-site/
[travis-img]: https://travis-ci.com/liu-jeffrey/enactus-site.svg?branch=master
