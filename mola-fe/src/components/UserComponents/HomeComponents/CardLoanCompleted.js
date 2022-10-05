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
//MUI icons
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import ContentPasteSearchRoundedIcon from '@mui/icons-material/ContentPasteSearchRounded';
//
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

export default function CardLoanCompleted({ completed }) {
	const classes = useStyles();

	const [openDialog, setOpenDialog] = useState(false);
	const [value, setValue] = useState();

	const handleDialogOpen = (complete) => {
		setOpenDialog(true);
		setValue(complete)
	}

	return (
		<div>
			{completed.length !== 0 ?
				(
					<div>
						{completed.map((complete) => (
							<Card className={classes.cardLoan} elevation={0} key={complete.id}>
								<CardActionArea onClick={() => handleDialogOpen(complete)}>
									<CardContent
										sx={{
											paddingX: { xs: '18px', sm: '25px', md: '30px' },
											paddingY: { xs: '18px', sm: '20px', md: '30px' },
											color: grey[600],
										}}>
										<Grid container spacing={2}>
											<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
												<CreditScoreOutlinedIcon
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
														PHP {complete.loan_amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
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
													Voucher NO. {complete.voucher_no}
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
															{complete.outstanding_bal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
														</Typography>
													</Box>
												</div>
											</Grid>
										</Grid>
									</CardContent>
								</CardActionArea>
							</Card>
						))}
					</div>
				)
				:
				(
					<Grid container spacing={1}>
						{/* <Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<ContentPasteSearchRoundedIcon
								sx={{
									marginTop: 5,
									fontSize: { xs: 50, sm: 55, md: 60 },
									color: grey[500],
								}}
							/>
						</Grid> */}
						<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<Typography
								sx={{
									marginLeft: .5,
									fontSize: { xs: 12, sm: 13, md: 16 },
									color: grey[500],
								}}>
								No loans completed yet.
							</Typography>
						</Grid>

					</Grid>
				)
			}
			<DialogSummary openDialog={openDialog} setOpenDialog={setOpenDialog} value={value} />
		</div>
	);
}