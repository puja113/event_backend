import { Router } from 'express';
const loginrouter = Router()

import { login } from '../controller/dologin.controller.js';

loginrouter.post('/login' , login);

export default loginrouter;