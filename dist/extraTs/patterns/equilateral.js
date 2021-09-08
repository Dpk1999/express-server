"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = '';
const equilateral = (size) => {
    for (let i = 1; i <= size; i++) {
        for (let s = size - 1; s >= i; s--) {
            str += ' ';
        }
        for (let j = 1; j <= i; j++) {
            str += '* ';
        }
        str += '\n';
    }
    console.log(str);
};
exports.default = equilateral;
//# sourceMappingURL=equilateral.js.map