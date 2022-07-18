import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
//Hooks
import Configs from '../../utils/Configs';
import useFetchId from '../../hooks/useFetchId';
//MUI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
// Custom Home Components
import CardLoanApply from "../../components/HomeComponents/CardLoanApply";
import CardLoanStatus from "../../components/HomeComponents/CardLoanStatus";
import CardLoanSummary from "../../components/HomeComponents/CardLoanSummary";
import CardLoanCompleted from "../../components/HomeComponents/CardLoanCompleted";
import SkeletonLoader from "../../components/SkeletonLoader";


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
	title: {
		fontWeight: 'bold !important',
		color: grey[600]
	}
}));

export default function Home() {
	const classes = useStyles();
	const { API, userId } = Configs();
	const { data: savings } = useFetchId(API + 'user/savings/', userId);
	const { data: inactives } = useFetchId(API + 'user/inactives/', userId);
	const { data: actives } = useFetchId(API + 'user/actives/', userId);
	const { data: completed } = useFetchId(API + 'user/completed/', userId);

	const [checked, setChecked] = React.useState(false);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					{savings ?
						(
							<CardLoanApply savings={savings} />
						)
						:
						(
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12} md={6}>
									<SkeletonLoader />
								</Grid>
								<Grid item xs={12} sm={12} md={6}>
									<SkeletonLoader />
								</Grid>
							</Grid>
						)
					}
					<br />
					{/* Loan Status List */}
					<Grid container my="15px" sx={{ display: 'flex', alignItems: 'center', minWidth: '300px' }}>
						<Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: 'center', paddingLeft: { xs: '10px', sm: '20px' } }}>
							<Typography className={classes.title}
								sx={{
									fontSize: { xs: '14px', sm: '18px', md: '18px' }
								}}>
								Loan Application Status
							</Typography>
						</Grid>
					</Grid>

					{inactives ?
						(
							<CardLoanStatus inactives={inactives} />
						)
						:
						(
							<SkeletonLoader />
						)
					}

					{/* Loan Summary List */}
					<Grid container my="15px" sx={{ display: 'flex', alignItems: 'center', minWidth: '300px' }}>
						<Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center', paddingLeft: { xs: '10px', sm: '20px' } }}>
							<Typography className={classes.title}
								sx={{
									fontSize: { xs: '14px', sm: '18px', md: '18px' }
								}}>
								Loan Summary
							</Typography>
						</Grid>
						<Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
							<Paper elevation={0} sx={{ display: 'flex', alignItems: 'center', paddingLeft: 2, paddingRight: 1, paddingY: 1, borderRadius: 5 }}>
								<Typography
									sx={{
										fontSize: { xs: '12px', sm: '14px', md: '14px' }
									}}>
									Show all
								</Typography>
								<Switch
									size="small"
									checked={checked}
									onChange={handleChange}
								/>
							</Paper>
						</Grid>
					</Grid>

					{actives ?
						(
							<CardLoanSummary actives={actives} />
						)
						:
						(
							<SkeletonLoader />
						)
					}
					<br />

					{checked &&
						<div>
							<Grid container my="15px" sx={{ display: 'flex', alignItems: 'center', minWidth: '300px' }}>
								<Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<Typography className={classes.title}
										sx={{
											fontSize: { xs: '14px', sm: '18px', md: '18px' }
										}}>
										Completed Loans
									</Typography>
								</Grid>
							</Grid>
							{completed ?
								(
									<CardLoanCompleted completed={completed} />
								)
								:
								(
									<SkeletonLoader />
								)
							}

						</div>
					}
					<br /><br />
				</div>
			</Container >
		</div >
	);
}