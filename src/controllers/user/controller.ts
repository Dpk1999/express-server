import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration'
import { userRepository } from '../../libs/routes/authMiddleWare';
import * as bcrypt from 'bcrypt'
import { BCRYPT_SALT_ROUNDS } from '../../libs/constant';
import UserRepository from '../../repositories/user/UserRepository';
import { TRAINEE, LIMIT, SKIP } from '../../libs/constant';


class User {

    async get(req: Request, res: Response, next: NextFunction) {

        try {

            const userData = await userRepository.findOne({});
            return res.status(200).send({ message: 'Fetched data Successfully', data: userData });
        } catch (error) {
            return res.status(500).json({ message: 'error', error });
        }



    }

    async getAll(request: Request, response: Response){
        const userRepository: UserRepository = new UserRepository();
        try {
            const { skip = SKIP, limit = LIMIT, sort = { createdAt: -1 } } = request.query;
            console.log({ skip, limit, sort });
            console.log(TRAINEE);
            
            const _result = await userRepository.find({ role: TRAINEE }, undefined, { skip, limit, sort });
            const _count = await userRepository.count();
            const _data = [{ count: _count, result: _result }];
            return response
                .status(200)
                .send({ message: 'Fetched data successfully', data: _data });
        } catch (error) {
            return response
                .status(400)
                .json({ status: 'Bad Request', message: error });
        }
    };

    async post(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        const { name, email, password, role } = req.body
        const hash = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
        const users = { name, email, password: hash, role }
        const userData = await userRepository.create(users);
        const accessToken = jwt.sign(users, configuration.secret, { expiresIn: '15m' });
        const userCreate = jwt.verify(accessToken, configuration.secret);
        return res.status(200).send({ message: 'user added sucessfully', data: userData });
    }
    put = async (request: Request, response: Response): Promise < Response > => {
        const userRepository: UserRepository = new UserRepository();
        try {
          const data = {
            originalId : request.params.id,
            ...request.body
        };
            const result = await userRepository.update(data);
                return response
                    .status(200)
                    .send({ message: 'Updated trainee successfully', data: result});
        } catch (error) {
            return response
              .status(400)
              .json({ status: 'Bad Request', message: error });
        }
      };
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
    createToken = async (request: Request, response: Response, next: NextFunction): Promise<Response> => {
        const userRepository: UserRepository = new UserRepository();
        try {
          const { id , email, password } = request.body;
          const user = await userRepository.findOne({ email });
          let token;
          if (user) {
            const validatePassword = await bcrypt.compare(password, user.password);
            console.log(user, '===', validatePassword);
            if (validatePassword) {
              token = jwt.sign({ _id: id, _email: email}, configuration.secret, { expiresIn: '15m' });
            } else {
              return response
                .status(401)
                .send({ message: 'Invalid Password' });
            }
          } else {
            return response
              .status(401)
              .send({ message: 'User does not exist' });
          }
          return response
            .status(200)
            .send({
              message: 'Token successfully created',
              data: { token },
              status: 'success',
            });
        } catch (error) {
          return response
            .status(400)
            .json({ status: 'Bad Request', message: error });
        }
      };
}

export default new User();