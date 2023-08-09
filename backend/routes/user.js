import {Router} from 'express'
import user from '../models/Users.js'
import bcrypt from 'bcrypt'


const router=Router();

//Resgister
router.post("/",async (req,res)=>{
    try{
        //generate new password
        const salt=await bcrypt.genSalt(10);
        const hasedPassword= await bcrypt.hash(req.body.password,salt);

        //create new user
        const newUser= new user({
            username:req.body.username,
            email:req.body.email,
            password:hasedPassword,
        });

        //save user and password
        const saveduser =await newUser.save();
        res.status(200).json(saveduser);
    }catch(err){
        res.status(500).json(err);
    }
});

//login

router.post("/login", async(req,res)=>{
    try{
        const User= await user.findOne({username: req.body.username});
        //NOT FOUND
        if(!User){
            res.status(400).json("Wrong password or Username");
        }
        //FOUND 
        const validPassword= await bcrypt.compare(req.body.password,User.password);

        if(User && validPassword){
            res.status(200).json("Succesfull Login username and password");
        }else{
            res.status(400).json("Wrong Password or Username");
        }
        
    }catch(err){
        res.status(500).json(err);
    }
})

//get all users
router.get("/users",async (req,res)=>{
    
    try{
        const users= await user.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).send(err);
    }
});


export default router