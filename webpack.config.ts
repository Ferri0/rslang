/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// OPTIONAL
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = {
  stats: 'minimal',
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    assetModuleFilename: '[path][name][ext]',
    publicPath: '',
  },
  devServer: {
    contentBase: path.join(__dirname, './'),
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/assets'),
          to: path.resolve(__dirname, './dist/assets'),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset',
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        type: 'asset',
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new HtmlMinimizerPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

// @ts-ignore
module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    // @ts-ignore
    config.devtool = 'source-map';
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'style.css',
      })
      // OPTIONAL
      // new BundleAnalyzerPlugin({
      //   analyzerPort: 8000,
      //   openAnalyzer: true,
      // })
    );
    config.module.rules.push(
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // @ts-ignore
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
        include: /\.module\.(sa|sc|c)ss$/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
        exclude: /\.module\.(sa|sc|c)ss$/,
      }
    );
  } else {
    // @ts-ignore
    config.devtool = 'eval-source-map';
    config.module.rules.push(
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          // @ts-ignore
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
        include: /\.module\.(sa|sc|c)ss$/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        exclude: /\.module\.(sa|sc|c)ss$/,
      }
    );
  }
  return config;
};
