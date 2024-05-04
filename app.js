import 'dotenv/config'
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import loginrouter from './route/login.route.js';
import registerrouter from './route/signup.router.js';
import createEventRouter from './route/createEvent.route.js';


import User from './model/user.model.js'



const mongoURI = "mongodb+srv://pujapandey8764:r6FD4sq4sjdrawO8@events.1iywnnd.mongodb.net/"


const PORT = process.env.PORT || 8000;


// Set up the express app
const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin: '*'}))


 const connectMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    const connection = mongoose.connection;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};

connectMongoDB();


//const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com', // smtp mail
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'abhishek.ideal09@gmail.com', // user id 
        pass: 'akzp kiox flnk lija', //password
    },
});
app.get('/api/v1/ok',(req,res) =>{
    console.log("kkkkķkkkkkkkk")
    return res.status(200).send({
        success: 'true',
        message: 'Success'
      })
})
app.post('/api/v1/sendMail', (req, res) => {
    console.log(req.body,"----------------");
    if(!req.body.name) {
        return res.status(400).send({
          success: 'false',
          message: 'name is required'
        });
      } else if(!req.body.email) {
        return res.status(400).send({
          success: 'false',
          message: 'email is required'
        });
      }else if(!req.body.phone) {
        return res.status(400).send({
          success: 'false',
          message: 'phone is required'
        });
      }else if(!req.body.services){
        return res.status(400).send({
          success: 'false',
          message: 'services is required'
        });
      }
    //  const user = {
    //    id: db.length + 1,
    //    name: req.body.name,
    //    email: req.body.email,
    //    phone: req.body.phone
    //  }
    //  db.push(user); 
     transporter.sendMail({
        from: '"Spotlight - Create Your Event" <abhishek.ideal09@gmail.com>', // sender address
        //to: "inspire.india@yahoo.com, abhishek.ideal09@gmail.com", // list of receivers
        to: "pujapandey8764@gmail.com", // list of receivers
        subject: "Spotlight Demo Request ✔", // Subject line
        text: "There is a new Request. It's about sending request for demo, check it out!", // plain text body
        html: "<div>Name: "+req.body.name+"</div></br><div>Email: "+req.body.email+"</div></br><div>Phone: "+req.body.phone+"</div><div>Services: "+req.body.services+"</div>" // html body
    }).then(info => {
        console.log({ info });
    }).catch(console.error);
     return res.status(200).send({
       success: 'true',
       message: 'Email Sent successfully'
     })
});


app.use(loginrouter)
app.use(registerrouter)
app.use(createEventRouter)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});





