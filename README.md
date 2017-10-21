# Neutrino PostCSS middleware

[![Greenkeeper badge](https://badges.greenkeeper.io/barraponto/neutrino-preset-postcss.svg)](https://greenkeeper.io/)
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url]
[![Join Slack][slack-image]][slack-url]

`neutrino-middleware-postcss` is a Neutrino middleware that adds support for
PostCSS plugins.

## Documentation

Install this middleware to your development dependencies, then set it up in
`.neutrinorc.js` just like you would with regular postcss-loader:

```js
  const autoprefixer = require('autoprefixer');

  module.exports = {
    use: [
      "neutrino-preset-web",
      ["neutrino-middleware-postcss", {
        plugins: [
          autoprefixer()
        ]
      }]
    ],
    ...
  };
```

## cssnext

Just use [neutrino-preset-postcss-cssnext][cssnext-preset].

## Using with ExtractTextPlugin

This preset works well with [neutrino-preset-extractstyles][npe-package].

[postcss-config-docs]: https://github.com/michael-ciniawsky/postcss-load-config#usage
[cssnext-preset]: https://npmjs.org/package/neutrino-preset-cssnext
[npe-package]: https://npmjs.org/package/neutrino-preset-extractstyles
[npm-image]: https://img.shields.io/npm/v/neutrino-middleware-postcss.svg
[npm-downloads]: https://img.shields.io/npm/dt/neutrino-middleware-postcss.svg
[npm-url]: https://npmjs.org/package/neutrino-middleware-postcss
[slack-image]: https://neutrino-slack.herokuapp.com/badge.svg
[slack-url]: https://neutrino-slack.herokuapp.com/
