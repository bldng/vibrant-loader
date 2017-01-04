const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index-test'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index-test.js'
  },
  target: 'node'
};
