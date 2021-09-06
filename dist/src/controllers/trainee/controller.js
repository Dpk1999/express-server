"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class trainees {
    get(req, res, next) {
        const trainee = [
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
        return res.status(200).send({ message: 'Fetched data Succesfully', data: trainees });
    }
    post(req, res, next) {
        const { name, designation, location } = req.body;
        if (!name) {
            return res.status(400).send({ message: 'required trainee details', error: 'error msg' });
        }
        return res.status(200).send({ message: 'trainee added succesfully' });
    }
}
exports.default = new trainees;
//# sourceMappingURL=controller.js.map