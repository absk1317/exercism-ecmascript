"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var MSPERGIGASECOND = 1000000000000;

exports["default"] = function (start) {
    return {
        date: function date() {
            return new Date(start.getTime() + MSPERGIGASECOND);
        }
    };
};

module.exports = exports["default"];