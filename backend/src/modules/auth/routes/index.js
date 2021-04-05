const { Router } = require('express');

const signUp = require('../controllers/singUp');
const signIn = require('../controllers/signIn');
// const resetPassword = require('../controllers/resetPassword');

const router = Router();

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
// router.post('/reset-password', resetPassword);

module.exports = router;
