"use strict";

import dotenv from "dotenv";
import mysql from 'mysql';

dotenv.config();

const config = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
};

// const connect = () => {
//     const connection = mysql.createConnection(configuration);
//     connection.connect((err) => {
//         if(err){
//             console.log(err)
//         }
//     });
// };

const db = mysql.createPool(config);

export default db;
// exports.connect = connect;