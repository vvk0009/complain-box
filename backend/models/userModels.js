const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({


    name :{
        type : String,
        required : [true , "enter name"]
    },
    email :{
        type : String,
        unique : true,
        required : [true , "enter email"]
    },
    password :{
        type : String,
        required : [true , "enter password"]
    },
    isAdmin :{
        type : Boolean,
        default : false,
 
    }
})

{
    timestamps : true
}

module.exports = mongoose.model('User' , userSchema)