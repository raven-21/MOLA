import express from 'express';

import { login } from '../controllers/loginCtrl.js';

const router = express.Router();

// all routes in here starts with /login
router.post('/', login);



export default router;