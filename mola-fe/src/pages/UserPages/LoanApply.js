import React from "react";
import { makeStyles } from "@mui/styles";
//Material UI
import Container from "@mui/material/Container";
//Custom Components
import LoanAppForm from "../../components/LoanApplication/LoanAppForm";

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


export default function LoanApply() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container maxWidth="md">
				<div className={classes.content}>
					<LoanAppForm />
				</div>
			</Container>
		</div>
	);
}