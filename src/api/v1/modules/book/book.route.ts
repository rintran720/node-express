import { Router } from 'express';
import { authorizationMiddleware } from '../../middlewares/authorization.middleware';
import {
  create,
  get,
  getlist,
  remove,
  replace,
  update,
} from './book.controller';
import {
  createValidation,
  replaceValidation,
  updateValidation,
} from './book.validation';

const router = Router();

router.post('/', createValidation, create);
router.get('/', getlist);
router.get('/:id', get);
router.patch('/:id', updateValidation, update);
router.put('/:id', replaceValidation, replace);
router.delete('/:id', remove);

export default router;
