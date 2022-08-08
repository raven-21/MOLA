import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url, dataValue) => {
	const [data, setData] = useState(null);

	useEffect(() => {

		axios.get(url, JSON.stringify(dataValue)).then((res) => {
			setData(res.data);
		})
	}, []);

	return { data }
}

export default useFetchData;