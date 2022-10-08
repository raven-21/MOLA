import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//3rd party libraries
import axios from "axios";
import swal from 'sweetalert';
//Custom components
import Configs from "../../../../utils/Configs";

const useApply = () => {
	const { API } = Configs();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handlePost = (data) => {
		setIsLoading(prev => !prev);
		console.log(data)

		axios.post(API + 'loanApps/add_loan', data).then((response) => {
			setIsLoading(prev => !prev);
			if (response.data.error) {
				swal({
					icon: "danger",
					title: "Opps! Something went wrong",
					text: "Please try again later.",
					buttons: false,
					timer: 2000,
				});
			} else {
				swal({
					icon: "success",
					title: "Success!",
					text: "Loan application submitted.",
					buttons: false,
					timer: 2000,
				});
				setTimeout(() => {
					navigate('/home');
				}, 1500)
			}
		});
	}

	return { handlePost, isLoading }
}

export default useApply;