const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = Merge(CommonConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'SERVICE_URL_PROTOCOL': JSON.stringify('http://'),
        'SERVICE_URL_IP': JSON.stringify('localhost:8080/'),
        'SERVICE_URL_BASE': JSON.stringify('api/v1'),
        'GOOGLE_ANALYTICS_ID': JSON.stringify('')
      }
    })
  ],
  devServer: {
    historyApiFallback: true
  }
})
