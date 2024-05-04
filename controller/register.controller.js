import User from "../model/user.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt' 

export const register  = async (req, res) => {
 
    try{

        const {username ,phone_no,email,password }= req.body;
    
    const user = await User.findOne({email});

    if(user){
       
        return res.status(200).json(
            {
                data: [],
                status: {
                    code: 400,
                    message: 'User already exists',
                    version: '1.0'
                },
            }
        );
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({username,phone_no, email, password: hashedPassword });
          // console.log( "savedUser" ,savedUser);
    const savedUser = await newUser.save();


    return res.status(200).json(
        {
            data: [savedUser],
            status: {
                code: 200,
                message: 'User registered successfully',
                version: '1.0'
            },
        }
    );

    }


    catch(error){
      
        console.log(error);
        return res.status(400).json(
            {
                data: [],
                status: {
                    code: 400,
                    message: 'Registration failed',
                    version: '1.0'
                },
            }
        );

    }

}