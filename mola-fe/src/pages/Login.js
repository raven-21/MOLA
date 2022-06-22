import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import swal from 'sweetalert';

import { makeStyles } from '@mui/styles';
import { red } from "@mui/material/colors";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormHelperText from '@mui/material/FormHelperText';
// ICONS
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const useStyles = makeStyles(theme => ({
	loginBtn: {
		background: 'linear-gradient(45deg, #113050 20%, #184470 90%)',
		textTransform: 'none !important'
	},
}));

export default function Create() {
	const classes = useStyles();
	const navigate = useNavigate();

	const [values, setValues] = useState({
		username: '',
		password: '',
		showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const [loginError, setLoginError] = useState('');
	const [loginBool, setLoginBool] = useState(false);

	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		Axios.post('http://localhost:5000/login', data).then((response) => {

			if (response.data.error) {
				setLoginError(response.data.error);
				setLoginBool(true);
			}
			else {
				setLoginError();
				setLoginBool(false);
				const user = response.data;
				localStorage.setItem("accessToken", user.accessToken);
				localStorage.setItem("userId", user.userId);

				swal({
					icon: "success",
					title: "Welcome back, " + user.username + "!",
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

	return (
		<Card
			elevation={0}
			sx={{
				width: { xs: '100%', sm: 400, md: 400 },
				margin: 'auto',
				boxShadow: { xs: 'none', sm: '0 .4rem .5rem rgba(0,0,0,.10)' },
				paddingX: { xs: 0, sm: 0, md: 0 },
				paddingY: { xs: 0, sm: 3, md: 3 },
				borderRadius: 3,
			}}>
			<CardContent
				sx={{
					padding: { xs: '0 30px 0' }
				}}>
				<Typography sx={{ fontWeight: 'bold', fontSize: { xs: 30, md: 30 } }}>
					Sign in
				</Typography>
				<Typography variant='subtitle2' mb={2} sx={{ fontWeight: 'light', fontStyle: 'italic' }}>
					Loan application made easier
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
					<Box mb={2}>
						<Typography sx={{ fontSize: 13, fontWeight: 'regular', color: red[700] }}>{loginError}</Typography>
					</Box>

					<Box mb={2}>
						<TextField
							{...register("username", { required: '*Username is required!' })}
							error={!!errors?.username || loginBool}
							id="input-with-icon-textfield"
							placeholder='Username...'
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircleOutlinedIcon />
									</InputAdornment>
								),
							}}
							variant="outlined"
							fullWidth
						/>
						<FormHelperText sx={{ color: red[700] }}>{errors.username ? errors.username.message : null}</FormHelperText>
					</Box>
					<Box mb={3}>
						<TextField
							{...register("password", { required: '*Password is required!' })}
							error={!!errors?.password || loginBool}
							type={values.showPassword ? 'text' : 'password'}
							placeholder='Password...'
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<LockOpenOutlinedIcon />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end">
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								)
							}}
							variant="outlined"
							fullWidth
						/>
						<FormHelperText sx={{ color: red[700] }}>{errors.password ? errors.password.message : null}</FormHelperText>
					</Box>
					{/* <Typography mb={3} sx={{ fontWeight: 'medium', fontSize: 13, marginTop: 3 }}>Forgot
						<Link href="#" underline="hover" ml={0.5}>
							password?
						</Link>
					</Typography> */}
					<Typography mb={3} sx={{ fontWeight: 'medium', fontSize: 11, marginTop: 3 }}>
						Forgot password? Please contact your administrator.
					</Typography>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<Button
							className={classes.loginBtn}
							type='submit'
							variant='contained'
							color='primary'
							size='large'
							sx={{ borderRadius: 6, paddingLeft: 8, paddingRight: 8, paddingY: 1 }}
						>
							Sign In
						</Button>
					</Box>
				</form>
			</CardContent>
		</Card >
	)
}