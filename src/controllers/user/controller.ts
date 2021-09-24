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
            email: req.body.email,
            role: req.body.role,
            password: req.body.password,
        }
        const userData = await userRepository.create(users);
        return res.status(200).send({ message: 'user added sucessfully', data: userData });
    }
    put = async (req: Request, res: Response) => {
        const  _id  = req.params._id 
        const { name, email } = req.body;
        const userData = await userRepository.update({ originalId: _id, name: name, email: email });

        return res.status(200).send({ message: 'Updated user successfully', data: userData });
    }
    delete = async (req: Request, res: Response) => {
        const requestId = req.params._id;
        const deleteData = await userRepository.delete(requestId)
        return res.status(200).send({ message: 'deleted user successfully', data: deleteData });
    }
    createToken(req: Request, res: Response, next: NextFunction) {
        const token = jwt.sign(req.body, config.secret, { expiresIn: '10h' });
        console.log(token);
        res.status(200).send({ message: 'Token Succesfully Created', data: { token }, status: 'success' });

    }
}

export default new User();