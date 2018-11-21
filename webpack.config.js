const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CreateFileWebpack = require('create-file-webpack');

const dev = process.env.NODE_ENV !== 'production';

const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
});

const createRobot = new CreateFileWebpack({
  path: './public',
  fileName: 'robots.txt',
  content: `
    User-agent: * 
    Disallow: 
  `,
});

const hotReloadMiddlewares = ['react-hot-loader/patch', 'webpack-hot-middleware/client'];

const clientConfig = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  cache: true,
  stats: dev ? 'normal' : 'errors-only',
  entry: dev
    ? ['isomorphic-fetch', ...hotReloadMiddlewares, './src/client/index.jsx']
    : ['isomorphic-fetch', './src/client/index.jsx'],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public'),
    publicPath: dev ? 'http://localhost:3000/public/' : '/',
  },
  mode: dev ? 'development' : 'production',
  plugins: dev
    ? [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()]
    : [DefinePluginConfig, createRobot],
};

const serverConfig = {
  entry: path.join(__dirname, 'src/server/index.js'),
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  stats: dev ? 'normal' : 'errors-only',
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/',
  },
  mode: dev ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = [clientConfig, serverConfig];
