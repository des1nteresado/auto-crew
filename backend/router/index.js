const { Router } = require('express');

const authRoutes = require('../src/modules/auth/routes');
const userRoutes = require('../src/modules/user/routes');

const router = Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

module.exports = router;
