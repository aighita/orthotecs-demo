const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WebpackObfuscator = require('webpack-obfuscator');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  // ...
  performance: {
    hints: false, // TODO: This should be TRUE - for optimization - For Demo let it be false
    maxEntrypointSize: 512000, // DONE: increase from default 244 KiB
    maxAssetSize: 512000,      // DONE: likewise
    // Should this be this size? Or smaller?
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),

    // IMPORTANT: This rule will copy the assets folder to build/production so
    // images will be used in the final build
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/assets'),
          to: path.resolve(__dirname, 'build/assets'),
        },
      ],
    }),

    // Only add obfuscation in production
    ...(process.env.NODE_ENV === 'production'
      ? [
          new WebpackObfuscator(
            {
              rotateStringArray: true,
              //  You can configure more options here.
              //  https://github.com/javascript-obfuscator/javascript-obfuscator
            },
            // An array of file patterns that will NOT be obfuscated
            // ['**/vendor.*.js']
          ),
        ]
      : []),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
  },
};
