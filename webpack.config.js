const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Handle JS and JSX files
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/, // Handle SCSS files
        use: [
          'style-loader', // Inject styles into DOM
          'css-loader',   // Turn CSS into CommonJS
          'sass-loader',  // Compile SCSS to CSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Handle image files
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve JS and JSX extensions
  },
  devServer: {
    static: './dist', // Serve files from the dist folder
    hot: true,        // Enable hot module replacement
  },
};
