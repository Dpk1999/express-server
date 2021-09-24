import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import hasPermission from '../../../extraTs/utils/permissions';

import UserRepository from '../../repositories/user/UserRepository';
export  const userRepository: UserRepository = new UserRepository();
export default (module: string, permissionType: string): any =>
  async (
    req,
    res,
    next
  ): Promise<void> => {
    // get authorization token from header
    const token: string = req.header('Authorization');
    // check if token is exits or not
    if (!token) {
      next({ error: 'Unauthorized', message: 'Token not found', status: 403 });
    }
    // verify token
    let user;
    try {
      const { secret } = config;
      user = jwt.verify(token, secret);
    } catch (err) {
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
     
      userData = await userRepository.findOne({ _id: user._id });
      if (!userData) {
        next({
          error: 'Unauthorized',
          message: 'User not Authorized',
          status: 403,
        });
      }
    } catch (err) {
      next({
        error: 'Bad Request',
        message: err.message,
        status: 400,
      });
    }
    // check user has permission to access module or not
    if (!hasPermission(module, userData.role, permissionType)) {
      next({
        error: 'Unauthorized',
        message: 'Permisssion Denied',
        status: 403,
      });
    }
    req.user = user;
    next();
  };