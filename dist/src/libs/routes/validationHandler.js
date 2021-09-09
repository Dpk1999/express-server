"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: no-var-requires
const { checkSchema, validationResult } = require('express-validator');
const validationHandler = (validator) => {
    return [
        checkSchema(validator), (req, res, next) => {
            console.log(req);
            const errors = validationResult(req);
            console.log('errors', errors);
            console.log('errors.isEmpty', errors.isEmpty());
            console.log('errors.array', errors.array());
            if (!errors.isEmpty()) {
                next({ message: 'Bad Request', status: 422, error: errors.array() });
            }
            next();
        }
    ];
};
exports.default = validationHandler;
//# sourceMappingURL=validationHandler.js.map