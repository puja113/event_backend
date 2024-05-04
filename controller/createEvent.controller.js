import createEvent from "../model/create_event.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt' 

export const createEvents  = async (req, res) => {
 
    try{

    const { eventName ,name,email,phone, dateTime, food , guest ,eventType,extraService}= req.body;
    
    const date_time = await createEvent.findOne({dateTime});

    if(date_time){
       
        return res.status(200).json(
            {
                data: [],
                status: {
                    code: 400,
                    message: 'Event for this date is already booked',
                    version: '1.0'
                },
            }
        );
    }
  
    
    const newEvent = await createEvent.create({eventName,name,email,phone, dateTime, food , guest,eventType,extraService});
          // console.log( "savedUser" ,savedUser);
    const savedEvent = await newEvent.save();
return res.status(200).json(
        {
            data: [savedEvent],
            status: {
                code: 200,
                message: 'Event created Successfully',
                version: '1.0'
            },
        }
    );

    }
catch(error){
      
        console.log(error);
        return res.status(500).json(
            {
                data: [],
                status: {
                    code: 500,
                    message: 'Event Creation failed',
                    version: '1.0'
                },
            }
        );

    }

}