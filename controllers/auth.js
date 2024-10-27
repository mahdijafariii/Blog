const validateRegister = require('../validators/registerValidator')
const User = require('../repositories/users')
const bcrypt = require('bcrypt')
const config = require('../configs')
const jwt = require('jsonwebtoken')
const register = async (req, res, next) => {
    const {username, name, password, email} = req.body;
    await validateRegister.validate({email,name,username,password},{
        abortEarly : false
    });

    const hashPassword = await bcrypt.hash(password,12);

    const user = await User.create({name,username,email,password:hashPassword})

    const accessToken = await jwt.sign({id : user.id , role : user.role},config.auth.accessSecretKey, {
        expiresIn: config.auth.accessTokenExpire + "s",
    })

    const refreshToken = await jwt.sign({id : user.id , role : user.role},config.auth.refreshSecretKey, {
        expiresIn: config.auth.refreshTokenExpire + "s",
    })

    const hashedRefreshToken = await bcrypt.hash(refreshToken,12)

    return res.status(201).json({
        accessToken,
        refreshToken : hashedRefreshToken
    })
}
const login = async (req, res, next) => {


}
const refresh = async (req, res, next) => {


}
const me = async (req, res, next) => {


}
const logout = async (req, res, next) => {


}

module.exports = {register, logout , login , refresh , me}
