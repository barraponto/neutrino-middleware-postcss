const merge = require('deepmerge');

module.exports = ({ config }, options = {}) => {
  config.module.rule('style')
    .use('postcss')
    .loader(require.resolve('postcss-loader'))
    .options(options);

  config.module.rule('style')
    .use('css')
    .tap(options => merge(options, { importLoaders: 1 }));
};
