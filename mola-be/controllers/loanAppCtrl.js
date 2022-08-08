import db from '../config/database.js';

export const getLoanProducts = (req, res) => {
	db.query('SELECT * FROM loan_products', (error, result) => {
		if (error) throw error;

		res.send(result);
		console.log(result)
	});
}

export const getLoanProductsByUser = (req, res) => {

	db.query('SELECT a.branch, a.branch_code, b.loanprod_id, b.branch_id, b.min_term, b.max_term, c.product_name, c.product_code, c.min_amount, c.max_amount ' +
		'FROM branches a ' +
		'LEFT JOIN loan_terms b ON a.id = b.branch_id ' +
		'LEFT JOIN loan_products c ON b.loanprod_id = c.id ' +
		'WHERE a.id = ' +
		'(SELECT bb.id FROM members aa ' +
		'LEFT JOIN branches bb ON aa.branch_id = bb.id ' +
		'WHERE MD5(aa.id) = ?)', req.params.id, (error, result) => {
			if (error) throw error;

			res.send(result);
			console.log(result)
		});
}

export const getLoanPurposes = (req, res) => {
	db.query('SELECT * FROM purposes', (error, result) => {
		if (error) throw error;

		res.send(result);
		console.log(result)
	});
}

export const getInterestTypes = (req, res) => {
	db.query('SELECT * FROM interest_types', (error, result) => {
		if (error) throw error;

		res.send(result);
		console.log(result)
	});
}

export const getProductCount = (req, res) => {
	db.query(
		'SELECT COUNT(IF(loan_product = "LT", 1, NULL)) "LT",' +
		'COUNT(IF(loan_product = "ST", 1, NULL)) "ST",' +
		'COUNT(IF(loan_product = "SL", 1, NULL)) "SL"' +
		'FROM loans WHERE status = "Active"', (error, result) => {
			if (error) throw error;

			res.send(result);
			console.log(result)
		});
}
