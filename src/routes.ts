import { Router } from 'express';


import  { TraineeRoutes, UserRoutes } from './controllers';

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

export default router;