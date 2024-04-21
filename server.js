// // console.log("hitesh kumar roy")
// // var fs= require("fs");
// // var os=require('os');
// // var user=os.userInfo();
// // console.log(user);
// // fs.appendFile("hitesh.txt","my name is hitesh",()=>{
// //     console.log("hyyy");
// // })
// // var exp= require('./export.js');
// // var age=exp.age;
// // var fun=exp.fun;

// // console.log(age);
// // console.log(fun());
// // var obj={
// //     "name":"hitesh",
// //     "age":18,
// // }
// // // JSON str=o
// // // var json=JSON.parse(obj);
// //  var str= JSON.stringify(obj);
// // var obj1=JSON.parse(str);
// // console.log(obj1);


// // app.get('/chicken',(req,res)=>{
// //   res.send("hii sir how are you get some chicken");
// // })




// var express = require('express');
// var app = express();
// const db=require('./db');
// const person= require(  './models/person');
// const bodyParser= require('body-parser');
// app.use(bodyParser.json());// req.body

// app.get('/',(req,res)=>{
//   res.send("hii sir how are you");
// })


// app.get('/menu',(req,res)=>{

//   var menu={
//     "daal":60,
//     "price":80

//   }
//   res.send(menu);
// })



// app.post('/person', async(req,res)=>{
// try{
// req.body=({
    
//         "name": "suraj",
//         "age": 28,
//         "work": "chef",
//         "mobile": "123-456-7890" ,
//         "email": "suraj@example.com ",
//         "adress": "123 Main St, City",
//        "salary": 60000

    
// })
// const data = req.body;// req.body containes person data
    
// const newPerson =  new person(data);
// // newPerson.name=data.name;
// // newPerson.age=data.age;

// const response=await newPerson.save();//await the promise



// console.log('data saved');

// res.status(200).json(response);


// }catch(err){
//     console.log(err);
//     res.status(500).json({error:'Internal server error'});

// }

// })



// app.listen(3000,()=>{
//     console.log("room no of waiter is 3000");
// });


const express=require('express');
const menu=require('./models/menu.js');
const app=express();
const bodyParser=require('body-parser');
require('dotenv').config();

const db=require('./db.js');

app.use(bodyParser.json());

const personroutes=require('./router/personroutes.js');
app.use('/person',personroutes);
const menuroutes=require('./router/menuroutes.js');
app.use('/menu',menuroutes);

app.get('/',(req,res)=>{

    res.status(200).send("hii there this is your waiter");
})


// app.post('/menu',async (req,res)=>{
// try{
    
// const data=req.body;
//     const newMenu=new menu(data);

//     const response=await newMenu.save();

//     console.log("new menu saved");

    
//     res.status(200).json(response);


// }catch(err){
// console.log("there is some erros");
// res.status(400).json({error:"there is some error"});
// }

// })
// app.get('/menu',async(req,res)=>{
//     try{

    
// const data=await menu.find();
// console.log("data fetched");
// res.status(200).json(data);

//     }catch(err){
//         console.log(err);
//         res.status(500).json({error:"there is some error in fething"})
//     }

// })


// app.get('/menu/:anytaste',async (req,res)=>{
//     try{

    
// const anytaste=req.params.anytaste;
// const response=await menu.find({taste : anytaste});


// res.status(202).json(response)
//     }
//     catch(err){
//         console.error("sorry there is error in fetching data");
//         res.status(404).json({error:"there is some error"}) ;
//     }
// });







app.listen(port,()=>{
    console.log("hi there this is room of your waiter");
});







