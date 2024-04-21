const mongoose= require('mongoose');
const personSchema = new mongoose.Schema({
name:{
    type:String,
    required:true

},
age:{
    type:Number,
    required:true
},
work:{
    type:String,
    required:true,
    enum:["chef","student","owner"]

},
mobile:{
    type:String,
    required:true

},
email:{
    type:String,
    required:true,
    unique:true

},adress:{
    type:String,
    required:false


},
salary:{

    type:Number,
    required:true
}
})

const person=mongoose.model('person',personSchema);
module.exports=person;

