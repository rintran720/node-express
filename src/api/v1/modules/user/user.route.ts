import { Router } from 'express';
import { authorizationMiddleware } from '../../middlewares/authorization.middleware';
import { get, replace, update } from './user.controller';
import { replaceValidation, updateValidation } from './user.validation';

const router = Router();

router.get('/:id', authorizationMiddleware, get);
router.patch('/:id', updateValidation, update);
// router.put('/:id', replaceValidation, replace); // do not use this

export default router;
