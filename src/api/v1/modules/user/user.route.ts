import { Router } from 'express';
import { authorizationMiddleware } from '../../middlewares/authorization.middleware';
import {
  create,
  get,
  getlist,
  remove,
  replace,
  update,
} from './user.controller';
import {
  createValidation,
  replaceValidation,
  updateValidation,
} from './user.validation';

const router = Router();

router.post('/', createValidation, create);
router.get('/', getlist);
router.get('/:id', authorizationMiddleware, get);
router.put('/:id', updateValidation, replace);
router.patch('/:id', replaceValidation, update);
router.delete('/:id', remove);

export default router;
