module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
    // host: '192.168.2.239',
    proxy: {
      '/api': {
        // target: 'http://39.104.144.6',
        target: 'http://192.168.1.105:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
    // proxy: 'http://prod20.yc-yunpass.com:9888'
  }
}
