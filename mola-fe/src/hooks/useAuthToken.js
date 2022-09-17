import { useEffect, useState } from "react";
import axios from "axios";

//Authenticate TOKEN
const useAuthToken = (url) => {
	const [isAuth, setIsAuth] = useState();
	const token = localStorage.getItem("accessToken");

	useEffect(() => {
		const cancelToken = axios.CancelToken.source();

		if (token) {
			axios.get(url, {
				cancelToken: cancelToken.token,
				headers: {
					accessToken: token
				}
			})
				.then((response) => {
					if (response.data.error) {
						setIsAuth(response.data.error)
						localStorage.clear();
					}
				})
				.catch((err) => {
					if (axios.isCancel(err)) {
						console.log('Request cancelled!')
					} else {
						console.log(err)
					}
				})
		}
		return () => {
			cancelToken.cancel();
		};
	}, []);

	return { isAuth };
}

export default useAuthToken;