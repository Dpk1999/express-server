import { Router } from 'express';
import UserRoutes from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { users } from '../../libs/constant';


const router = Router();

router.get('/', authMiddleWare(users, 'read'), validationHandler(validation.getAll), UserRoutes.getAll);
router.post('/', authMiddleWare(users, 'write'), validationHandler(validation.create), UserRoutes.post);
router.put('/:_id', authMiddleWare(users, 'write'), validationHandler(validation.update), UserRoutes.put);
router.delete('/:_id', authMiddleWare(users, 'delete'), validationHandler(validation.delete), UserRoutes.delete);
router.post('/createToken', UserRoutes.createToken);
export default router;

