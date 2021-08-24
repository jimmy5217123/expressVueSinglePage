const baseUrl = process.env.NODE_ENV === 'production' ? '' : '/'
module.exports = {
    publicPath: baseUrl,
    devServer: {
      proxy: {
        '/api': {
          target: baseUrl + 'api/',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }