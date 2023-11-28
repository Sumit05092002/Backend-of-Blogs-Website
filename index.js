const express=require('express');
const app=express();

app.listen(3000,()=>{
    console.log("Server running at port no 3000");
})

app.get("/",(req,res)=>{
    res.send("This is home page");
})

const dbConnect=require("./config/database")
dbConnect();

app.use(express.json());

const route=require("./route/blogs")
app.use("/api/v1",route);

