"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
// import { stringifyConfiguration } from 'tslint/lib/configuration';
class UserSchema extends mongoose.Schema {
    constructor(collections) {
        const baseSchema = Object.assign({
            _id: String,
            name: String,
            email: String,
            role: String,
            password: String
        });
        super(baseSchema, collections);
    }
}
exports.default = UserSchema;
//# sourceMappingURL=UserSchema.js.map