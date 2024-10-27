const db = require('../db')

const create = async ({title}) =>{
    const query = 'INSERT INTO tags (title) VALUES (?)';
    const [insertedTag] = await db.execute(query,[title]);
    const selectMainTag = 'SELECT * FROM tags WHERE id = ?';
    const tagRes = await db.execute(selectMainTag,[insertedTag.insertId]);
    return tagRes[0][0];
}
const findByTitle = async ({title})=>{
    const query = 'SELECT * FROM tags WHERE title = ?'
    const tag = await db.execute(query,[title]);
    return tag[0][0];
}

const findAll = async ()=>{
    const query = 'SELECT * FROM tags '
    const tags = await db.execute(query);
    return tags[0];
}

const remove = async ({id})=>{
    const query = 'DELETE FROM tags WHERE id = ?'
    const tag = await db.execute(query,[id]);
    return tag[0];
}


module.exports = {create , findByTitle ,findAll , remove}