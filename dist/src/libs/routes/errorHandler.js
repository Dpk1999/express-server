"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This middleware function handle all error occur if routes all found
 * @param err
 * @param request
 * @param response
 * @param next
 */
const errorHandler = (err, request, response, next) => {
    const { message, error, status } = err;
    const errorResponse = {
        error: error || 'undefined',
        message: message || 'error',
        status: status || 500,
        timestamp: new Date()
    };
    response.status(errorResponse.status).json(errorResponse);
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map