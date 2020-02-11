const paths = require('./paths')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  /**
   * Mode
   *
   * Set the mode to development or production.
   */
  mode: 'development',
  output: {
    publicPath: paths.public_path //our Main S3 Bucket/tenant_name/
  },
  /**
   * Devtool
   *
   * Control how source maps are generated.
   */
  devtool: 'inline-source-map',

  /**
   * DevServer
   *
   * Spin up a server for quick development.
   */
  devServer: {
    // contentBase: paths.build,
    // open: true,
    // port: 8080,
    compress: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*' //to allow access of font files ect.
    },
    allowedHosts: [ //required for HMR unless it will give error chrome console
      'missindia.local',
      'aggana.local',
    ]

  },

  plugins: [
    /**
     * HotModuleReplacementPlugin
     *
     * Only update what has changed.
     */
    new webpack.HotModuleReplacementPlugin(),
  ],
})
