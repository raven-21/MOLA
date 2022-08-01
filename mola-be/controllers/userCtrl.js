import db from '../config/database.js';
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import MD5 from 'MD5';

dotenv.config();

export const login = (req, res) => {
	const data = req.body;
	db.query('SELECT a.*, b.role FROM user_accounts  a LEFT JOIN roles b ON a.id_role = b.id WHERE username = ?', [data.username], (error, result) => {
		if (error) throw error;

		if (result == 0) {
			res.send({ error: "Account doesn't exist!" });
		}
		else {
			let isMatch = data.password.localeCompare(result[0].password);
			//isMatch == 0 : true
			if (isMatch != 0) {
				res.send({ error: "Invalid username or password!" });
			}
			else {
				const user = result[0];
				const accessToken = jwt.sign({ username: user.username, id: user.id_member }, process.env.SECRET_KEY);

				const responseData = {
					accessToken: accessToken,
					userId: MD5(JSON.stringify(user.id_member)),
					username: user.username,
					role: user.role
				};
				res.send(responseData)
			}
		}
	});
}

export const authToken = (req, res) => {
	res.send(req.user)
}

export const getUser = (req, res) => {
	db.query('SELECT * FROM members a LEFT JOIN div_stations b ON a.id_statdiv = b.id WHERE MD5(a.id) = ?', req.params.id, (error, result) => {
		if (error) throw error;
		res.send(result);
	});
}

export const getUserLoans = (req, res) => {
	db.query('SELECT * FROM members a LEFT JOIN loans b ON a.id = b.member_id WHERE MD5(a.id) = ?', req.params.id, (error, result) => {
		if (error) throw error;
		res.send(result);
	})
}

export const getUserSavings = (req, res) => {
	db.query('SELECT * FROM members a LEFT JOIN savings b ON a.id = b.member_id WHERE MD5(a.id) = ?', req.params.id, (error, result) => {
		if (error) throw error;
		res.send(result);
	})
}
//Loan APPLICATIONS
export const getUserInactives = (req, res) => {
	db.query('SELECT b.* FROM members a LEFT JOIN loans b ON a.id = b.member_id WHERE status = "Inactive" AND MD5(a.id) = ? ORDER BY b.date_applied', req.params.id, (error, result) => {
		if (error) throw error;
		res.send(result);
	})
}
//Loan SUMMARY (active/completed)
export const getUserActives = (req, res) => {
	db.query('SELECT b.* FROM members a LEFT JOIN loans b ON a.id = b.member_id WHERE status = "Active" AND MD5(a.id) = ?', req.params.id, (error, result) => {
		if (error) throw error;
		res.send(result);
	})
}

export const getUserCompleted = (req, res) => {
	db.query('SELECT b.* FROM members a LEFT JOIN loans b ON a.id = b.member_id WHERE status = "Completed" AND MD5(a.id) = ?', req.params.id, (error, result) => {
		if (error) throw error;
		res.send(result);
	})
}



