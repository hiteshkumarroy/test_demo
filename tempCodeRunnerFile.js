

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
// })
