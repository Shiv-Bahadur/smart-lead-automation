const express =require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const db=require('./config/db');
const namesRoute=require('./routes/names');
const sendingDataToCrm=require("./controllers/sendingDataToCrm")

const app= express();
app.use(cors());
app.use(express.json());

db();

app.use("/api",namesRoute);
app.listen(5000,()=>console.log("server started at port 5000 ......................"));
sendingDataToCrm();