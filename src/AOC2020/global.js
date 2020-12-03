"use strict";
exports.__esModule = true;
exports.global = void 0;
var global = /** @class */ (function () {
    function global() {
    }
    global.inputToArrayInt = function (input) {
        var arrayStr = input.split('\n');
        var arrayNumber = arrayStr.map(function (str) { return parseInt(str); });
        return arrayNumber;
    };
    global.inputToArrayStr = function (input) {
        return input.split('\n');
    };
    return global;
}());
exports.global = global;
