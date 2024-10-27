const Article = require('../repositories/articles')
const getAll = async (req,res,next)=>{


}
const create = async (req,res,next)=>{
    const {content, slug , title} = req.body;
    await Article.create({title, content, slug, author_id: req.user.id , cover : req.file?.filename});
    return res.status(200).json({
        message : "Article created successfully !!"
    })
}
const getBySlug = async (req,res,next)=>{


}
const remove = async (req,res,next)=>{


}



module.exports = {create , getBySlug,getAll,remove}