import { useEffect, useState } from "react";
import axios from "axios";

const useFetchId = (url, id) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get(url + id).then((res) => {
			setData(res.data);
		});
	}, [id]);

	return { data }
}

export default useFetchId;