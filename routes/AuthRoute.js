const express = require('express');
const {body} = require('express-validator');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

router.post('/sign-in', body('name').isString(), body('surname').isString(), body('age').isInt(),body('email').isEmail(), body('password').isLength({min: 4, max: 20}), AuthController.register);
router.post('/login',AuthController.login)

module.exports = router;