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

[neutrino-preset-postcss-cssnext][cssnext-preset] is on hold until [cssnext
supports PostCSS 6.x](https://github.com/MoOx/postcss-cssnext/issues/374).

## Using with ExtractTextPlugin

The `neutrino-middleware-extractstyles` package resets the style configuration.
An alternative approach would be to let the middleware re-use the style rule
loaders. There's an alternative middleware available [in a
gist][alternative-extractstyle-middleware].

[postcss-config-docs]: https://github.com/michael-ciniawsky/postcss-load-config#usage
[cssnext-preset]: https://npmjs.org/package/neutrino-preset-cssnext
[alternative-extractstyle-middleware]: https://gist.github.com/barraponto/0f1b28769e824f29c54d827fa9b4b5f9
[npm-image]: https://img.shields.io/npm/v/neutrino-middleware-postcss.svg
[npm-downloads]: https://img.shields.io/npm/dt/neutrino-middleware-postcss.svg
[npm-url]: https://npmjs.org/package/neutrino-middleware-postcss
[slack-image]: https://neutrino-slack.herokuapp.com/badge.svg
[slack-url]: https://neutrino-slack.herokuapp.com/
