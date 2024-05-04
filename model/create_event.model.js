import mongoose from "mongoose"

const createEventSchema = new mongoose.Schema({
  eventName:{
    type:String,
    required:true,
    },
    name:{
        type:String,
        required:true,
    },
   
    email:{
      type:String,
      required:true
    },
    phone:{
        type:Number,
        required:true
    },
    dateTime:{
        type:String,
        required:true,
    },
    food:{
      type:String,
      required:true
    },
    guest:{
        type:String,
        required:true,
    },
    eventType:{
      type:Array,
      required:true
    },
   
    extraService:{
      type:String,
      required:true
    },
})

const createEvent = mongoose.model("createEvents", createEventSchema)

export default createEvent;