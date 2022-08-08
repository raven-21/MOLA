import express from 'express';

import { getInterestTypes, getLoanProducts, getLoanProductsByUser, getLoanPurposes, getProductCount } from '../controllers/loanAppCtrl.js';

const router = express.Router();

// all routes in here starts with /loanApps
router.get('/loan_products', getLoanProducts);
router.get('/loan_purposes', getLoanPurposes);
router.get('/interest_types', getInterestTypes);
router.get('/product_count', getProductCount);
router.get('/selectProduct/:id', getLoanProductsByUser);


export default router;