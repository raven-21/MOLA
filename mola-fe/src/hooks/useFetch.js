import React, { useEffect, useState } from "react";
import axios from "axios";

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
		axios.get(url).then((res) => {
			setData(res.data);
		})
	}, []);

	return { data }
}

export default useFetch;