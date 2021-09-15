"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const jwt = require("jsonwebtoken");
const configuration_1 = require("../../config/configuration");
const permissions_1 = require("../../../extraTs/utils/permissions");
const UserRepository_1 = require("../../repositories/user/UserRepository");
exports.userRepository = new UserRepository_1.default();
exports.default = (module, permissionType) => (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get authorization token from header
    const token = request.header('Authorization');
    // check if token is exits or not
    if (!token) {
        next({ error: 'Unauthorized', message: 'Token not found', status: 403 });
    }
    // verify token
    let user;
    try {
        const { secret } = configuration_1.default;
        user = jwt.verify(token, secret);
    }
    catch (err) {
        next({
            error: 'Unauthorized',
            message: 'User not Authorized',
            status: 403,
        });
    }
    // check user exits or not
    if (!user) {
        next({
            error: 'Unauthorized',
            message: 'User not Authorized',
            status: 403,
        });
    }
    let userData;
    try {
        userData = yield exports.userRepository.findOne({ _id: user._id });
        if (!userData) {
            next({
                error: 'Unauthorized',
                message: 'User not Authorized',
                status: 403,
            });
        }
    }
    catch (err) {
        next({
            error: 'Bad Request',
            message: err.message,
            status: 400,
        });
    }
    // check user has permission to access module or not
    if (!(0, permissions_1.default)(module, userData.role, permissionType)) {
        next({
            error: 'Unauthorized',
            message: 'Permisssion Denied',
            status: 403,
        });
    }
    request.user = user;
    next();
});
//# sourceMappingURL=authMiddleWare.js.map