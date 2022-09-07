import React from "react";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import { Outlet } from "react-router-dom";

import AdminNavbar from "./AdminNavbar";

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
		overflow: 'auto',
		'&::-webkit-scrollbar': {
			width: '7px !important'
		},
		'&::-webkit-scrollbar-track': {
			background: '#FFF'
		},
		'&::-webkit-scrollbar-thumb': {
			background: grey[300],
			borderRadius: '10px'
		},
		'&::-webkit-scrollbar-thumb:hover': {
			background: grey[400]
		}
	},
	toolbar: theme.mixins.toolbar
}));

const AdminLayout = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AdminNavbar />
			<div className={classes.page}>
				<Outlet />
			</div>
		</div>
	);
}

export default AdminLayout;