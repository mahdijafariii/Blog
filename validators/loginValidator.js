const yup = require('yup');

let loginSchema = yup.object({
    username: yup.string().required("UserName is required!"),
    password: yup.string().required("Password is required!")
});

module.exports = loginSchema;