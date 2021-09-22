import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration'
import { userRepository } from '../../libs/routes/authMiddleWare';
import * as bcrypt from 'bcrypt'
import { BCRYPT_SALT_ROUNDS } from '../../libs/constant';


class User {
    read(read: any): any {
        throw new Error('Method not implemented.');
    }
    async get(req: Request, res: Response, next: NextFunction) {
        
        try {
            
            const userData = await userRepository.findOne({});
            return res.status(200).send({ message: 'Fetched data Successfully', data: userData });
        } catch (error) {
            return res.status(500).json({ message: 'error', error });
        }



    }
    async post(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        const { name, email, password } = req.body
        const hash = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
        const users = { name, email, password:hash}
        const userData = await userRepository.create(users);
        const accessToken = jwt.sign(users, configuration.secret, { expiresIn: '15m' });
        const userCreate = jwt.verify(accessToken, configuration.secret);
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
        const token = jwt.sign(req.body, configuration.secret, { expiresIn: '15m' });
        console.log(token);
        res.status(200).send({ message: 'Token Succesfully Created', data: { token }, status: 'success' });

    }
}

export default new User();