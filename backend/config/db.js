const mongoose=require('mongoose');
require('dotenv').config();

const db =async ()=>{
    console.log(process.env.MONGODB_URI);
   await mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("database connected successfully.....")).catch((err)=>{console.log(err)})
}
module.exports= db;