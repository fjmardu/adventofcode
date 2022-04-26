"use strict";
exports.__esModule = true;
exports.global = void 0;
var fs = require("fs");
var global = /** @class */ (function () {
    function global() {
    }
    global.inputToArrayInt = function (input) {
        var arrayStr = input.split("\n");
        var arrayNumber = arrayStr.map(function (str) { return parseInt(str); });
        return arrayNumber;
    };
    global.inputToArrayStr = function (input) {
        return input.split("\n");
    };
    global.inputToArrayStrSinEspacios = function (input) {
        var fueraEspacios = input.replace(/ /g, "");
        return fueraEspacios.split("\n");
    };
    global.inputToStrArrayByBlankLine = function (input) {
        //sustituyo las nuevas líneas por espacios
        input = input.replace(/(?:\r\n|\r|\n)/g, " ");
        var resp = input.split("  ");
        return resp;
    };
    global.wantNumbersFrominputFile = function (pathFile) {
        var input = this.readFile(pathFile);
        var inputToArray = input.split('\n');
        return inputToArray.map(function (n) { return +n; });
    };
    global.readFile = function (pathFile) {
        return fs.readFileSync(pathFile, "utf8", function (err, data) {
            if (err) {
                console.log("error: ", err);
                return;
            }
        });
    };
    return global;
}());
exports.global = global;
