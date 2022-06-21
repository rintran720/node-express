import { Router } from 'express';
import authRouter from './modules/auth/auth.route';
import bookRouter from './modules/book/book.route';
import userRouter from './modules/user/user.route';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/books', bookRouter);

export default router;
