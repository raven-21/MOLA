import { useState } from "react";
import { useNavigate } from "react-router-dom";
//3rd party libraries
import axios from "axios";
import swal from 'sweetalert';
//Custom components
import Configs from "../../../../utils/Configs";
import "../../../../pages/styles.css";

const useHome = () => {
	const { API } = Configs();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handleUpdate = (data) => {

		const template = "Are you sure you want to " + data.title + "? <br /> You can't undo this action."

		swal({
			title: data.title + " Loan?",
			content: {
				element: 'p',
				attributes: {
					innerHTML: `${template}`,
				}
			},
			buttons: ["Cancel", "Confirm"],
			dangerMode: true,
		})
			.then((willUpdate) => {
				if (willUpdate) {
					setIsLoading(prev => !prev);

					axios.patch(API + 'loan/update_app_status', data).then((response) => {
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
								title: "Saved changes!",
								text: "Loan request updated.",
								buttons: false,
								timer: 2000,
							});
							setTimeout(() => {
								window.location.reload();
							}, 1000)
						}
					});
				} else {
					swal.close();
				}
			});
	}

	return { handleUpdate, isLoading }
}

export default useHome;