import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import  configuration  from '../../config/configuration';
import hasPermission from '../hasPermission';
import ReviewerRepository from '../../repositories/reviewer/ReviwerRepository';

export const userRepository: UserRepository = new UserRepository();
const reviewerRepository: ReviewerRepository = new ReviewerRepository();

export default (modulename: string, permissionType: string) => async (req, res, next) => {
  const token: string = req.header('Authorization');

  if (!token) {
    next({ error: 'Unauthorized', message: 'Token not found', status: 403 });
  }

  // User
  let user: any;
  try {
    user = jwt.verify(token, configuration.secret);
  }
  catch (err) {
    next({ error: 'Unauthorized', message: 'User not Authorized', status: 403 });
  }
  console.log('User is', user);

  if (!user) {
    next({ error: 'Unauthorized', message: 'User not Authorized', status: 403 });
  }

  if (!hasPermission(modulename, user.role, permissionType)) {
    next({ error: 'Unauthorized', message: 'Admin Resources! Permission Denied.', status: 403});
  }

  req.user = user;
  next();

};

