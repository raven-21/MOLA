import express from 'express';

import { getInterestTypes, getLoanProducts, getLoanPurposes } from '../controllers/loanAppCtrl.js';

const router = express.Router();

// all routes in here starts with /loanApp
router.get('/loan_products', getLoanProducts);
router.get('/loan_purposes', getLoanPurposes);
router.get('/interest_types', getInterestTypes);





export default router;