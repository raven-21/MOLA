import React from 'react';
import { useForm } from 'react-hook-form';
//Custom Hooks
import useLogin from '../hooks/useLogin';
//Material UI Components
import { makeStyles } from '@mui/styles';
import { red } from "@mui/material/colors";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormHelperText from '@mui/material/FormHelperText';
import CircularProgress from '@mui/material/CircularProgress';
// ICONS
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const useStyles = makeStyles(theme => ({
	loginBtn: {
		background: 'linear-gradient(45deg, #2268a4 20%, #4994d8 90%)',
		textTransform: 'none !important',
		color: '#FFF',
		paddingTop: '12px !important',
		paddingBottom: '12px !important',
		borderRadius: '25px !important',
		letterSpacing: 1,
	},
}));

export default function Login() {
	const classes = useStyles();

	const { register, handleSubmit, formState: { errors } } = useForm();

	const { values, loginError, loginBool, isPending, handleClickShowPassword, handleMouseDownPassword, onSubmit } = useLogin();

	return (
		<Card
			elevation={0}
			sx={{
				width: { xs: '100%', sm: 400, md: 400 },
				margin: 'auto',
				// boxShadow: { xs: 'none', sm: '0 .4rem .5rem rgba(0,0,0,.10)' },
				boxShadow: { xs: 'none', sm: 'rgb(0 0 0 / 10%) 0px 0px 10px' },
				paddingX: { xs: 0, sm: 0, md: 0 },
				paddingY: { xs: 0, sm: 3, md: 3 },
				borderRadius: 2,
			}}>
			<CardContent
				sx={{
					padding: { xs: '10px 30px 0' }
				}}>
				<Typography sx={{ fontWeight: 900, fontSize: { xs: 15, md: 15 }, textAlign: 'center', marginBottom: 3 }}>
					Log in to your account
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
					<Box mb={2}>
						<Typography sx={{ fontSize: 13, fontWeight: 'regular', color: red[700] }}>{loginError}</Typography>
					</Box>
					<Box mb={2}>
						<TextField
							{...register("username", { required: '*Required!' })}
							error={!!errors?.username || loginBool}
							id="input-with-icon-textfield"
							label="Username"
							variant="outlined"
							color="secondary"
							InputProps={{
								sx: { fontSize: 13 },
							}}
							InputLabelProps={{
								sx: { fontSize: 13 },
							}}
							fullWidth
						/>
						<FormHelperText sx={{ color: red[700] }}>{errors.username ? errors.username.message : null}</FormHelperText>
					</Box>
					<Box mb={2}>
						<TextField
							{...register("password", { required: '*Required!' })}
							error={!!errors?.password || loginBool}
							type={values.showPassword ? 'text' : 'password'}
							label="Password"
							variant="outlined"
							color="secondary"
							InputProps={{
								sx: { fontSize: 13 },
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton
											size="small"
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end">
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								)
							}}
							InputLabelProps={{
								sx: { fontSize: 13 },
							}}
							fullWidth
						/>
						<FormHelperText sx={{ color: red[700] }}>{errors.password ? errors.password.message : null}</FormHelperText>
					</Box>
					<Typography mb={3} color="primary" sx={{ fontWeight: 400, fontSize: 11, textAlign: 'center' }}>
						Forgot password? Please contact your administrator.
					</Typography>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<Button
							className={classes.loginBtn}
							type="submit"
							variant="contained"
							color="secondary"
							size="large"
							sx={{ fontSize: 13 }}
							fullWidth>
							{!isPending ?
								(
									'LOGIN'
								) :
								(
									<CircularProgress
										color="inherit"
										size={23} />
								)
							}
						</Button>
					</Box>
				</form>
			</CardContent>
		</Card >
	)
}