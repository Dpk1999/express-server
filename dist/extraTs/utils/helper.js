"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
const validateEmail = (email) => {
    var validRegex = /^[a-zA-Z0-9.^]+@successive.tech/;
    if (validRegex.test(email))
        return true;
    else
        return false;
};
exports.validateEmail = validateEmail;
//# sourceMappingURL=helper.js.map