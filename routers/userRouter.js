import Router from 'express';
import userController from '../controllers/userController.js';
import authHandler from '../middleware/authHandler.js'
import addTimesStamp from '../middleware/timestampHandler.js';
import validateUserEmail from '../middleware/userHandler.js';

const router = Router();

router.use((req, res, next) => {
    console.log('---> userRouter.js');
    next();
})

router.route('/')
    .post(userController.getAllUsers);

router.route('*')
    .post(validateUserEmail);

router.route('/register')
    .post(authHandler)
    .post(addTimesStamp)
    .post(userController.addUsers);

router.route('/login')
    .post(userController.checkUsers)
    .post(userController.loginUsers);

export default router;