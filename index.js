var fs = require('fs');
var thunkify = require('thunkify');
var cofs = {};

Object.keys(fs).forEach(function (func) {
  if (typeof fs[func] === 'function') {
    cofs[func] = thunkify(fs[func]);
  }
});

module.exports = cofs;
