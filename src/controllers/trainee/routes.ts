import { Router } from 'express';
import TraineeRoutes  from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';
import authMiddleware from '../../libs/routes/authMiddleWare';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { trainees } from '../../../extraTs/constants';


const router = Router();

router.get('/', authMiddleWare(trainees, 'read'),validationHandler(validation.get), TraineeRoutes.get);
router.post('/', authMiddleWare(trainees, 'write'), validationHandler(validation.create), TraineeRoutes.post);
router.put('/:id', authMiddleWare(trainees, 'write'), validationHandler(validation.update), TraineeRoutes.put);
router.delete('/:id', authMiddleWare(trainees, 'delete'), validationHandler(validation.delete), TraineeRoutes.delete);
router.post('/createToken', TraineeRoutes.createToken);
export default router;

