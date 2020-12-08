"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.global = void 0;
class global {
    static inputToArrayInt(input) {
        const arrayStr = input.split('\n');
        const arrayNumber = arrayStr.map(str => parseInt(str));
        return arrayNumber;
    }
    static inputToArrayStr(input) {
        return input.split('\n');
    }
    static inputToArrayStrSinEspacios(input) {
        const fueraEspacios = input.replace(/ /g, "");
        return fueraEspacios.split('\n');
    }
    static inputToStrArrayByBlankLine(input) {
        //sustituyo las nuevas líneas por espacios
        input = input.replace(/(?:\r\n|\r|\n)/g, " ");
        const resp = input.split("  ");
        return resp;
    }
}
exports.global = global;
