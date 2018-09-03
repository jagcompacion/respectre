const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
  entry: {
    elements: './src/ui/elements',
    components: './src/ui/components',
    experimentals: './src/ui/experimentals',
    layout: './src/ui/layout',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};