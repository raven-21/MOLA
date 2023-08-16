import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/authContext";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
//MUI components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
//MUI icons

//Hooks
import Configs from "../../../utils/Configs";
import useFetch from "../../../hooks/useFetch";
//Custom Components
import LoansList from "./components/loan-list/index";

const useStyles = makeStyles(theme => ({
	root: {
		background: '#F0F1F3',
		height: '100%',
	},
	content: {
		padding: '24px 16px',
		overflowX: 'auto',
		[theme.breakpoints.down('sm')]: {
			padding: '32px 0'
		}
	},
}));

export default function Home() {
	const classes = useStyles();
	const auth = useAuth();
	const { API } = Configs();
	const { data: loans } = useFetch(API + 'loan/loans');
	const { data: branches } = useFetch(API + 'loan/branches');

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12} md={12}>
							{loans && branches ?
								(
									<LoansList loans={loans} branches={branches} />
								)
								:
								(
									<Backdrop open={true} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
										<CircularProgress color="inherit" />
									</Backdrop>
								)
							}

						</Grid>
					</Grid>
				</div>
			</Container >
		</div >
	);
}