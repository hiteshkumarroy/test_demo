var express = require('express');
const router=express.Router();
const person= require(  '../models/person');





router.post('/', async(req,res)=>{
try{

//    res.body = ({
    
//         "name": "pankaj",
//         "age": 28,
//         "work": "chef",
//         "mobile": "123-456-7890" ,
//         "email": "pankaj@example.com ",
//         "adress": "123 Main St, City",
//        "salary": 60000

    
// });
const data = req.body;// req.body containes person data
    
const newPerson =  new person(data);
// newPerson.name=data.name;
// newPerson.age=data.age;

const response=await newPerson.save();//await the promise



console.log('data saved');

res.status(200).json(response);


}catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});

}

})



module.exports=router;
