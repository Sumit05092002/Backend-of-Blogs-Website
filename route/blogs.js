const express=require('express');
const router=express.Router();

const {createComment}=require('../controllers/comments');
router.post("/createComment",createComment);

module.exports=router; 