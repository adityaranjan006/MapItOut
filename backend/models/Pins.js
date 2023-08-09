import mongoose from 'mongoose'

const pinSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    title:{
        type:String,
        required:true,
        min:5,
        max:12,
    },
    desc:{
        type:String,
        required:true,
        min:10,
    },
    rating:{
        type:Number,
        requied:true,
        min:1,
        max:5,
    },
})

const  Pin=mongoose.model("Pin",pinSchema);

export default Pin