import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
	const [data, setData] = useState();

	const getData = (cancelToken) => {
		axios.get(url, { cancelToken: cancelToken.token })
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				if (axios.isCancel(err)) {
					console.log('Request cancelled!')
				} else {
					console.log(err)
				}
			})
	}

	useEffect(() => {
		const cancelToken = axios.CancelToken.source();

		getData(cancelToken);

		return () => {
			cancelToken.cancel();
		};
	}, []);

	return { data }
}

export default useFetch;