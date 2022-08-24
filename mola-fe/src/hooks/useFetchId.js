import { useEffect, useState } from "react";
import axios from "axios";

const useFetchId = (url, id) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const cancelToken = axios.CancelToken.source();

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

		return () => {
			cancelToken.cancel();
		};
	}, [id]);

	return { data }
}

export default useFetchId;