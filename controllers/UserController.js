const UserService = require('../services/UserService');
const httpStatusCodes = require('../libs/constants/http-Status-Codes');

class UserController {
    static async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();
            res.status(httpStatusCodes.OK).send(users);
        } catch (err) {
            res.status(httpStatusCodes.SERVER_ERROR).send(err.message);
        }
    }

    static async removeUser(req, res) {
        try {
            await UserService.removeUser(req.body.id);
            res.status(httpStatusCodes.OK).send(`user by id ${req.body.id} deleted`);
        } catch (err) {
            res.status(httpStatusCodes.SERVER_ERROR).send(err.message);
        }
    }

    static async updateUser(req, res) {
        try {
            const {name, surname, email, age} = req.body;
            await UserService.updateUser(req.body.id, name, surname, email, age);
            res.status(httpStatusCodes.OK).send('user updated');
        } catch (err) {
            res.status(httpStatusCodes.SERVER_ERROR).send(err.message);
        }
    }
}

module.exports = UserController;