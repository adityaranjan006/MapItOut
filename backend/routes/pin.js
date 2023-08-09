import {Router} from 'express'
import Pin from '../models/Pins.js'


const router=Router();

router.post("/",async (req,res)=>{
    const newPin= new Pin(req.body);
    try{
        const savedPin=await newPin.save();
        res.status(200).json(savedPin);
    }catch(err){
        res.status(500).json(err);
    }
});

router.get("/allpins",async (req,res)=>{
    try{
    const pins= await Pin.find();
        res.status(200).json(pins);
    }catch(err){
        res.status(500).json(err);
    }
});


export default router