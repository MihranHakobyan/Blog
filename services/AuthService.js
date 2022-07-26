const bcrypt = require('bcrypt');
const User = require('../models/users');
const UserDto = require('../dtos/userDto');
const jwt = require('../libs/jwt');
const ApiError = require('../libs/errors/apiError');

class AuthService {
    static async register(name, surname, email, age, password) {
        const candidate = await User.findUserByEmail(email);
        if (candidate) {
            throw  ApiError.BadRequestError(`User with ${email} address already excist`);
        }
        const heshPassword = await bcrypt.hash(password, 5);
        const user = await User.create({name, surname, email, age, password: heshPassword});
        const userDto = new UserDto(user);

    }

    static async login(email, password) {

        const user = await User.findUserByEmail(email);
        if (!user) {
            throw ApiError.BadRequestError(`user with this email ${email} not found`);
        }

        const isPasswordEquals = await bcrypt.compare(password, user.password);
        if (!isPasswordEquals) {
            throw ApiError.BadRequestError('Wrong password');
        }

        const userDto = new UserDto(user);
        const token = jwt.generateToken({...userDto});;
        return {
            ...token,
            user: userDto
        };
    }
}

module.exports = AuthService;