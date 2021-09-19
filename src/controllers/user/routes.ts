import { Router } from 'express';
import UserRoutes  from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';
import authMiddleware from '../../libs/routes/authMiddleWare';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { users } from '../../../extraTs/constants';


const router = Router();

router.get('/', authMiddleWare(users, 'read'),validationHandler(validation.get), UserRoutes.get);
router.post('/', authMiddleWare(users, 'write'), validationHandler(validation.create), UserRoutes.post);
router.put('/:id', authMiddleWare(users, 'write'), validationHandler(validation.update), UserRoutes.put);
router.delete('/:id', authMiddleWare(users, 'delete'), validationHandler(validation.delete), UserRoutes.delete);
router.post('/createToken', UserRoutes.createToken);
export default router;

