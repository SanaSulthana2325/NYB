const path = require('path');

module.exports = {
  entry: './index.jsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  mode: 'development',
};