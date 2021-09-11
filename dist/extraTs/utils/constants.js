"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HEAD_TRAINER = exports.TRAINER = exports.users = exports.TRAINEE = exports.trainees = void 0;
exports.trainees = 'trainees';
exports.TRAINEE = 'trainee';
exports.users = 'users';
exports.TRAINER = 'trainer';
exports.HEAD_TRAINER = 'head-trainer';
const permissions = {
    trainees: {
        read: [exports.TRAINEE, exports.TRAINER, exports.HEAD_TRAINER],
        write: [exports.TRAINER, exports.HEAD_TRAINER],
        delete: [exports.HEAD_TRAINER],
    },
    users: {
        read: [exports.TRAINEE, exports.TRAINER, exports.HEAD_TRAINER],
    },
};
exports.default = permissions;
//# sourceMappingURL=constants.js.map