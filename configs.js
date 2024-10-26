require('dotenv').config()
module.exports = {
    db: {
        uri: process.env.DB_URI,
        poolSize: process.env.DB_POOL_SIZE || 10,
    },

    auth : {
        accessTokenExpire : process.env.ACCESS_TOKEN_EXPIRE_IN_SECOND,
        refreshTokenExpire : process.env.REFRESH_TOKEN_EXPIRE_IN_SECOND,
        accessSecretKey : process.env.ACCESS_TOKEN_SECRET_KEY,
        refreshSecretKey : process.env.REFRESH_TOKEN_SECRET_KEY,
    },

    port : 4000
}
