import db from '../config/database.js';

export const getLoanProducts = (req, res) => {
	db.query('SELECT a.*, b.interest_type FROM loan_products a LEFT JOIN interest_types b ON a.id_intype = b.id', (error, result) => {
		if (error) throw error;

		res.send(result);
		// console.log(result)
	});
}

export const getLoanProductsByUser = (req, res) => {

	db.query('SELECT a.branch, a.branch_code, b.product_id, b.branch_id, b.min_term, b.max_term, c.product_name, c.product_code, c.min_amount, c.max_amount ' +
		'FROM branches a ' +
		'LEFT JOIN loan_terms b ON a.id = b.branch_id ' +
		'LEFT JOIN loan_products c ON b.product_id = c.id ' +
		'WHERE a.id = ' +
		'(SELECT bb.id FROM members aa ' +
		'LEFT JOIN branches bb ON aa.branch_id = bb.id ' +
		'WHERE MD5(aa.id) = ?)', req.params.id, (error, result) => {
			if (error) throw error;

			res.send(result);
			// console.log(result)
		});
}

export const getLoanPurposes = (req, res) => {
	db.query('SELECT * FROM purposes', (error, result) => {
		if (error) throw error;

		res.send(result);
		// console.log(result)
	});
}

export const getInterestTypes = (req, res) => {
	db.query('SELECT * FROM interest_types', (error, result) => {
		if (error) throw error;

		res.send(result);
		// console.log(result)
	});
}

export const getBranches = (req, res) => {
	db.query('SELECT * FROM branches', (error, result) => {
		if (error) throw error;

		res.send(result);
		// console.log(result)
	});
}

export const getProductCount = (req, res) => {
	db.query(
		'SELECT COUNT(IF(product_id = 1, 1, NULL)) "count_LT", COUNT(IF(product_id = 2, 1, NULL)) "count_ST", COUNT(IF(product_id = 3, 1, NULL)) "count_SL" ' +
		'FROM loans ' +
		'WHERE STATUS IN ("Active", "Completed") AND member_id = ?', req.params.id, (error, result) => {
			if (error) throw error;

			res.send(result);
			// console.log(result)
		});
}

export const getLessByUser = (req, res) => {
	db.query('SELECT * FROM less WHERE MD5(member_id) = ?', req.params.id, (error, result) => {
		if (error) throw error;

		res.send(result);
		// console.log(result)
	});
}

export const getLoans = (req, res) => {
	db.query('SELECT a.*, b.lastname, b.firstname, b.middlename, b.suffix, b.employee_id, b.prof_color, c.product_name, c.product_code, d.purpose, e.interest_type, f.branch, f.branch_code ' +
		'FROM loans a ' +
		'LEFT JOIN members b ON a.member_id = MD5(b.id) ' +
		'LEFT JOIN loan_products c ON a.product_id = c.id ' +
		'LEFT JOIN purposes d ON a.purpose_id = d.id ' +
		'LEFT JOIN interest_types e ON c.id_intype = e.id ' +
		'LEFT JOIN branches f ON b.branch_id = f.id ORDER BY a.date_applied DESC'
		, (error, result) => {
			if (error) throw error;

			res.send(result);
			// console.log(result)
		});
}

export const postLoan = (req, res) => {
	var info = req.body;
	let data = [
		info.memberId,
		info.purpose,
		info.amount,
		info.term,
		info.appStatus,
		info.status,
		info.dateApplied,
	];
	console.log(data);

	db.query(
		'INSERT INTO loans ' +
		'(member_id, purpose_id, initial_amount, term, app_status, status, date_applied)  ' +
		'VALUES (?,?,?,?,?,?,?)', data, (error, result) => {
			if (error) throw error;
			res.send(result);
			// console.log(result)
		});

}

export const updateLoan = (req, res) => {
	var info = req.body;
	let data = [info.appStatus, info.voucherNo, info.status, info.dateGrant, info.dateTerminate, info.id];
	db.query('UPDATE loans SET app_status = ?, voucher_no = ?, status = ?, date_granted = ?, termination_date = ?  WHERE id = ?', data, (error, result) => {
		if (error) throw error;
		res.send(result);
		// console.log(result)
	})
}
