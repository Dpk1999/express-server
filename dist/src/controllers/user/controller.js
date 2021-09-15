"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class user {
    get(req, res, next) {
        const users = [
            {
                name: 'Peter',
                designation: 'SDE',
                location: 'Pune',
            },
            {
                name: 'Peter',
                designation: 'SDE',
                location: 'Pune',
            },
            {
                name: 'Peter',
                designation: 'SDE',
                location: 'Pune',
            },
        ];
        return res.status(200).send({ message: 'Fetched data Succesfully', data: users });
    }
    post(req, res, next) {
        const { name, designation, location } = req.body;
        if (!name) {
            return res.status(400).send({ message: 'required trainee details', error: 'error msg' });
        }
        return res.status(200).send({ message: 'trainee added succesfully' });
    }
}
exports.default = new user;
//# sourceMappingURL=controller.js.map