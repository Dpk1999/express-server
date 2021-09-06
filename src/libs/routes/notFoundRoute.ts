import { NextFunction, Request, Response } from 'express';
/**
 * This middleware use handle not found routes
 */
export default (request: Request, response: Response, next: NextFunction) => {
    next({status: 400, error: 'Not Found'});
};