const express = require('express');
const authorize = require('../middlewares/AuthMiddleware');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', authorize, UserController.getAllUsers);
router.delete('/', authorize, UserController.removeUser);
router.put('/', authorize, UserController.updateUser);
module.exports = router;