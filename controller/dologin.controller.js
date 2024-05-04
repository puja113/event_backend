import User from "../model/user.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt' 


export const login = async (req, res) => {
    const secretkey = process.env.TOKEN_SECRET
    try{

        const{email,password } = req.body;

         const user = await User.findOne({email});

         if(!user){
            return res.status(401).json(
                {
                    data: [],
                    status: {
                        code: 401,
                        message: 'User Not Exist.',
                        version: '1.0'
                    },
                }
            );
         }

         const validPassword = bcrypt.compare(password , user.password);

         if(!validPassword){

            return res.status(401).json(
                {
                    data: [],
                    status: {
                        code: 401,
                        message: 'Programme Credential Mismatched.',
                        version: '1.0'
                    },
                }
            );
         }

          //create token data 

       const tokenData ={
        id : user._id,
        username :user.username,
        eamil: user.email
       }

        //create token 
        const token = await jwt.sign(tokenData , secretkey ,{expiresIn : "1d"})
        console.log("token----->",token)
        const response  = res.json({
            message:"Login successfull",
            token:token,
            success:true
           })
    
        //    response.cookies.set( "token" ,token ,{
        //     httpOnly : true,
            
        // })
         return response;  //sending msg handeling cookies

    }catch(error){

        return res.status(400).json(
            {
                data: [],
                status: {
                    code: 400,
                    message: 'Something Went Wrong, Please try after sometime.',
                    version: '1.0'
                },
            }
        );
    }
}