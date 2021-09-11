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
const jwt = require("jsonwebtoken");
const configuration_1 = require("../../config/configuration");
const permissions_1 = require("../../../extraTs/utils/permissions");
exports.default = (module, permissionType) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    debugger;
    const token = req.header('Authorization');
    console.log(token);
    if (!token) {
        next({ error: 'Unauthorized', message: 'Token not found', status: 403 });
    }
    const { secret } = configuration_1.default;
    console.log(secret);
    let user;
    try {
        debugger;
        user = jwt.verify(token, secret);
    }
    catch (err) {
        next({ error: 'Unauthorized', message: 'User not Authorized', status: 403 });
    }
    console.log('User is', user);
    if (!user) {
        next({ error: 'Unauthorized', message: 'User not Authorized', status: 403 });
    }
    if (!(0, permissions_1.default)(module, user.role, permissionType)) {
        next({ error: 'Unauthorized', message: 'Permisssion Denied', status: 403 });
    }
    req.user = user;
    next();
});
//# sourceMappingURL=authMiddleWare.js.map