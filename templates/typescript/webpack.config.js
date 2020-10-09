const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: ['./src/App.tsx'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.bundle-[hash].js',
  },

  mode: process.env.NODE_ENV || 'development',
  // LOADERS
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.s?css$/, // files .css or .scss
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.tsx', '.ts'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      filename: 'index.html',
    }),
  ],
};
