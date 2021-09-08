"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const Joi = require("@hapi/joi");
(0, dotenv_1.config)();
const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string().default('dev'),
    PORT: Joi.number().default(9000),
}).unknown().required();
const { value: envVars } = envVarsSchema.validate(process.env);
const configuration = Object.freeze({
    env: envVars.NODE_ENV,
    port: envVars.PORT,
});
exports.default = configuration;
//# sourceMappingURL=configuration.js.map