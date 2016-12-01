'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var notAlpha = /[^a-z]+/gi,
    alphaLength = 26;

var _default = (function () {
  function _default(candidate) {
    _classCallCheck(this, _default);

    var cleaned = candidate.replace(notAlpha, '').toLowerCase();
    this.unique = new Set([].concat(_toConsumableArray(cleaned)));
  }

  _createClass(_default, [{
    key: 'isPangram',
    value: function isPangram() {
      return this.unique.size === alphaLength;
    }
  }]);

  return _default;
})();

exports['default'] = _default;
module.exports = exports['default'];