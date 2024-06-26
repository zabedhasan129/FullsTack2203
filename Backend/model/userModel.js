const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type:String,
        enum:["user","marchent","admin"],
        default: "user",
    },
})

module.exports = mongoose.model("user",userSchema)