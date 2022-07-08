import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Custom Home Components
import CardLoanStatus from "../../components/HomeComponents/CardLoanStatus";
import CardLoanSummary from "../../components/HomeComponents/CardLoanSummary";
import CardLoanApply from "../../components/HomeComponents/CardLoanApply";


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

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					<CardLoanApply />
					<br />
					{/* Loan Status List */}
					<CardLoanStatus />

					{/* Loan Summary List */}
					<CardLoanSummary />
				</div>
			</Container >
		</div >
	);
}