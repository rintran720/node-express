import { Router } from 'express';
import authRouter from './modules/auth/auth.route';
import userRouter from './modules/user/user.route';

const router = Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);

export default router;
