"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Object.freeze({
    // POST /api/trainee/create
    create: {
        id: {
            string: true,
            exists: true,
            isDecimal: {
                errorMessage: 'Bad Id format',
            },
            in: ['body'],
            errorMessage: 'Id is required',
        },
        name: {
            exists: true,
            isLength: {
                errorMessage: 'Name should be at least 3 characters.',
                options: { min: 3 }
            },
            matches: /(.*[a-z]){3}/i,
            in: ['body'],
            errorMessage: 'Name is required',
        },
    },
    // DELETE /api/trainee/delete
    delete: {
        id: {
            required: true,
            in: ['params'],
            errorMessage: 'Id is required',
        },
    },
    // GET /api/trainee/get
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        },
    },
    // UPDATE /api/trainee/update
    update: {
        id: {
            required: true,
            in: ['params'],
            errorMessage: 'Id is required',
        },
        name: {
            required: true,
            exists: true,
            isLength: {
                errorMessage: 'Name should be at least 3 characters.',
                options: { min: 3 }
            },
            matches: /(.*[a-z]){3}/i,
            in: ['body'],
            errorMessage: 'Name is required',
        },
    },
});
//# sourceMappingURL=validation.js.map