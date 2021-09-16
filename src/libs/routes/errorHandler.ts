import { NextFunction, Request, Response } from 'express';

/**
 * This middleware function handle all error occur if routes all found
 * @param err
 * @param request
 * @param response
 * @param next
 */
const errorHandler = (err, request: Request, response: Response, next: NextFunction) => {
    const {message, error, status} = err;
    const errorResponse = {
        error: error || 'undefined',
        message: message || 'error',
        status: status || 500,
        timestamp : new Date()
    };
    response.status(errorResponse.status).json(errorResponse);
};
export default errorHandler;