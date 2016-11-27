//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function isLeapYear(input) {
  return input % 4 == 0 && (input % 100 != 0 || input % 400 == 0) ? true : false;
}

exports["default"] = isLeapYear;
module.exports = exports["default"];