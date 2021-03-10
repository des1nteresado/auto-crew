import { Router } from 'express';

import signUp from '../controllers/singUp';
import signIn from '../controllers/signIn';
import verifyToken from '../../../middlewares/verifyToken';
// import resetPassword from '../controllers/resetPassword';

const router = Router();

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
// router.post('/reset-password', resetPassword);

router.get('/super-secret-route', verifyToken, (req, res) => {
  res.status(200).json({ message: 'super-secret' });
});

export default router;
