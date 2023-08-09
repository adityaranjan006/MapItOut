import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        requied:true,
        min:6,
    }
})

const  user=mongoose.model("user",userSchema);

export default user