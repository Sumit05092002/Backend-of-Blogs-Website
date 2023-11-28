const Post=require('../models/postmodel')
const like=require("../models/likemodel");
const comment=require('../models/commentmodel')
exports.createPost=async(req,res)=>{
    try {
        const{title,description,like,comment}=req.body
        const response=await post.create({title,description,like,comment})
        res.status(200).json({
            success:true,
            data:response,
            message:"post created successfully"
        })
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:error.message
        })
    }
}