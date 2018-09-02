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
    path: __dirname + '/dist',
    filename: '[name].js',
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
  plugins: [
    new UglifyJsPlugin({ minimize: true }),
  ],
};