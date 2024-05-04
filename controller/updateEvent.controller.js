import createEvent from "../model/create_event.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt' 

export const updaeEvents=  async(req,res) => {

    try{

        const {name,email,phone, dateTime, food , guest , services,extraService}= req.body;

        const update = await createEvent.findOne({id:_id})

        if(update){
       
            return res.status(200).json(
                {
                    data: [],
                    status: {
                        code: 400,
                        message: 'updated the event successfully',
                        version: '1.0'
                    }, 
                }
            );
        }



    }
    catch(error){
        console.log(error);
        return res.status(400).json(
            {
                data: [],
                status: {
                    code: 400,
                    message: 'Event Creation failed',
                    version: '1.0'
                },
            }
        )

    }
} 