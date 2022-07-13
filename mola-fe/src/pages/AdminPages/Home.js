import React from "react";
import { useAuth } from "../../context/authContext";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles(theme => ({
	root: {
		background: '#F0F1F3',
		height: '100%',
	},
	content: {
		padding: '24px 16px',
		overflowX: 'auto',
		[theme.breakpoints.down('sm')]: {
			padding: '24px 0'
		}
	},
}));

export default function Home() {
	const classes = useStyles();
	const auth = useAuth();
	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					<h1>Hello, admin!</h1>
				</div>
			</Container >
		</div >
	);
}