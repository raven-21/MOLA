import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { grey, red } from "@mui/material/colors";
//MUI Components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import NoData from "../../../../../assets/svg/undraw_no_data.svg";
//CUSTOM Components
import DialogStatus from "./dialog";
//
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';

const useStyles = makeStyles(theme => ({

	cardLoan: {
		userSelect: 'none',
		background: '#fff',
		borderRadius: '12px !important',
		minWidth: '300px',
		height: '100%',
		cursor: 'pointer',
		marginBottom: '20px !important'
	},
	verified: {
		color: '#57CBA7 !important'
	},
	approved: {
		color: '#74C0FC !important'
	},
	disapproved: {
		color: red['A100'],
	}

}));

export default function CardLoanStatus({ inactives }) {
	const classes = useStyles();

	const [openDialog, setOpenDialog] = useState(false);
	const [value, setValue] = useState();

	const handleDialogOpen = (inactive) => {
		setOpenDialog(true);
		setValue(inactive)
	}

	return (
		<div>
			{inactives.length !== 0 ?
				(
					<div>
						{inactives.map((inactive) => (
							<Card className={classes.cardLoan} elevation={0} key={inactive.id}>
								<CardActionArea onClick={() => handleDialogOpen(inactive)}>
									<CardContent
										sx={{
											paddingX: { xs: '18px', sm: '25px', md: '30px' },
											paddingY: { xs: '18px', sm: '20px', md: '30px' },
											color: grey[600],
										}}>
										<Grid container spacing={2}>
											<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
												{inactive.product_id === 1 &&
													<AccountBalanceRoundedIcon
														sx={{
															fontSize: { xs: 30, sm: 35, md: 40 },
															marginRight: { xs: 1.5, sm: 1.5, md: 2 },
															color: grey[500]
														}} />
												}
												{inactive.product_id === 2 &&
													<AccountBalanceWalletRoundedIcon
														sx={{
															fontSize: { xs: 30, sm: 35, md: 40 },
															marginRight: { xs: 1.5, sm: 1.5, md: 2 },
															color: grey[500]
														}} />
												}
												{inactive.product_id === 3 &&
													<StoreRoundedIcon
														sx={{
															fontSize: { xs: 30, sm: 35, md: 40 },
															marginRight: { xs: 1.5, sm: 1.5, md: 2 },
															color: grey[500]
														}} />
												}
												<Box>
													<Typography
														className={inactive.app_status === 'Verified' || inactive.app_status === 'For Verification' ? classes.verified : inactive.app_status === 'Disapproved' ? classes.disapproved : classes.approved}
														sx={{
															fontSize: { xs: 18, sm: 18, md: 20, },
															fontWeight: 700,
														}}>
														{inactive.app_status}
													</Typography>
													<Typography
														sx={{
															fontSize: { xs: 13, sm: 13, md: 16, }
														}}>
														Loan Status
													</Typography>
												</Box>
											</Grid>
											<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'flex-end' }}>
												<Typography
													sx={{
														fontSize: { xs: 10, sm: 12, md: 14 }
													}}>
													{inactive.date_applied}
												</Typography>
											</Grid>
											<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
												<div>
													<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
														<Typography
															sx={{
																fontSize: { xs: 11, sm: 14, md: 16 }
															}}>
															Loan Amount
														</Typography>
													</Box>
													<Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
														<Typography sx={{ marginTop: '2px', fontWeight: 'bold' }}>PHP</Typography>
														<Typography
															sx={{
																marginLeft: .5,
																fontWeight: 'bold',
																fontSize: { xs: 18, sm: 20, md: 20 }
															}}>
															{inactive.loan_amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
														</Typography>
													</Box>
												</div>
											</Grid>
										</Grid>
									</CardContent>
								</CardActionArea>
							</Card>
						))}
						<DialogStatus openDialog={openDialog} setOpenDialog={setOpenDialog} value={value} />
					</div>
				)
				:
				(
					<Grid container spacing={1}>
						<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<Box
								mt={4}
								mb={{ xs: 2, sm: 2, md: 4 }}
								component="img"
								sx={{
									width: { xs: 100, sm: 120, md: 150 },
								}}
								alt="Memba Logo"
								src={NoData}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<Typography
								sx={{
									fontWeight: 'bold',
									fontSize: { xs: 15, sm: 15, md: 18 },
									color: grey[500],
								}}>
								No Applications, yet.
							</Typography>
						</Grid>
						<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<Box>
								<Typography
									sx={{
										fontWeight: 'regular',
										fontSize: { xs: 12, sm: 13, md: 15 },
										color: grey[500],
										textAlign: 'center'
									}}>
									You have no loan applications at this moment.
								</Typography>
								<Typography
									sx={{
										fontWeight: 'regular',
										fontSize: { xs: 12, sm: 13, md: 15 },
										color: grey[500],
										textAlign: 'center'
									}}>
									Apply for a loan now!
								</Typography>
							</Box>
						</Grid>
					</Grid>
				)}
		</div>
	);
}