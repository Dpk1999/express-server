import { Request, Response, NextFunction } from 'express';
import { request } from 'http';

const trainee = [
    {
        id: 1,
        name: 'Deepak',
        designation: 'Software Developer',
        location: 'Pune',
    },
    {
        id:2,
        name: 'Darshan',
        designation: 'Tester',
        location: 'Mumbai',
    },
    {
        id:3,
        name: 'Shreya',
        designation: 'frontend Developer',
        location: 'Noida',
    },
    {
        id:4,
        name: 'Siddhesh',
        designation: 'Backend Developer',
        location: 'Chennai',
    },
];
class Trainee {
    get(req: Request, res: Response, next: NextFunction) {
       
        return res.status(200).send({ message: 'Fetched data Successfully', data: trainee });
    }
    post(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        const trainees ={
            id :req.body.id,
            name :req.body.name,
            designation :req.body.designation,
            location :req.body.location,


        }
        trainee.push(trainees);
        return res.status(200).send({ message: 'trainee added sucessfully', data: trainee });
    }
    put = (req: Request, res: Response): any => {
        const trainee = this.rawTraineeData();

        const requestName = req.params.name;

        const data = trainee.find((post, index) => {
          if (post.name === requestName) return true;
        });
        data.designation = 'Associate Engineer';
        return res.status(200).send({ message: 'Updated trainee successfully', data: trainee });
    }
    rawTraineeData = () => {
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
    }
    delete = (req: Request, res: Response) => {
        const trainee = this.rawTraineeData();
        const requestName = req.params.name;
        const deletedData = this.rawTraineeData().filter((post, index) => {
            if (post.name !== requestName) return true;
        });
        return res.status(200).send({ message: 'deleted trainee successfully', data: deletedData });
    }
}

export default new Trainee();