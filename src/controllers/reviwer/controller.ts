import { Request, Response, NextFunction } from 'express';
import ReviewerRepository from '../../repositories/reviewer/ReviwerRepository';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import { TRAINEE, LIMIT, SKIP } from '../../libs/constant';
import configuration from '../../config/configuration';


class ReviewerController {
    get = async (request: Request, response: Response): Promise<Response> => {
        const reviewerRepository: ReviewerRepository = new ReviewerRepository();
        try {
            const query = {
                originalId: request.params._id,

            };
            const result = await reviewerRepository.findOne(query);
            return response
                .status(200)
                .send({ message: 'Fetched data successfully', data: result });
        } catch (error) {
            return response
                .status(400)
                .json({ status: 'Bad Request', message: error });
        }
    };

    getAll = async (request: Request, response: Response): Promise<Response> => {
        const reviewerRepository: ReviewerRepository = new ReviewerRepository();
        try {
            const { search, skip = SKIP, limit = LIMIT, sort = { createdAt: -1 } } = request.query;
            console.log({ skip, limit, sort });
            const query: any = {
                role: TRAINEE,
                $or: [
                    { name: { $regex: new RegExp(search as string), $options: 'i' } },
                    { email: { $regex: new RegExp(search as string), $options: 'i' } }
                ]
            };
            console.log('query', query);
            const _result = await reviewerRepository.find(
                query,
                undefined,
                { skip, limit, sort });
            const _count = await reviewerRepository.count();
            const _data = [{ totalNoOfRecords: _count, count: _result.length, result: _result }];
            if (_result.length === 0) {
                return response
                    .status(404)
                    .send({ message: 'data not found' });
            }
            return response
                .status(200)
                .send({ message: 'Fetched data successfully', data: _data });
        } catch (error) {
            return response
                .status(400)
                .json({ status: 'Bad Request', message: error });
        }
    };

    post = async (request: Request, response: Response): Promise<Response> => {
        const reviewerRepository: ReviewerRepository = new ReviewerRepository();
        try {
            const data = {
                name: request.body.name,
                email: request.body.email,
                role: request.body.role,
                password: request.body.password,
                feedBack: request.body.feedBack
            };
            const result = await reviewerRepository.create(data);
            return response
                .status(200)
                .send({ message: 'New User Created Successfully', data: 'result' });
        } catch (error) {
            return response
                .status(400)
                .json({ status: 'Bad Request', message: error });
        }
    };

    put = async (request: Request, response: Response): Promise<Response> => {
        const reviewerRepository: ReviewerRepository = new ReviewerRepository();
        try {
            const data = {
                originalId: request.params.id,
                ...request.body
            };
            const role = request.user.role;
            console.log(role);
            const previousData = await reviewerRepository.findOne({ originalId: data.originalId });
            let result;
            if (previousData.role === 'trainee') {
                result = await reviewerRepository.update(data);
                return response
                    .status(200)
                    .send({ message: 'Update User successfully', data: result });
            }
            else {
                return response
                    .status(400)
                    .send({ message: 'Reviewer has not permission to update' + previousData.role });

            }
        } catch (error) {
            return response
                .status(400)
                .json({ status: 'Bad Request', message: error });
        }
    };

    delete = async (request: Request, response: Response): Promise<Response> => {
        const reviewerRepository: ReviewerRepository = new ReviewerRepository();
        try {
            const _id = request.params._id;
            const data = {
                originalId: _id,
                deletedAt: Date()
            };
            const role = request.user.role;
            console.log(role);
            const previousData = await reviewerRepository.findOne({ originalId: data.originalId });
            let result;
            if (previousData.role === 'trainee') {
                result = await reviewerRepository.update(data);
                return response
                    .status(200)
                    .send({ message: 'Update User successfully', data: result });
            }
            else {
                return response
                    .status(400)
                    .send({ message: 'Reviewer has not permission to update' + previousData.role });

            }
        } catch (error) {
            return response
                .status(400)
                .json({ status: 'Bad Request', message: error });
        }
    };
    createToken(req: Request, res: Response, next: NextFunction) {
        const token = jwt.sign(req.body, configuration.secret, { expiresIn: '15m' });
        console.log(token);
        res.status(200).send({ message: 'Token Succesfully Created', data: { token }, status: 'success' });

    };
}
export default new ReviewerController();