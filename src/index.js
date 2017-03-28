const merge = require('deepmerge');

module.exports = ({ config }, options = {}) => {
  config.module.rule('style')
    .use('postcss')
    .loader(require.resolve('postcss-loader'))
    .options(merge({ map: process.env.NODE_ENV !== 'production' }, options));

  config.module.rule('style')
    .use('css')
    .tap(options => merge(options, { importLoaders: 1 }));
};
