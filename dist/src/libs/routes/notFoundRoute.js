"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This middleware use handle not found routes
 */
exports.default = (request, response, next) => {
    next({ status: 400, error: 'Not Found' });
};
//# sourceMappingURL=notFoundRoute.js.map