import mongoose from "mongoose";

const notificationSchema=

new mongoose.Schema({

userId:{

type:String,

required:true,

},

title:String,

message:String,

read:{

type:Boolean,

default:false,

},

icon:String,

},

{

timestamps:true,

}

);

export default mongoose.model(

"Notification",

notificationSchema

);