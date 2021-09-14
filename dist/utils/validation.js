"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./helper");
const validEmails = [];
const invalidEmails = [];
const validateUsers = (users) => {
    users.map((user) => {
        const { traineeEmail, reviewerEmail } = user;
        if ((0, helper_1.validateEmail)(traineeEmail)) {
            validEmails.push(traineeEmail);
        }
        else {
            invalidEmails.push(traineeEmail);
        }
        ;
        if ((0, helper_1.validateEmail)(reviewerEmail)) {
            validEmails.push(reviewerEmail);
        }
        else {
            invalidEmails.push(reviewerEmail);
        }
        ;
    });
    console.log('Valid Emails Count = ' + validEmails.length.toString() + '\n');
    validEmails.map(e => (console.log(e + '\n')));
    console.log('\n');
    console.log('Invalid Emails Count = ' + invalidEmails.length.toString() + '\n');
    invalidEmails.map(e => (console.log(e + '\n')));
};
exports.default = validateUsers;
//# sourceMappingURL=validation.js.map