import { Router } from 'express';

import signUp from '../controllers/singUp';
import signIn from '../controllers/signIn';
// import resetPassword from '../controllers/resetPassword';

const router = Router();

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
// router.post('/reset-password', resetPassword);

export default router;
