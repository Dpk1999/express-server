import { Router } from 'express';
import UserRoutes from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { users } from '../../libs/constant';


const router = Router();

router.get('/', authMiddleWare(users, 'read'), validationHandler(validation.get), UserRoutes.get);
router.post('/', authMiddleWare(users, 'read'), validationHandler(validation.create), UserRoutes.post);
router.put('/', authMiddleWare(users, 'read'), validationHandler(validation.update), UserRoutes.put);
router.delete('/:id', authMiddleWare(users, 'read'), validationHandler(validation.delete), UserRoutes.delete);
router.post('/createToken', UserRoutes.createToken);
export default router;

