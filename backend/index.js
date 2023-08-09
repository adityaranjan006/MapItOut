import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import pinRoute from './routes/pin.js'
import userRoute from './routes/user.js'


dotenv.config();

const app=express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,).then(
    console.log("MongoDb Connected")
).catch(err=>{
    console.log(err);
});


//API Routes

app.use("/pin",pinRoute);
app.use("/register",userRoute);


app.listen(8800,()=>{
    console.log("BackEnd connected");
})
