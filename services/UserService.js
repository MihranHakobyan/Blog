const User = require('../models/users');

class UserService {
    static async getAllUsers() {
        return User.findAll();
    };

    static async removeUser(userId) {
        return User.destroy({where: {id: userId}});
    }

    static async updateUser(userId, name, surname, email, age) {
        return User.update({name, surname, email, age}, {returning: true, where: {id: userId}});
    }
}

module.exports = UserService;