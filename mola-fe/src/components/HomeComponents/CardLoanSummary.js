import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
//MUI
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import NoData from "../../assets/svg/undraw_blank_canvas.svg";
//MUI icons
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
//CUSTOM Components
import DialogSummary from "./DialogSummary";

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

}));

export default function CardLoanSummary({ actives }) {
	const classes = useStyles();

	const [openDialog, setOpenDialog] = useState(false);
	const [value, setValue] = useState();

	const handleDialogOpen = (active) => {
		setOpenDialog(true);
		setValue(active)
	}

	return (
		<div>
			{actives.length !== 0 ?
				(
					<div>
						{actives.map((active) => (
							<Card className={classes.cardLoan} elevation={0} key={active.id}>
								<CardActionArea onClick={() => handleDialogOpen(active)}>
									<CardContent
										sx={{
											paddingX: { xs: '18px', sm: '25px', md: '30px' },
											paddingY: { xs: '18px', sm: '20px', md: '30px' },
											color: grey[600],
										}}>
										<Grid container spacing={2}>
											<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
												<CreditCardOutlinedIcon
													sx={{
														fontSize: { xs: 30, sm: 35, md: 35 },
														marginRight: 2
													}} />
												<Box>
													<Typography
														sx={{
															fontSize: { xs: 15, sm: 18, md: 20, },
															fontWeight: 700
														}}>
														PHP {active.loan_amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
													</Typography>
													<Typography
														sx={{
															fontSize: { xs: 12, sm: 12, md: 16, }
														}}>
														Loan Amount
													</Typography>
												</Box>
											</Grid>
											<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'flex-end' }}>
												<Typography
													sx={{
														fontSize: { xs: 10, sm: 12, md: 14 }
													}}>
													Voucher NO. {active.voucher_no}
												</Typography>
											</Grid>
											<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
												<div>
													<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
														<Typography
															sx={{
																fontSize: { xs: 10, sm: 14, md: 16 }
															}}>
															Outstanding Balance
														</Typography>
													</Box>
													<Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
														<Typography sx={{ marginTop: '2px', fontWeight: 'bold' }}>PHP</Typography>
														<Typography
															sx={{
																marginLeft: .5,
																fontWeight: 'bold',
																fontSize: { xs: 18, sm: 21, md: 21 }
															}}>
															{active.outstanding_bal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
														</Typography>
													</Box>
												</div>
											</Grid>
										</Grid>
									</CardContent>
								</CardActionArea>
							</Card>
						))}
						<DialogSummary openDialog={openDialog} setOpenDialog={setOpenDialog} value={value} />
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
								No active loans.
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
									You don't have any active loans.
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