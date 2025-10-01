const express = require('express');

const app =express();

app.get("/users",(req,res)=>{
    res.send("Hello World");
});

app.listen(3000 , ()=>{
    console.log("server running at 3000");    
})