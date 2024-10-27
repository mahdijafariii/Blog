const db = require("../db")

const create =async ({title,content , slug , author_id, cover}) =>{
    const insertQuery = 'INSERT INTO articles (id , title , content ,slug , author_id , cover ) VALUES (NULL ,?,?,?,?,?)'
    const [insertedArticle] = await db.execute(insertQuery,[title,content,slug,author_id]);
    const mainArticle = await db.execute('SELECT * FROM articles WHERE id = ?' , [insertedArticle.insertId]);
    return mainArticle;
}

const addTag = async ({articleId, tagId})=>{
    const query = 'INSERT articles-tags VALUES (NULL , ? ,?)';
    await db.execute(query,[articleId,tagId]);
    return true;
}


const deleteOne = async ({id})=>{
    const query = 'DELETE FROM articles WHERE id = ?';
    await db.execute(query,[id]);
    return true;
}

module.exports = {create , deleteOne ,addTag }