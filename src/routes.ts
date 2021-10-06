import { Router } from 'express';


import  { TraineeRoutes, UserRoutes, ReviewerRoutes} from './controllers';


const router = Router();

/**
 * @swagger
 * securityDefinitions:
 *  APIKeyHeader:
 *     type: apiKey
 *     in: header
 *     name: Authorization
 */

router.use('/trainee', TraineeRoutes);
router.use('/user',UserRoutes);
router.use('/reviewer',ReviewerRoutes);

export default router;