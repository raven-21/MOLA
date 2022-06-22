import React, { useEffect, useState } from "react";
import Axios from "axios";

const useFetch = (url) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		// fetch(url)
		// 	.then(res => {
		// 		return res.json();
		// 	})
		// 	.then(data => {
		// 		setData(data);
		// 	})
		Axios.get(url).then((res) => {
			setData(res.data);
		})
	}, []);

	return { data }
}

export default useFetch;