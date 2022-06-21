import { Router } from 'express';
import { authorizationMiddleware } from '../../middlewares/authorization.middleware';
import { get, update } from './user.controller';
import { updateValidation } from './user.validation';

const router = Router();

router.get('/:id', authorizationMiddleware, get);
router.patch('/:id', updateValidation, update);

export default router;
