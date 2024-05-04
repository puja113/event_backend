import { Router } from "express";

const registerrouter = Router()

import { register } from "../controller/register.controller.js";

registerrouter.post('/register' , register);

export default registerrouter;