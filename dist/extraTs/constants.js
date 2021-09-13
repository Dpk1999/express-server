"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.permissions = exports.BCRYPT_SALT_ROUNDS = exports.HEAD_TRAINER = exports.TRAINER = exports.user = exports.TRAINEE = exports.trainees = void 0;
exports.trainees = 'trainees';
exports.TRAINEE = 'trainee';
exports.user = 'user';
exports.TRAINER = 'trainer';
exports.HEAD_TRAINER = 'head-trainer';
exports.BCRYPT_SALT_ROUNDS = 10;
exports.permissions = {
    [exports.trainees]: {
        read: [exports.TRAINEE, exports.TRAINER, exports.HEAD_TRAINER],
        write: [exports.TRAINER, exports.HEAD_TRAINER],
        delete: [exports.HEAD_TRAINER],
    },
    [exports.user]: {
        read: [exports.TRAINEE, exports.TRAINER, exports.HEAD_TRAINER],
    },
};
const users = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    },
    {
        traineeEmail: 'trainee2@gmail.com',
        reviewerEmail: 'reviewer3@successive.tech',
    },
    {
        traineeEmail: 'trainee3@successive.tech',
        reviewerEmail: 'reviewer3@gmail.com',
    },
];
exports.users = users;
//# sourceMappingURL=constants.js.map