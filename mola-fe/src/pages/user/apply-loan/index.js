import React from "react";
//Material UI
import Container from "@mui/material/Container";
//Custom Components
// import LoanAppForm from "../../components/LoanApplication/LoanAppForm";
// import AppForm from "../../components/LoanAppComponents/AppForm";
import LoanForm from "./components/index";
import useStyles from "./../styles";


export default function LoanApply() {
	const { classes } = useStyles();
	return (
		<div className={classes.root}>
			<Container maxWidth="md">
				<div className={classes.content}>

					<LoanForm />

					{/* <LoanAppForm /> */}
				</div>
			</Container>
		</div>
	);
}