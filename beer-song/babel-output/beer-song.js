'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Beer = function Beer() {
  return {
    verse: singAVerse,
    sing: sing
  };
};

var oneLeft = '1 bottle of beer on the wall, 1 bottle of beer.\n';
var passTheLast = 'Take it down and pass it around, no more bottles of beer on the wall.\n';
var getMore = 'Go to the store and buy some more, 99 bottles of beer on the wall.\n';

var singAVerse = function singAVerse(verseNum) {
  var howMany = (verseNum || 'No more') + ' bottles of beer on the wall, ' + (verseNum || 'no more') + ' bottles of beer.\n';
  var passOne = 'Take one down and pass it around, ' + (verseNum - 1) + ' ' + (verseNum > 2 ? 'bottles' : 'bottle') + ' of beer on the wall.\n';
  return '' + (verseNum === 0 ? howMany + getMore : verseNum === 1 ? oneLeft + passTheLast : howMany + passOne);
};

var sing = function sing() {
  var start = arguments.length <= 0 || arguments[0] === undefined ? 99 : arguments[0];
  var stop = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  var result = '';
  while (start >= stop) {
    result += singAVerse(start--) + '\n';
  }
  return result.trim() + '\n';
};

exports['default'] = Beer();
module.exports = exports['default'];