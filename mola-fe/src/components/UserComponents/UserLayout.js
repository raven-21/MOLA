import React from "react";
import { makeStyles } from "@mui/styles";
import { Outlet } from "react-router-dom";

import UserNavbar from "./UserNavbar";

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		background: '#F0F1F3'
	},
	page: {
		background: 'transparent', //'#4e73df'
		width: '100%',
		paddingTop: '70px',
		height: 'auto',
		[theme.breakpoints.only('xs')]: {
			paddingTop: '55px',
		},
	},
	toolbar: theme.mixins.toolbar
}));

const UserLayout = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<UserNavbar />
			<div className={classes.page}>
				<Outlet />
			</div>
		</div>
	);
}

export default UserLayout;