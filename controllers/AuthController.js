const {validationResult} = require('express-validator');
const AuthService = require('../services/AuthService');
const ApiError = require('../libs/errors/apiError');
const httpStatusCode = require('../libs/constants/http-Status-Codes');

class AuthController {
    static async register(req, res, next) {
        try {

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return next(ApiError.BadRequestError('validation error', errors.array()));
            }


            const {name, surname, email, age, password} = req.body;
            await AuthService.register(name, surname, email, age, password);
            res.status(httpStatusCode.CREATED).json({
                message: 'registration seccess'
            });
        } catch (err) {
            next(err);
        }
    }

    static async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const user = await AuthService.login(email, password);
            res.status(httpStatusCode.OK).json({...user});
        } catch (err) {
            next(err);
        }
    }
}

module.exports = AuthController;