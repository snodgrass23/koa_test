var path = require('path');
var stylus = require('stylus')
var nib = require('nib');

module.exports = function(){

  var stylusOptions = {
    src: path.join(__dirname, '../shared'),
    dest: path.join(__dirname, '../public'),
    compile: function compile(str, path) {
      return stylus(str)
        .set('filename', path)
        .use(nib())
        ['import']('nib');
    }
  }

  return require('koa-stylus')(stylusOptions);
}