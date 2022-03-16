import React from "react";
import { makeStyles } from "@mui/styles";

import Footer from "./Footer";

export default function PageLayout({ children }) {
	const useStyles = makeStyles(theme => ({
		root: {
			display: 'flex',
			flexDirection: 'column',
			height: '100vh'
		},
		page: {
			background: 'transparent', //'#4e73df'
			width: '100%',
			padding: '10px 0 20px'
		}
	}));

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.page}>
				{children}
			</div>
			<Footer />
		</div>
	)

}