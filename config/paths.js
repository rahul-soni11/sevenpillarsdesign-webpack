const path = require('path')

module.exports = {
  src: path.resolve(__dirname, '../src'), // source files

  build: path.resolve(__dirname, '../dist/'), // Webpack puths all the generated bundles here when you run npm build 

  html: path.resolve(__dirname, '../src/html'), //CopyWebpackPlugin copies django html from here to dist.

  // static: path.resolve(__dirname, '../public'), // static files to copy to build folder,

  public_path: 'http://localhost:8080/' //Host from where you serve static files.
  // public_path: 'https://static.shopnexhq.com/public/meoan/' //Hostname, from where you serve static files.
  // public_path: 'https://s3.ap-south-1.amazonaws.com/fashionstore.shopnexhq.com/' //Host from where you serve static files.
}