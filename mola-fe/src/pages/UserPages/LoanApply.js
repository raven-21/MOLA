import React from "react";
import { makeStyles } from "@mui/styles";
//Material UI
import Container from "@mui/material/Container";
//Custom Components
import LoanAppForm from "../../components/LoanApplication/LoanAppForm";
import AppForm from "../../components/LoanAppComponents/AppForm";
import useStyles from "./usePageStyles";


export default function LoanApply() {
	const { classes } = useStyles();
	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					<AppForm />
					{/* <LoanAppForm /> */}
				</div>
			</Container>
		</div>
	);
}