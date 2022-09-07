import express from 'express';

import { getInterestTypes, getLessByUser, getLoanProducts, getBranches, getLoanProductsByUser, getLoanPurposes, getLoans, getProductCount, postLoan } from '../controllers/loanAppCtrl.js';

const router = express.Router();

// all routes in here starts with /loanApps
router.get('/loan_products', getLoanProducts);
router.get('/loan_purposes', getLoanPurposes);
router.get('/interest_types', getInterestTypes);
router.get('/branches', getBranches);
router.get('/product_count/:id', getProductCount);
router.get('/selectProduct/:id', getLoanProductsByUser);
router.get('/less/:id', getLessByUser);
router.get('/loans', getLoans);
router.post('/add_loan', postLoan);


export default router;