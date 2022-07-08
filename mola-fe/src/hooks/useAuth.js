import { useEffect, useState } from "react";
import axios from "axios";

const useAuth = (url) => {
	const [isAuth, setIsAuth] = useState();
	const [user, setUser] = useState();
	const token = localStorage.getItem("accessToken");

	useEffect(() => {
		if (token) {
			setUser(JSON.parse(localStorage.getItem("userAuth")));
			axios.get(url, {
				headers: {
					accessToken: token
				}
			}).then((response) => {
				if (response.data.error) {
					setIsAuth(response.data.error)
					localStorage.removeItem("accessToken");
				}
			})
		}

	}, []);

	return { isAuth, user };
}

export default useAuth;