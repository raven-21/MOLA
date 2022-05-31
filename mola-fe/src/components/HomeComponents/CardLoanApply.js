import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";


import LoanSvg from "../../assets/svg/undraw_online_payments_re_y8f2.svg";
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

// Custom Components
import DialogLoanApply from ".././DialogLoanApply"
import LoanApplyDialog from ".././LoanApplyDialog"


const useStyles = makeStyles(theme => ({

	cardApply: {
		background: '#fff',
		borderRadius: '12px !important',
		minWidth: '300px',
		height: '100%',
	},
	card: {
		background: 'linear-gradient(45deg, #113050 10%, #184470 90%)',
		borderRadius: '12px !important',
		minWidth: '300px',
		height: '100%'
	},
	title: {
		fontWeight: 'bold !important',
		color: grey[600]
	},
	link: {
		textDecoration: 'none !important'
	}

}));

export default function CardLoanApply() {
	const classes = useStyles();

	const [openDialog, setOpenDialog] = useState(false);

	const handleDialogOpen = () => {
		setOpenDialog(true);
	};

	return (
		<div>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={12} md={6} >
					<Card className={classes.card} elevation={0}>
						<CardContent
							sx={{
								paddingX: { xs: '25px', sm: '25px', md: '30px' },
								paddingY: { xs: '20px', sm: '20px', md: '30px' },
								color: '#fff',
							}}>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
									<Avatar
										sx={{
											bgcolor: '#fff',
											color: 'rgba(0, 0, 0, 0.54)',
											width: { xs: 50, sm: 60, md: 60 },
											height: { xs: 50, sm: 60, md: 60 },
										}}>
										<SavingsOutlinedIcon sx={{ fontSize: { xs: 30, sm: 35, md: 35 } }} />
									</Avatar>
									<Box ml={2}>
										<Typography
											sx={{
												fontSize: { xs: 16, sm: 16, md: 18, },
												fontWeight: 700,

											}}>
											Monjae Steven Lugo
										</Typography>
										<Typography
											sx={{
												fontSize: { xs: 14, sm: 14, md: 18, },
												color: grey[400],
											}}>
											Total Savings
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'flex-end' }}>
									<Typography variant="overline">**** **** **2906</Typography>
								</Grid>
								<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
									<div>
										<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
											<Typography
												sx={{
													fontSize: { xs: 12, sm: 14, md: 16 }
												}}>
												Available Balance
											</Typography>
										</Box>

										<Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
											<Typography sx={{ marginTop: '2px', fontWeight: 'bold' }}>PHP</Typography>
											<Typography
												sx={{
													marginLeft: 1,
													fontWeight: 'bold',
													fontSize: { xs: 21, sm: 21, md: 21 }
												}}>
												2,000.00
											</Typography>
										</Box>
									</div>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Card className={classes.cardApply} elevation={0}>
						<CardContent sx={{
							paddingX: { xs: '25px', sm: '25px', md: '30px' },
							paddingY: { xs: '20px', sm: '20px', md: '30px' },
						}}>
							<Grid container>
								<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'flex-end' }}>
									<div>
										<Box mb={2}>
											<Typography
												sx={{
													fontSize: { xs: 16, sm: 16, md: 18 },
													fontWeight: 700,
													// color: grey[400],
													marginBottom: 1
												}}>
												Loan Application
											</Typography>
											<Typography
												sx={{
													fontSize: { xs: 12, sm: 12, md: 14 }
												}}>
												Submit a loan application without visiting the branch!
											</Typography>
										</Box>
										<Box>
											{/* <Button variant="contained" onClick={handleDialogOpen} sx={{ borderRadius: '25px' }}>
												<Typography variant='overline'
													sx={{
														marginX: 2,
														marginY: -0.5,
														letterSpacing: 1,
														textTransform: 'none'
													}}>
													Apply
												</Typography>
											</Button> */}
											<Link to="/loan_apply" className={classes.link}>
												<Button variant="contained" sx={{ borderRadius: '25px', boxShadow: 'none' }}>
													<Typography variant='overline'
														sx={{
															marginX: 2,
															marginY: -0.5,
															letterSpacing: 1,
															textTransform: 'none',
														}}>
														Apply
													</Typography>
												</Button>
											</Link>

											{/* Dialog/Modal */}
											{/* <DialogLoanApply openDialog={openDialog} setOpenDialog={setOpenDialog} /> */}
											<LoanApplyDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
										</Box>
									</div>
								</Grid>
								<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
									<Box
										component="img"
										sx={{
											width: { xs: 150, sm: 200, md: 200 },
										}}
										alt="Memba Logo"
										src={LoanSvg}
									/>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>

		</div>
	);
}