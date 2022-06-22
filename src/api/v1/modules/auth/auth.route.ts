import { Router } from 'express';
import { login, refresh, register } from './auth.controller';
import { loginValidation, registerValidation } from './auth.validation';

const router = Router();

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
router.post('/refresh', refresh);

export default router;
