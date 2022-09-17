import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";

import Fab from '@mui/material/Fab';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const useStyles = makeStyles(theme => ({
	scrollButton: {
		zIndex: 20,
		position: "fixed",
		bottom: "2vh",
		right: "5%"
	}
}));

const ScrollToTop = () => {
	const classes = useStyles();
	// const [showTopBtn, setShowTopBtn] = useState(false);

	// useEffect(() => {
	// 	window.addEventListener("scroll", () => {
	// 		if (window.scrollY > 200) {
	// 			setShowTopBtn(true);
	// 		} else {
	// 			setShowTopBtn(false);
	// 		}
	// 	});
	// }, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div>

			<Fab
				className={classes.scrollButton}
				onClick={goToTop}
				color="primary"
			>
				<KeyboardArrowUpRoundedIcon />
			</Fab>

		</div>
	);
};
export default ScrollToTop;