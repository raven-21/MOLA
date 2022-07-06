import { useEffect, useState } from "react";
import axios from "axios";

const useAuth = (url) => {
	let [isAuth, setIsAuth] = useState(null);

	useEffect(() => {
		let token = localStorage.getItem("accessToken");

		const validateToken = async () => {
			if (!token) {
				setIsAuth(false);
			} else {
				const res = await axios.get(url, { headers: { accessToken: token } }).then((response) => {
					return response.data.error;
				});
				if (res) {
					setIsAuth('INVALID TOKEN');
				}
				else {
					setIsAuth('VALID TOKEN');
				}
			}
		}
		validateToken();
	}, []);

	// useEffect(() => {
	// 	const fetchData = () => {
	// 		var token = localStorage.getItem("accessToken");

	// try {
	// 	const res = await axios.get(url, { headers: { accessToken: token } }).then((response) => {
	// 		return response.data.error;
	// 	});

	// 	if (!res) {
	// 		setIsAuth(true);
	// 	}
	// } catch (err) {
	// 	console.log(err)
	// 	setIsAuth(false);
	// }


	// if (!token) setIsAuth(false);
	// try {
	// 	const res = await axios.get(url, {
	// 		headers: {
	// 			accessToken: token
	// 		},
	// 	}).then((response) => { return response });
	// 	console.log(res);

	// 	if (res.status == 200) {
	// 		console.log("nice!")
	// 		setIsAuth(true);
	// 	}
	// } catch (e) {
	// 	console.log(e);
	// 	setIsAuth(false);
	// }
	// 	}
	// 	fetchData();
	// }, [])
	return { isAuth };
}

export default useAuth;