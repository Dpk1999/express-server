import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration'
import { userRepository } from '../../libs/routes/authMiddleWare';

const user = [
    {
        _id: 1,
        name: 'Deepak',
        designation: 'Software Developer',
        location: 'Pune',
    },
    {
        _id: 2,
        name: 'Darshan',
        designation: 'Tester',
        location: 'Mumbai',
    },
    {
        _id: 3,
        name: 'Shreya',
        designation: 'frontend Developer',
        location: 'Noida',
    },
    {
        _id: 4,
        name: 'Siddhesh',
        designation: 'Backend Developer',
        location: 'Chennai',
    },
];
class User {
    read(read: any): any {
        throw new Error('Method not implemented.');
    }
    async get(req: Request, res: Response, next: NextFunction) {
        let user;
        const token = req.header('Authorization');
        const { secret } = config;
        try {
            user = jwt.verify(token, secret);
            const userData = await userRepository.findOne({ _id: user._id });
            return res.status(200).send({ message: 'Fetched data Successfully', data: userData });
        } catch (error) {
            return res.status(500).json({ message: 'error', error });
        }



    }
    async post(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        const users = {
            name: req.body.name,
            designation: req.body.designation,
            location: req.body.location,
        }
        const userData = await userRepository.create(users);
        return res.status(200).send({ message: 'user added sucessfully', data: userData });
    }
    put = async (req: Request, res: Response) => {
        const { _id, name, email } = req.body;
        const userData = await userRepository.update({ originalId: _id, name: name, email: email });

        return res.status(200).send({ message: 'Updated user successfully', data: userData });
    }
    rawUserData = () => {
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
    }
    delete = (req: Request, res: Response) => {
        const user = this.rawUserData();
        const requestName = req.params.name;
        const deletedData = this.rawUserData().filter((post, index) => {
            if (post.name !== requestName) return true;
        });
        return res.status(200).send({ message: 'deleted user successfully', data: deletedData });
    }
    createToken(req: Request, res: Response, next: NextFunction) {
        const token = jwt.sign(req.body, config.secret, { expiresIn: '10h' });
        console.log(token);
        res.status(200).send({ message: 'Token Succesfully Created', data: { token }, status: 'success' });

    }
}

export default new User();