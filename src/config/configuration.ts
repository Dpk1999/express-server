import {config} from 'dotenv';

import * as Joi from '@hapi/joi';
import { IConfig } from './IConfig';
config();
const envVarsSchema=Joi.object({
  NODE_ENV:Joi.string().default('dev'),
  PORT: Joi.number().default(9000),
  jwtSECRET: Joi.string().default(`2L'4L6P?zZW8/>s;NV$d`),
  MONGO_URL: Joi.string().default('mongodb://localhost:27017/express-training'),
  PASSWORD: Joi.string().default('Training@123')
}).unknown().required();

const {value: envVars}=envVarsSchema.validate(process.env);

const configuration:IConfig = Object.freeze({
	env: envVars.NODE_ENV,
	port: envVars.PORT,
  secret: envVars.jwtSECRET,
  mongoURL: envVars.MONGO_URL,
  pass: envVars.PASSWORD
});

export default configuration;