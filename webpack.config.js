const path = require('path');

module.exports = {
  entry: './vue/button.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/public/javascripts',
  },
};