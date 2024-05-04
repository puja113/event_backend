import { Router } from "express";

const createEventRouter = Router();


import { createEvents } from "../controller/createEvent.controller.js";
import { getEventDetails } from "../controller/getEvent.controller.js";
import {getEventDetailsById} from "../controller/getEventbyId.controller.js"

createEventRouter.post('/createEvent' , createEvents);
createEventRouter.get('/getAllEvent' , getEventDetails );
createEventRouter.get('/getEventDetailsById',getEventDetailsById);
 export default createEventRouter;