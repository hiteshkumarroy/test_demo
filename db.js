// const mongoose = require('mongoose');
// const mongoURL='mongodb://localhost:27017/hotels';//database

// //setup connection
// mongoose.connect(mongoURL)


// const db= mongoose.connection;


// db.on('connected',()=>{
//     console.log("server is connected");

// })
// db.on("error",(error)=>{
//     console.error("there is some error");

// })
// db.on("disconnected",()=>{
//     console.log("server disconnected");

// })
// module.exports=db;


const mongoose = require('mongoose');
const mongoURL='mongodb://localhost:27017/restaurent';
mongoose.connect(mongoURL);
const db=mongoose.connection;
db.on("connected",()=>{
    console.log("database server connected");
})
module.exports=db;