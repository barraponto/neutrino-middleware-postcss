const POSTCSS_LOADER = require.resolve('postcss-loader');
module.exports = ({ config }) => {
  config.module.rule('css')
    .loader('postcss', POSTCSS_LOADER, { map: process.env.NODE_ENV !== 'production' });
  config.module.rule('css')
    .loader('css', ({ loader, options }) => ({
      loader,
      options: Object.assign({}, options, { importLoaders: 1 }),
    }));
};
