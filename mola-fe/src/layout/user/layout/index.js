import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import { Outlet } from "react-router-dom";

import UserNavbar from "../navbar/index";

import Fab from '@mui/material/Fab';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

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
			paddingTop: '50px',
		},
		// overflow: 'auto',
		// '&::-webkit-scrollbar': {
		// 	width: '7px !important'
		// },
		// '&::-webkit-scrollbar-track': {
		// 	background: '#FFF'
		// },
		// '&::-webkit-scrollbar-thumb': {
		// 	background: grey[300],
		// 	borderRadius: '10px'
		// },
		// '&::-webkit-scrollbar-thumb:hover': {
		// 	background: grey[400]
		// }
	},
	toolbar: theme.mixins.toolbar
}));

const UserLayout = () => {
	const classes = useStyles();

	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		let isScrolled = false;
		window.addEventListener("scroll", () => {
			if (window.scrollY > 150) {
				if (!isScrolled) {
					setShowTopBtn(true);
				}
			} else {
				if (!isScrolled) {
					setShowTopBtn(false);
				}
			}
		});
		return () => {
			isScrolled = true;
		};
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className={classes.root}>
			<UserNavbar />
			<div className={classes.page}>
				<Fab
					onClick={goToTop}
					size="small"
					color="secondary"
					sx={{
						position: 'fixed',
						zIndex: 2,
						bottom: "2vh",
						right: "5%",
						opacity: !showTopBtn ? "0" : "1",
						transition: "all .5s",
					}}>
					<KeyboardArrowUpRoundedIcon />
				</Fab>
				<Outlet />
			</div>
		</div>
	);
}

export default UserLayout;