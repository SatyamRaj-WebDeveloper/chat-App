import {mongoose} from 'mongoose'
import User from './userModel.js';
import express from 'express'
import cors from 'cors'
import {Server, Socket} from 'socket.io'
import {createServer} from 'http'
import Friend from './FriendSchema.js'
import bcrypt from 'bcrypt'

const httpServer = createServer();
const app = express();
const io = new Server(httpServer , {
    cors:{
        origin : '*',
    }
})
const PORT = process.env.PORT || 8000;

app.use(cors({
    origin : ['http://localhost:5173'],
    methods : ['GET','POST','DELETE'],
    allowedHeaders : ['Content-Type']
}))
app.use(express.json())


io.on('connection', (socket)=>{
    //  console.log("what is a socket" , socket);
     console.log("socket is active to be connected")
     socket.on("chat" , (payload)=>{
        // console.log('what is payload' , payload);
        io.emit('chat' , payload)
     })
})

mongoose.connect('mongodb://localhost:27017/admin')
.then(()=>console.log("Connected To database Successfully"))

app.post('/api/v1/users/signup' , async(req,res)=>{
    const {FullName , Email ,Password} = req.body;
    try{
        if(!FullName || !Email || !Password){
            return res.status(400).json({message : "All fields are required"})
        }
        const hashedPassword = await bcrypt.hash(Password ,10)
        const newuser = new User({
            Fullname : FullName,
            email : Email ,
            password : hashedPassword,
        })
      await newuser.save()
        res.status(201).json({message : "user registered successfully" , newuser})
    }catch(error){
      console.log("Error during saving a new user" , error.message)
    }
})

app.post('/api/v1/users/login' , async(req,res)=>{
    const {Email , Password} = req.body;
    if(!Email || !Password){
        res.status(404).json({message : 'Email and Password both are required'})
    }
    const user = await User.findOne({email : Email})
    
    if(!user){
        res.status(404).json({message : "NO USER Found"})
    }else{
        return res.status(201).json({message : "User Found Successfully" , user})
    }

})

app.post('/api/v1/users/addfriend/:userId' , async(req,res)=>{
    const {FullName , Phone} = req.body;
    const userId = req.params.userId;
    console.log(userId)
  try {
      if(!FullName , !Phone){
          return res.status(400).json({message : "Name and Phone number both are required"})
      }
      const exist =await Friend.findOne({
        Phone : Phone
    })
   
      if(exist){
       return res.status(400).json({message: "Friend already exist"})
      }else{
          const friend  = new Friend({
              userId : userId,
              FullName : FullName,
              Phone  : Phone,
          })
          
       const check =  await User.findByIdAndUpdate(
            userId ,
            {
                $push:{
                    friends:{
                        _id:friend._id
                    }
                }
                
            },
            { new :true}
          )
          await friend.save();
         console.log(check)
          
          res.status(201).json({message : "Friend Saved Successfully"})
        //   console.log("Friend Saved Successfully" , friend)
      }

  } catch (error) {
    console.log("error before saving occured" , error.message)
  }

})

app.get('/api/v1/users/friends/:userId' ,async (req,res)=>{
    const userId = req.params.userId
   try {
    const result = await Friend.find({
     userId
    })
    return res.status(201).json({message :"Friends are found" , result})
   } catch (error) {
     res.status(404).json({message :"No friends found"})
    console.log(error.message)
   }
   
   console.log(typeof result)
   if(result){
    return res.status(200).json({message:"friends Found" , result})
   }else{
    return res.status(404).json({message :"No users Found" })
   }
})



app.listen(PORT , 
    console.log(`App is Listening on Port ${PORT}`)
)
httpServer.listen(5000 , ()=>{
    console.log("socket  server is listening on port 5000")
})