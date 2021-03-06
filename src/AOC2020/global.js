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
    global.inputToArrayStrSinEspacios = function (input) {
        var fueraEspacios = input.replace(/ /g, "");
        return fueraEspacios.split('\n');
    };
    global.inputToStrArrayByBlankLine = function (input) {
        //sustituyo las nuevas líneas por espacios
        input = input.replace(/(?:\r\n|\r|\n)/g, " ");
        var resp = input.split("  ");
        return resp;
    };
    return global;
}());
exports.global = global;
