/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const createStyledComponentsTransformer =
  require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer({
  ssr: false,
  displayName: true,
  componentIdPrefix: 'counter',
});

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: path.resolve(__dirname, './index.tsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'ts-loader',
          options: {
            getCustomTransformers: () => ({
              before: [styledComponentsTransformer],
            }),
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', './src'],
    alias: {
      '@components': [path.resolve(__dirname, './src/components')],
      '@contexts': [path.resolve(__dirname, './src/contexts')],
      '@containers': [path.resolve(__dirname, './src/containers')],
      '@utils': [path.resolve(__dirname, './src/utils')],
      '@constants': [path.resolve(__dirname, './src/constants')],
      '@types': [path.resolve(__dirname, './src/types/types')],
      '@store': [path.resolve(__dirname, './src/store')],
      '@theme': [path.resolve(__dirname, './src/theme')],
    },
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    port: 4002,
    server: {
      type: 'https',
    },
    client: {
      overlay: false,
    },
    compress: true,
    hot: true,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        headers: {
          Host: 'localhost',
        },
        secure: false,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
    }),
  ],
};
