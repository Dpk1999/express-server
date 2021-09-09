"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Trainee {
    constructor() {
        this.put = (req, res) => {
            const trainee = this.rawTraineeData();
            const requestName = req.params.name;
            const data = trainee.find((post, index) => {
                if (post.name === requestName)
                    return true;
            });
            data.designation = 'Associate Engineer';
            return res.status(200).send({ message: 'Updated trainee successfully', data: trainee });
        };
        this.rawTraineeData = () => {
            const trainee = [
                {
                    name: 'Darshan',
                    designation: 'developer',
                    location: 'Pune',
                },
                {
                    name: 'Roshan',
                    designation: 'Tester',
                    location: 'Mumbai',
                },
                {
                    name: 'Ashish',
                    designation: 'frontend Developer',
                    location: 'Noida',
                },
                {
                    name: 'Darshani',
                    designation: 'Designer',
                    location: 'Chennai',
                },
            ];
            return trainee;
        };
        this.delete = (req, res) => {
            const trainee = this.rawTraineeData();
            const requestName = req.params.name;
            const deletedData = this.rawTraineeData().filter((post, index) => {
                if (post.name !== requestName)
                    return true;
            });
            return res.status(200).send({ message: 'deleted trainee successfully', data: deletedData });
        };
    }
    get(req, res, next) {
        const trainee = [
            {
                name: 'Aashlesha',
                designation: 'developer',
                location: 'Pune',
            },
            {
                name: 'Darshan',
                designation: 'Tester',
                location: 'Mumbai',
            },
            {
                name: 'Akshay',
                designation: 'frontend Developer',
                location: 'Noida',
            },
            {
                name: 'Darshani',
                designation: 'Designer',
                location: 'Chennai',
            },
        ];
        return res.status(200).send({ message: 'Fetched data Successfully', data: trainee });
    }
    post(req, res, next) {
        console.log(req.body);
        const { name, designation, location } = req.body;
        if (!name) {
            return res.status(400).send({ message: 'required trainee details', error: 'error msg' });
        }
        return res.status(200).send({ message: 'trainee added sucessfully' });
    }
}
exports.default = new Trainee();
//# sourceMappingURL=controller.js.map