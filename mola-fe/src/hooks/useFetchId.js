import { useEffect, useState } from "react";
import axios from "axios";

const useFetchId = (url, id) => {
	const [data, setData] = useState();

	const getData = (cancelToken) => [
		axios.get(url + id, { cancelToken: cancelToken.token })
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
	]

	useEffect(() => {
		const cancelToken = axios.CancelToken.source();

		// const interval = setInterval(() => {
		// 	getData(cancelToken);
		// }, 1000)
		getData(cancelToken);

		return () => {
			cancelToken.cancel();
			// clearInterval(interval);
		};
	}, [id]);

	return { data }
}

export default useFetchId;