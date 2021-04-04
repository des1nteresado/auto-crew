const { Router } = require('express');

const getUser = require('../controllers/getUser');
const updateUser = require('../controllers/updateUser');

const verifyToken = require('../../../middlewares/verifyToken');
const privateRoute = require('../../../middlewares/privateRoute');
const { USER_ROLES } = require('../../../constants');
const deleteUser = require('../controllers/deleteUser');
const getAllUsers = require('../controllers/getAllUsers');

const { USER, ADMIN } = USER_ROLES;

const router = Router();

router.get('/', verifyToken, privateRoute([ADMIN]), getAllUsers);
router.get('/:userId', verifyToken, privateRoute([USER, ADMIN]), getUser);
router.put('/:userId', verifyToken, privateRoute([USER, ADMIN]), updateUser);
router.delete('/:userId', verifyToken, privateRoute([USER, ADMIN]), deleteUser);

module.exports = router;
