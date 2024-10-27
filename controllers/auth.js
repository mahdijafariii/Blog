const validateRegister = require('../validators/registerValidator')
const validateLogin = require('../validators/loginValidator')
const User = require('../repositories/users')
const bcrypt = require('bcrypt')
const config = require('../configs')
const jwt = require('jsonwebtoken')
const svgCaptcha = require('svg-captcha')
const {json} = require("express");
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
    res.cookie("access-token",accessToken,{
        maxAge : 900_000,
        httpOnly :true
    })

    res.cookie("refresh-token",hashedRefreshToken,{
        maxAge : 900_000,
        httpOnly :true
    })
    return res.status(201).json({
        message : "sign up was successfully!"
    })
}
const login = async (req, res, next) => {
    const {username , password} = req.body;
    await validateLogin.validate({username,password},{
        abortEarly : false
    });
    const user =await User.findByUsername({username});
    if(!user){
        return res.status(404).json({
            message: "Invalid username or password !!"})
    }
    const checkPassword = await bcrypt.compare(password,user.password);
    if(!checkPassword){
        return res.status(401).json({
            message : "Invalid username or password !!"})
    }

    const accessToken = await jwt.sign({id : user.id , role : user.role},config.auth.accessSecretKey, {
        expiresIn: config.auth.accessTokenExpire + "s",
    })

    const refreshToken = await jwt.sign({id : user.id , role : user.role},config.auth.refreshSecretKey, {
        expiresIn: config.auth.refreshTokenExpire + "s",
    })

    const hashedRefreshToken = await bcrypt.hash(refreshToken,12)

    res.cookie("access-token",accessToken,{
        maxAge : 900_000,
        httpOnly :true
    })

    res.cookie("refresh-token",hashedRefreshToken,{
        maxAge : 900_000,
        httpOnly :true
    })
    return res.status(201).json({
        message : "sign up was successfully!"
    })
}
const refresh = async (req, res, next) => {


}
const me = async (req, res, next) => {


}
const logout = async (req, res, next) => {


}

const getCaptcha = async (req,res) =>{
    const captcha = svgCaptcha.create({size : 4});
    return res.status(200).json({
        captcha : captcha.data
    })
}

module.exports = {register, logout , login , refresh , me}
