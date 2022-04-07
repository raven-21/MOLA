import db from '../config/database.js';

export const getLoanProducts = (req, res) => {
	db.query('SELECT * FROM loan_products', (error, result) => {
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
