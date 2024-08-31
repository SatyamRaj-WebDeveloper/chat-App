import mongoose, { Schema } from "mongoose";
import Friend from "./FriendSchema.js";
const userSchema = new Schema({
    Fullname :{
        type : String,
        required : true,
        trim :true,
    },
    email:{
        type : String,
        required:true,
        unique : true,
    },
    password:{
        type: String,
        required :true,
    },
    friends : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Friend'
    }]
})

const User = mongoose.model('User' , userSchema)
export default User
