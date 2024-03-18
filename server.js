require("dotenv").config();
//console.log(process.env.MONGODB_URI);

const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const app = express();

app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("DB Connected!"))
    .catch((error) => console.log("DB failed to connect", error));


app.get("/api/health",(req,res)=>{
    console.log("hey health");
    res.json({
        service:"Backend Joblistinf server",
        status:"active",
        time:new Date(),
    });
});

app.use("/api/v1/auth",authRoute);

app.post("/api/v1/hi",(req,res)=>{
    res.json({message:"hi"});
});

const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`Backend server running at port ${PORT}`);
});


//mongodb+srv://anmoljoblist:anmoldeep@cluster0.mqtip3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0