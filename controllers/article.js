const Article = require('../repositories/articles')
const getAll = async (req,res,next)=>{


}
const create = async (req,res,next)=>{
    const {content, slug , title, tags} = req.body;
    const article = await Article.create({title, content, slug, author_id: req.user.id , cover : req.file?.filename});
    tags.forEach((tag) => {
        Article.addTag({articleId : article.id, tagId :tag.id})
    });
    return res.status(200).json({
        message : "Article created successfully !!"
    });
}
const getBySlug = async (req,res,next)=>{


}
const remove = async (req,res,next)=>{


}



module.exports = {create , getBySlug,getAll,remove}