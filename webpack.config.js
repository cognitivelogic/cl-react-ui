var webpack = require('webpack'),
  libraryName = 'cl-react-ui',
  path = require('path'),
  entry = [
    './src/index.js'
  ],
  plugins = [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  rules = [
    {test: /\.js$/, exclude: /(node_modules)/, loader: 'babel-loader'}
  ];

  plugins.push(new webpack.optimize.UglifyJsPlugin({
    debug: true,
    compress: {
      warnings: false
    }
  }));

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: rules
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'react-bootstrap': {
        root: 'ReactBootstrap',
        commonjs2: 'react-bootstrap',
        commonjs: 'react-bootstrap',
        amd: 'react-bootstrap'
      }
    }
  ],
  plugins: plugins,
  watchOptions: {
    poll: true
  }
};
