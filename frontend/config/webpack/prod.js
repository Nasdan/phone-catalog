const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base');
const { resolveFromRootPath } = require('../helpers');

module.exports = merge(base, {
  output: {
    path: resolveFromRootPath('dist'),
    filename: './js/[name][chunkhash].js',
  },
});
