module.exports = (neutrino) => {
  neutrino.config.module.rule('css')
    .loader('postcss', require.resolve('postcss-loader'));
  neutrino.config.module.rule('css')
    .loader('css', ({ loader, options }) => ({
      loader,
      options: Object.assign({}, options, { importLoaders: 1 }),
    }));
};
