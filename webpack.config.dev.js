const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  entry: {
    home: './src/index.js',
    header: './src/Header/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos'),
      '@imagenes': path.resolve(__dirname, 'src/assets/imagenes'),
      '@header/components': path.resolve(__dirname, 'src/header/components/App.jsx'),
    },
  },
  module: {
    rules: [
      //javaScript React
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      //html
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      //styles
      {
        test: /\.css|.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'stylus-loader',
        ],
      },
      //assets
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset',
      },
      //typeScript
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    watchFiles: ['./src/**/*', './public/**/*'],
    liveReload: true,
    compress: true,
    port: 3005,
    open: true,
    // hot: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ['optipng', { optimizationLevel: 5 }],
          ],
        },
      },
      // minimizerOptions: {
      //   plugins: [
      //     ['optipng', { optimizationLevel: 5 }],
      //   ],
      // },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
