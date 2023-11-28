const Comment=require("../models/commentmodel")
const Post=require("../models/postmodel")

exports.createComment=async(req,res)=>{
    try {
        const {post,user,body}=req.body;
        const comment=await Comment.create({post,user,body});
        const updatedPost= await Post.findByIdAndUpdate(post,{$push:{comments:savedComments._id}},{new:true}).populate("comments").exec()
        res.json({
            post:updatedPost
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