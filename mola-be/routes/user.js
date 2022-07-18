import express from 'express';

import {
	login,
	authToken,
	getUser,
	getUserLoans,
	getUserSavings,
	getUserInactives,
	getUserActives,
	getUserCompleted
} from '../controllers/userCtrl.js';

import { validateToken } from '../middlewares/AuthMiddleware.js';

const router = express.Router();

// all routes in here starts with /user
router.post('/login', login);
router.get('/auth', validateToken, authToken);
router.get('/:id', getUser);
router.get('/loans/:id', getUserLoans);
router.get('/savings/:id', getUserSavings);
router.get('/inactives/:id', getUserInactives);
router.get('/actives/:id', getUserActives);
router.get('/completed/:id', getUserCompleted);

export default router;