import {config} from 'dotenv';

import * as Joi from '@hapi/joi';
import { IConfig } from './IConfig';
config();
const envVarsSchema=Joi.object({
  NODE_ENV:Joi.string().default('dev'),
  PORT: Joi.number().default(9000),
}).unknown().required();

const {value: envVars}=envVarsSchema.validate(process.env);

const configuration:IConfig = Object.freeze({
	env: envVars.NODE_ENV,
	port: envVars.PORT,
  secret: envVars.jwtSECRET,
});

export default configuration;