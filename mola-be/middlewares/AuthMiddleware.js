import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

export const validateToken = (req, res, next) => {
	const accessToken = req.header("accessToken");

	if (!accessToken) return res.json({ error: "User not logged in!" });

	try {
		const validToken = jwt.verify(accessToken, process.env.SECRET_KEY);

		if (validToken) {
			return next();
		}
	}

	catch (err) {
		return res.send({ error: err })
	}
}
