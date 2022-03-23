const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry:'./admin.js',
  output:{
    filename:'./admin.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    hot: true,
    static:{
      directory:'./dist',
      watch: true
    }
  }
}