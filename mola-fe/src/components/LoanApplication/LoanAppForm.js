import React from "react";
import { makeStyles } from "@mui/styles";
//Material UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const useStyles = makeStyles(theme => ({
	cardContent: {
		padding: '20px !important',
	},
}));

export default function LoanAppForm() {
	const classes = useStyles();

	return (
		<div>
			<Card>
				<CardContent className={classes.cardContent}>
					APPLICATION FORM
				</CardContent>
			</Card>
		</div>
	);
}