import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { useAuth } from "../context/authContext";

const useLogin = () => {

	const navigate = useNavigate();
	const { login } = useAuth();

	const [loginError, setLoginError] = useState('');
	const [loginBool, setLoginBool] = useState(false);
	const [isPending, setIsPending] = useState(false);

	const [values, setValues] = useState({
		username: '',
		password: '',
		showPassword: false,
	});

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const onSubmit = (data) => {
		setIsPending(true);

		axios.post('http://localhost:5000/user/login', data).then((response) => {

			setIsPending(false);

			if (response.data.error) {
				setLoginError(response.data.error);
				setLoginBool(true);
			}
			else {
				setLoginError();
				setLoginBool(false);
				const user = response.data;
				login(user);

				localStorage.setItem("accessToken", user.accessToken);
				localStorage.setItem("userRole", user.role);
				localStorage.setItem("userId", user.userId);

				swal({
					icon: "success",
					title: "Welcome back!",
					text: "Login successful.",
					buttons: false,
					timer: 2000,
				});
				setTimeout(() => {
					navigate('/home');
				}, 1500)
			}
		})
	}

	return { values, loginError, loginBool, isPending, handleClickShowPassword, handleMouseDownPassword, onSubmit }
}

export default useLogin;