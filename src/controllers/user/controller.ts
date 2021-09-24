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
        const{name, email, role, password } = req.body
        const hash = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
        const userdata = { name, email, role, password:hash}
        const user = await userRepository.create(userdata);
        return res.status(200).send({ message: 'user added sucessfully', data: user });
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
        const token = jwt.sign(req.body, configuration.secret, { expiresIn: '15m' });
        console.log(token);
        res.status(200).send({ message: 'Token Succesfully Created', data: { token }, status: 'success' });

    }
}

export default new User();