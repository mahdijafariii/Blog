module.exports = {
    db : {
        port : process.env.DB_PORT,
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        db_name : process.env.DB_NAME,
    },

    auth : {
        accessTokenExpire : process.env.ACCESS_TOKEN_EXPIRE_IN_SECOND,
        refreshTokenExpire : process.env.REFRESH_TOKEN_EXPIRE_IN_SECOND,
        accessSecretKey : process.env.ACCESS_TOKEN_SECRET_KEY,
        refreshSecretKey : process.env.REFRESH_TOKEN_SECRET_KEY,
    }
}