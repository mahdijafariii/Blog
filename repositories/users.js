const db = require('../db')

const create = async ({name , username , email , password}) =>{
    const query = 'INSERT INTO users (name,username,email,password) VALUES (?,?,?,?)';
    const [insertedUser] = await db.execute(query,[name,username,email,password]);
    const selectMainUser = 'SELECT * FROM users WHERE id = ?';
    const user = await db.execute(selectMainUser,[insertedUser.insertId]);
    return user[0][0];
}
const findByUsername = async ({username})=>{
    const query = 'SELECT * FROM users WHERE username = ?'
    const user = await db.execute(query,[username]);
    return user[0][0];
}

const findById = async ({id})=>{
    const query = 'SELECT * FROM users WHERE id = ?'
    const user = await db.execute(query,[id]);
    return user[0][0];
}

module.exports = {create , findById , findByUsername}