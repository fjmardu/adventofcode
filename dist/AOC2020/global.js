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
}
exports.global = global;
