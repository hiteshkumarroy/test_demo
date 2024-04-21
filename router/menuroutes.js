var express = require('express');
const router=express.Router();

const menu=require('../models/menu');


router.post('/',async (req,res)=>{
    try{
        
    const data=req.body;
        const newMenu=new menu(data);
    
        const response=await newMenu.save();
    
        console.log("new menu saved");
    
        
        res.status(200).json(response);
     
    
    }catch(err){
    console.log("there is some erros");
    res.status(400).json({error:"there is some error"});
    }
    
    })
    router.get('/',async(req,res)=>{
        try{
    
        
    const data=await menu.find();
    console.log("data fetched");
    res.status(200).json(data);
    
        }catch(err){
            console.log(err);
            res.status(500).json({error:"there is some error in fething"})
        }
    
    })
    
    
    router.get('/:anytaste',async (req,res)=>{
        try{
    
        
    const anytaste=req.params.anytaste;
    const response=await menu.find({taste : anytaste});
    
    
    res.status(202).json(response)
        }
        catch(err){
            console.error("sorry there is error in fetching data");
            res.status(404).json({error:"there is some error"}) ;
        }
    });



    router.put('/:id', async (req,res)=>{
        try{

        
        const id=req.params.id;
         const update=req.body;
         const response= await menu.findByIdAndUpdate(id,update,{
            new:true,
            runValidators:true,
         })

         if(!response){
            res.status(404).json({error:"not found id"}) ;
         }

         res.status(200).json({response}) ;
        }
          catch(err){
            console.error("sorry there is error in fetching data");
            res.status(404).json({error:"there is some error"}) ;
        }

    })
    module.exports=router;