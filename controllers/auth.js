const validateRegister = require('../validators/registerValidator')
const register = async (req, res, next) => {
    const {username, name, password, email} = req.body;
    await validateRegister.validate({email,name,username,password},{
        abortEarly : false
    });



}
const login = async (req, res, next) => {


}
const refresh = async (req, res, next) => {


}
const me = async (req, res, next) => {


}
const logout = async (req, res, next) => {


}

