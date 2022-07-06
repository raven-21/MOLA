import db from '../config/database.js';
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import md5 from 'md5';

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
					userId: md5(user.id_member),
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

