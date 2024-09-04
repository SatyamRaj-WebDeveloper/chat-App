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
    friends :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Friend"
    }],
    // refreshToken :{
    //     type :String,
    // }
})

// userSchema.methods.generateAccessToken = ()=>{
//     return jwt.sign({
//         _id : this._id,
//         Fullname :this.Fullname,
//         email : this.email
//     },
//     kjbdjsfioewfijeofkeof0ew0kfelpjfguehqwihkwe978r30pklascasjfheiwfie,
//     {
//         expiresIn : 1
//     }
// )
// }
// userSchema.methods.generaterefreshToken = ()=>{
//     return jwt.sign({
//         _id : this._id,
//     },
//     ihwdihkeqndfijfwefugeu94895ewfewrfmewnfmwee545ew4ewtwekntkemktmwt  ,
//   {
//         expiresIn : 10
//     }
// )
// }

const User = mongoose.model('User' , userSchema)
export default User
