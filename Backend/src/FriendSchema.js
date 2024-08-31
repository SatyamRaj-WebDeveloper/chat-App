import mongoose ,{  Schema }  from "mongoose";
import User from "./userModel.js";

const FriendSchema = new Schema({
    userId :{
      type : mongoose.Schema.Types.ObjectId ,
      ref : "User",
      required : true
    },
   FullName : {
    type : String ,
    required : true,
   },
   Phone: {
    type: Number ,
    required : true ,
    unique : true,
   }
},{timestamps : true})

const Friend = mongoose.model('Friend' , FriendSchema);
export default Friend