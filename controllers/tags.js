const Tags = require('../repositories/tags')

const addTag = async (req,res)=>{
    const {title} = req.body;
    const tag = await Tags.create({title});
    return res.status(200).json({
        message : "Tag created successfully !!"
    })
}

const getAllTags = async (req,res)=>{
    const tags =await Tags.findAll();
    return res.status(200).json({
        tags
    })
}

const getArticleTags = async (req,res)=>{
    const slug = req.params.slug;
    const tag =await Tags.findByTitle({slug});
    if(!tag){
        return res.status(404).json({
            message : "Tag not founded !!"
        })
    }
    const articles = await Tags.findArticleWithTag({id : tag.id})
    return res.status(200).json({
        articles
    })
}


const getTagWithTitle = async (req,res)=>{
    const {title} = req.params;
    const tag = await Tags.findByTitle({title});
    if(!tag){
        return res.status(404).json({
            message : "title not found"
        })
    }
    return res.status(200).json({
        tag
    })
}

const deleteTag = async (req,res)=>{
    const {id} = req.params;
    console.log(id)
    const deleteTag = await Tags.remove({id});
    return res.status(200).json({
        deleteTag
    })
}

module.exports = {deleteTag , addTag , getAllTags, getTagWithTitle}