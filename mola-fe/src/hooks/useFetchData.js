import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url, infos) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const cancelToken = axios.CancelToken.source();

		axios.get(url, JSON.stringify(infos))
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

		return () => {
			cancelToken.cancel();
		};
	}, []);

	return { data }
}

export default useFetchData;