
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
      type:String,
      required:true
    },
    email:{
        type:String,
        required:true
    },
    phone_no:{
        type:Number,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
       type:Boolean,
       default:false
    },
    forgotPasswordToken:
    {
        type:String
    },
    forgotPasswordExpire:{
        type :Date
    },
    VerifyToken:{
        type:String
    },
    verifyTokenEXpiry:{
        type:Date
    }

})

// const User = mongoose.model.users||mongoose.model()

// ("users",userSchema);

// export default User;
//const User = mongoose.model('users', userSchema);
   
//export default User

const User = mongoose.model("users", userSchema);
export default User