const jwt = require('jsonwebtoken');
const config = require('../configs');
const User = require('../repositories/users');

module.exports = async (req, res, next) => {
    try {
        const accessToken = req.cookies['access-token'];
        if (!accessToken) {
            return res.status(400).json({ message: "You do not have access to this api!!" });
        }
        const decode = jwt.verify(accessToken, config.auth.accessSecretKey);
        const user = await User.findById({ id: decode.id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(400).json({ message: "You do not have access to this api!!" });
    }
};
