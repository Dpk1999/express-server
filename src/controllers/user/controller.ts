import { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';
import { request } from 'http';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration'

const user = [
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
class User {
    read(read: any): any {
        throw new Error('Method not implemented.');
    }
    get(req: Request, res: Response, next: NextFunction) {
       
        return res.status(200).send({ message: 'Fetched data Successfully', data: user });
    }
    post(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        const users ={
            id :req.body.id,
            name :req.body.name,
            designation :req.body.designation,
            location :req.body.location,


        }
        user.push(users);
        return res.status(200).send({ message: 'user added sucessfully', data: user });
    }
    put = (req: Request, res: Response): any => {
        const user = this.rawUserData();

        const requestName = req.params.name;

        const data = user.find((post, index) => {
          if (post.name === requestName) return true;
        });
        data.designation = 'Associate Engineer';
        return res.status(200).send({ message: 'Updated user successfully', data: user });
    }
    rawUserData = () => {
        const user = [
            {
                id:1,
                name: 'Darshan',
                designation: 'user',
                location: 'Pune',
            },
            {
                id:2,
                name: 'Roshan',
                designation: 'Tester',
                location: 'Mumbai',
            },
            {
                id:3,
                name: 'Ashish',
                designation: 'frontend Developer',
                location: 'Noida',
            },
            {
                id:4,
                name: 'Darshani',
                designation: 'Designer',
                location: 'Chennai',
            },
        ];
        return user;
    }
    delete = (req: Request, res: Response) => {
        const user = this.rawUserData();
        const requestName = req.params.name;
        const deletedData = this.rawUserData().filter((post, index) => {
            if (post.name !== requestName) return true;
        });
        return res.status(200).send({ message: 'deleted user successfully', data: deletedData });
    }
    createToken(req:Request, res:Response, next:NextFunction){
        const token = jwt.sign(req.body, config.secret, {expiresIn:'10h'});
        console.log(token);
        res.status(200).send({message: 'Token Succesfully Created', data: { token }, status: 'success'});
    }
}

export default new User();