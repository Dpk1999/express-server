import { Router } from 'express';
import UserRoutes from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { users } from '../../libs/constant';



const router = Router();
/**
 * @swagger
 * /user:
 *   get:
 *        tags: [USER]
 *        description: Returns all the user
 *        parameters:
 *         - in: query
 *           name: skip
 *           schema:
 *            type: string
 *         - in: query
 *           name: limit
 *           schema:
 *            type: string
 *         - in: query
 *           name: sort
 *           schema:
 *            type: string
 *           description: sort by email or name
 *         - in: query
 *           name: search
 *           schema:
 *            type: string
 *           description: search by email or name
 *        security:
 *             - bearerAuth: []
 *        responses :
 *             200:
 *                  description: Array of user
 *                  schema:
 *                       $ref: '#/definitions/UserListResponse'
 */

router.get('/', authMiddleWare(users, 'read'), validationHandler(validation.getAll), UserRoutes.getAll);
/**
 * @swagger
 * /user:
 *   post:
 *     description: Create New User
 *     tags: [users]
 *     requestBody:
 *        description: Enter name,email,password,role to create new user
 *        required: true
 *        content:
 *           application/json:
 *            schema:
 *             type: object
 *             required:
 *              -email
 *              -password
 *              -role
 *              -name
 *             properties:
 *               name:
 *                type: string
 *                example: 'Mayur Mahajan'
 *               role:
 *                type: string
 *                example: 'trainee'
 *               email:
 *                type: string
 *                example: 'mayur.mahajan@successive.tech'
 *               password:
 *                type: string
 *                example: 'Mayur@123'
 *     responses:
 *         201:
 *           description: Created new user successfully
 */


router.post('/', authMiddleWare(users, 'write'), validationHandler(validation.create), UserRoutes.post);


/**
 * @swagger
 * /user/{id}:
 *   put:
 *     description: Update existing User
 *     tags: [users]
 *     consumes:
 *         - application/json
 *     produces:
 *         - application/json
 *     parameters:
 *         - in: path
 *           name: id
 *           schema:
 *            type: string
 *           required: true
 *           description: originalId of the user
 *           example: 1234frg43455
 *     requestBody:
 *        description: Enter field for update user
 *        required: true
 *        content:
 *           application/json:
 *            schema:
 *             type: object
 *             required:
 *              -email
 *             properties:
 *               name:
 *                type: string
 *               email:
 *                type: string
 *               role:
 *                type: string
 *               password:
 *                type: string
 *                example:
 *     responses:
 *         200:
 *           description: User updated successfully
 */
router.put('/:_id', authMiddleWare(users, 'write'), validationHandler(validation.update), UserRoutes.put);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     description: Delete User
 *     tags: [users]
 *     parameters:
 *         - in: path
 *           name: id
 *           schema:
 *            type: string
 *           required: true
 *           description: id of the user
 *           example: 1234frg43455
 *     responses:
 *         200:
 *           description: user deleted successfully
 */

router.delete('/:_id', authMiddleWare(users, 'delete'), validationHandler(validation.delete), UserRoutes.delete);
/**
 * @swagger
 * /user/createToken:
 *   post:
 *     description: To generate authorization token
 *     tags: [users]
 *     requestBody:
 *        description: Enter email and password to generate token
 *        required: true
 *        content:
 *           application/json:
 *            schema:
 *             type: object
 *             required:
 *              -_id
 *              -email
 *              -password
 *             properties:
 *               _id:
 *                type: string
 *               email:
 *                type: string
 *               password:
 *                type: string
 *     responses:
 *         200:
 *           description: Token genrated
 */
router.post('/createToken', UserRoutes.createToken);
export default router;




