import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
// ICONS
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';


const useStyles = makeStyles(theme => ({
	loginBtn: {
		background: 'linear-gradient(45deg, #113050 20%, #184470 90%)',
		textTransform: 'none !important'
	},
}));

export default function Create() {
	const classes = useStyles();
	const navigate = useNavigate();
	const location = useLocation();

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

	const handleSubmit = (e) => {
		e.preventDefault();
		const credentials = { values };
		navigate('/home');
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
				<form onSubmit={handleSubmit} autoComplete="off">
					<Box mb={2}>
						<TextField
							// size="small"
							id="input-with-icon-textfield"
							// label="Username"
							placeholder='Username...'
							value={values.username}
							onChange={handleChange('username')}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircleOutlinedIcon />
									</InputAdornment>
								),
							}}
							variant="outlined"
							fullWidth
							required
						/>
					</Box>
					<Box mb={3}>
						<TextField
							// size="small"
							type={values.showPassword ? 'text' : 'password'}
							value={values.password}
							onChange={handleChange('password')}
							// label="Password"
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
							required
						/>
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
							sx={{ borderRadius: 6, paddingLeft: 6, paddingRight: 5, paddingY: 1 }}
						>
							Sign In
							<KeyboardArrowRightRoundedIcon />
						</Button>
					</Box>
				</form>
			</CardContent>
		</Card>
	)
}