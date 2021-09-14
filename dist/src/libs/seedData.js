"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = require("../repositories/user/UserRepository");
const userRepository = new UserRepository_1.default();
exports.default = () => {
    userRepository.count()
        .then(res => {
        console.log('res', res);
        if (res === 0) {
            console.log('Data seeding in progress');
            userRepository.create({
                name: 'Head-Trainer',
                role: 'head-trainer',
                email: 'headtrainer@successive.tech',
                password: 'Training@123'
            });
            userRepository.create({
                name: 'Trainer',
                role: 'trainer',
                email: 'trainer@successive.tech',
                password: 'Training@123'
            });
        }
    }).catch(err => (console.log(err)));
};
//# sourceMappingURL=seedData.js.map