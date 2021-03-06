//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Bob = (function () {
  function Bob() {
    _classCallCheck(this, Bob);
  }

  _createClass(Bob, [{
    key: 'hey',
    value: function hey(message) {
      if (message.trim().length == 0) return 'Fine. Be that way!';
      if (isUpperCase(message)) return 'Whoa, chill out!';
      if (message.indexOf('?') + 1 == message.length) return 'Sure.';
      return 'Whatever.';
    }
  }]);

  return Bob;
})();

function isUpperCase(str) {
  return str == str.toUpperCase() && str != str.toLowerCase();
  // return (string == string.toUpperCase());
}

exports['default'] = Bob;
module.exports = exports['default'];