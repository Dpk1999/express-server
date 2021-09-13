"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const configuration_1 = require("../../config/configuration");
const user = [
    {
        id: 1,
        name: 'Deepak',
        designation: 'Software Developer',
        location: 'Pune',
    },
    {
        id: 2,
        name: 'Darshan',
        designation: 'Tester',
        location: 'Mumbai',
    },
    {
        id: 3,
        name: 'Shreya',
        designation: 'frontend Developer',
        location: 'Noida',
    },
    {
        id: 4,
        name: 'Siddhesh',
        designation: 'Backend Developer',
        location: 'Chennai',
    },
];
class User {
    constructor() {
        this.put = (req, res) => {
            const user = this.rawUserData();
            const requestName = req.params.name;
            const data = user.find((post, index) => {
                if (post.name === requestName)
                    return true;
            });
            data.designation = 'Associate Engineer';
            return res.status(200).send({ message: 'Updated user successfully', data: user });
        };
        this.rawUserData = () => {
            const user = [
                {
                    id: 1,
                    name: 'Darshan',
                    designation: 'user',
                    location: 'Pune',
                },
                {
                    id: 2,
                    name: 'Roshan',
                    designation: 'Tester',
                    location: 'Mumbai',
                },
                {
                    id: 3,
                    name: 'Ashish',
                    designation: 'frontend Developer',
                    location: 'Noida',
                },
                {
                    id: 4,
                    name: 'Darshani',
                    designation: 'Designer',
                    location: 'Chennai',
                },
            ];
            return user;
        };
        this.delete = (req, res) => {
            const user = this.rawUserData();
            const requestName = req.params.name;
            const deletedData = this.rawUserData().filter((post, index) => {
                if (post.name !== requestName)
                    return true;
            });
            return res.status(200).send({ message: 'deleted user successfully', data: deletedData });
        };
    }
    read(read) {
        throw new Error('Method not implemented.');
    }
    get(req, res, next) {
        return res.status(200).send({ message: 'Fetched data Successfully', data: user });
    }
    post(req, res, next) {
        console.log(req.body);
        const users = {
            id: req.body.id,
            name: req.body.name,
            designation: req.body.designation,
            location: req.body.location,
        };
        user.push(users);
        return res.status(200).send({ message: 'user added sucessfully', data: user });
    }
    createToken(req, res, next) {
        const token = jwt.sign(req.body, configuration_1.default.secret, { expiresIn: '10h' });
        console.log(token);
        res.status(200).send({ message: 'Token Succesfully Created', data: { token }, status: 'success' });
    }
}
exports.default = new User();
//# sourceMappingURL=controller.js.map