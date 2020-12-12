const mongeese = require("mongoose");

const UserSchema = new mongeese.Schema({
    firstname : {
        type: String,
        required: true
    } ,
    lastName : {
        type : String,
        required : false
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    registerDate : {
        type : Date,
        default : Date.now
    }
})

const UserModel
modeule.exports = mongeese.model("user", UserSchema)