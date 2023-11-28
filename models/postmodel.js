const mongoose=require('mongoose');

const post =new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:50
    },

    body:{
        type:String,
        required:true,
        maxLength:200
    },

    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"likes"
    }],

    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comments"
    }]
})

module.exports=mongoose.model("post",post)