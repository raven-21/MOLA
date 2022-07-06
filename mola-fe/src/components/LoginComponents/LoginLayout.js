import React from "react";
import { makeStyles } from "@mui/styles";
import { Outlet } from "react-router-dom";
//Material UI Components
import Box from '@mui/material/Box';
//SRC IMG
import LogoMemba from '../../assets/memba_logo/memba.png';
//Custom Components
import Footer from "./Footer";

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
	},
	page: {
		background: 'transparent', //'#4e73df'
		width: '100%',
		padding: '10px 0 20px',
		height: 'auto'
	},
	logo: {
		textAlign: 'center',
		padding: '30px 0 0px'
	}
}));

const LoginLayout = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.logo}>
				<Box
					component="img"
					sx={{
						width: 250,
					}}
					alt="Memba Logo hihi"
					src={LogoMemba}
				/>
			</div>
			<div className={classes.page}>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default LoginLayout;