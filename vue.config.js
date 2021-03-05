module.exports = {
  pluginOptions: {
    i18n: {
      locale: "ru",
      fallbackLocale: "ru",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  chainWebpack: config => {
    config.plugin('preload').tap(options => {
      options[0].as = (entry) => {
        if (/\.css$/.test(entry)) return 'style';
        return 'script';
      }
      options[0].include = 'allAssets'
      // options[0].fileWhitelist: [/\.files/, /\.to/, /\.include/]
      // options[0].fileBlacklist: [/\.files/, /\.to/, /\.exclude/]
      return options
    })
  }
};
