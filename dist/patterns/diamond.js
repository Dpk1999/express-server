"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = '';
const diamond = (n) => {
    let space = n - 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < space; j++) {
            str += (' ');
        }
        for (let j = 0; j <= i; j++) {
            str += ('* ');
        }
        str += '\n';
        space--;
    }
    space = 0;
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < space; j++) {
            str += (' ');
        }
        for (let j = 0; j < i; j++) {
            str += ('* ');
        }
        str += '\n';
        space++;
    }
    console.log(str);
};
exports.default = diamond;
//# sourceMappingURL=diamond.js.map