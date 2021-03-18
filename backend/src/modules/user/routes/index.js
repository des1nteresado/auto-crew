import { Router } from 'express';

import getUser from '../controllers/getUser';
import updateUser from '../controllers/updateUser';

import verifyToken from '../../../middlewares/verifyToken';

const router = Router();

router.get('/:userId', verifyToken, getUser);
router.patch('/:userId', verifyToken, updateUser);

export default router;
