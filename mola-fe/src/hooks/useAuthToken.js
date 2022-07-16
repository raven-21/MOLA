import { useEffect, useState } from "react";
import axios from "axios";

//Authenticate TOKEN
const useAuthToken = (url) => {
	const [isAuth, setIsAuth] = useState();
	const token = localStorage.getItem("accessToken");

	useEffect(() => {
		if (token) {
			axios.get(url, {
				headers: {
					accessToken: token
				}
			}).then((response) => {
				if (response.data.error) {
					setIsAuth(response.data.error)
					localStorage.clear();
				}
			})
		}

	}, []);

	return { isAuth };
}

export default useAuthToken;