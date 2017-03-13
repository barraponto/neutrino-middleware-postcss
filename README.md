# Neutrino PostCSS preset
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url] [![Join Slack][slack-image]][slack-url]
`neutrino-preset-postcss` is a Neutrino preset that adds support to PostCSS on
top of the basic `neutrino-preset-web`. Use v1 for Neutrino 4 support.

## Documentation

Install this preset to your development dependencies, then set it to use this
preset **after** `neutrino-preset-web`. Set it in `package.json`:

```json
  "config": {
    "presets": [
      "neutrino-preset-web",
      "neutrino-preset-postcss"
    ]
  },
```

Don't forget to create `postcss.config.js` or add postcss configuration to
`package.json`. See [PostCSS configuration documentation][postcss-config-docs].

Also, don't forget to install your favorite PostCSS plugins!

## To Do

[ ] Support PostCSS config in Neutrino `package.json` configuration.
[ ] Create pre-configured presets for cssnext and autoprefixer.
[ ] Support Neutrino 5.

[postcss-config-docs]: https://github.com/michael-ciniawsky/postcss-load-config#usage
[npm-image]: https://img.shields.io/npm/v/neutrino-preset-postcss.svg
[npm-downloads]: https://img.shields.io/npm/dt/neutrino-preset-postcss.svg
[npm-url]: https://npmjs.org/package/neutrino-preset-postcss
[slack-image]: https://neutrino-slack.herokuapp.com/badge.svg
[slack-url]: https://neutrino-slack.herokuapp.com/
