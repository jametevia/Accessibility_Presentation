const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './Client/Index.js',
  output: {
    path: path.resolve(__dirname, 'Public'),
    filename: 'accessibility.js'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
};

module.exports = config;