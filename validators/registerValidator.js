const yup = require('yup');

let registerSchema = yup.object({
    name: yup.string().required("Name is required!"),
    username: yup.string().required("UserName is required!"),
    email: yup.string().email("Email is required!"),
    password: yup.string().required("Password is required!")
});

module.exports = registerSchema;