import {config} from 'dotenv';
import * as Joi from '@hapi/joi';
import { IConfig } from './IConfig';
import * as version_ from '../../package.json';
const version = version_.version;
export const SWAGGER_URL = '/api-docs';
config();
const envVarsSchema=Joi.object({
  NODE_ENV:Joi.string().default('dev'),
  PORT: Joi.number().default(9000),
  MONGO_URL: Joi.string().default('mongodb://localhost:27017/express-training'),
  PASSWORD:Joi.string().default("Training@123")

}).unknown().required();

const {value: envVars}=envVarsSchema.validate(process.env);
export const ABOUT = {
  description: 'Successive with Swagger',
  // in: 'Headers',
  // name: 'Authorization',
  // serviceConfig: 'Serviceconfig',
  title: 'Training Project - MERN',
  // type: 'apiKey',
  // user: 'User',
};

const configuration:IConfig = Object.freeze({
	env: envVars.NODE_ENV,
	port: envVars.PORT,
  secret: envVars.jwtSECRET,
  mongoURL: envVars.MONGO_URL,
  pass:envVars.PASSWORD,
  swaggerDefinition: {
    openapi: '3.0.0',
    servers: [{url: 'http://localhost:9000/api/'}],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [{
      bearerAuth: []
    }],
  info: {
   ...ABOUT,
      version,
    },
  },
swaggerUrl: SWAGGER_URL,
});

export default configuration;