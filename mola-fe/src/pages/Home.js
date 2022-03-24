import React from "react";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import LoanSvg from "../assets/svg/undraw_online_payments_re_y8f2.svg";

import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

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
	card: {
		background: 'linear-gradient(45deg, #113050 10%, #184470 90%)',
		borderRadius: '12px !important',
		minWidth: '300px',
		height: '100%'
	},
	cardApply: {
		background: '#fff',
		borderRadius: '12px !important',
		minWidth: '300px',
		height: '100%'
	},
	cardLoan: {
		userSelect: 'none',
		background: '#fff',
		borderRadius: '12px !important',
		minWidth: '300px',
		height: '100%',
		cursor: 'pointer',
		transition: '0s !important',
		border: '1px solid #fff !important',
		"&:hover": {
			border: '1px solid #184470 !important',
			boxShadow: '0 0.25em 0 #184470 !important'
		},
		"&:active": {
			boxShadow: 'none !important',
			transform: 'translateY(4px)'
		},
	},
	title: {
		fontWeight: 'bold !important',
		color: grey[600]
	}

}));


export default function Home() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={6}>
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
														fontSize: { xs: 15, sm: 15, md: 18, },
														fontWeight: 700
													}}>
													Jeovanne Lugo
												</Typography>
												<Typography
													sx={{
														fontSize: { xs: 15, sm: 15, md: 18, }
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
															fontSize: { xs: 14, sm: 16, md: 18 },
															fontWeight: 700,
															color: grey[400],
															marginBottom: 1
														}}>
														Loan Application
													</Typography>
													<Typography
														sx={{
															fontSize: { xs: 10, sm: 12, md: 14 }
														}}>
														Submit an application for a loan without visiting the branch!
													</Typography>
												</Box>
												<Box>
													<Button variant="contained" sx={{ borderRadius: '25px' }}>
														<Typography variant='overline' sx={{ marginX: 2, marginY: -0.5, letterSpacing: 1, textTransform: 'none' }}>Apply</Typography>
													</Button>
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

					<Grid container my="15px" sx={{ display: 'flex', alignItems: 'center' }}>
						<Grid item xs={6} md={6} pl="20px">
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
								<Switch size="small" />
							</Paper>
						</Grid>
					</Grid>


					<Card className={classes.cardLoan} elevation={0}>
						<CardContent
							sx={{
								paddingX: { xs: '25px', sm: '25px', md: '30px' },
								paddingY: { xs: '20px', sm: '20px', md: '30px' },
								color: grey[600],
							}}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
									<Avatar
										sx={{
											bgcolor: '#fff',
											color: 'rgba(0, 0, 0, 0.54)',
											width: { xs: 50, sm: 60, md: 60 },
											height: { xs: 50, sm: 60, md: 60 },
											display: { xs: 'none', sm: 'none', md: 'flex', },
											marginRight: 2
										}}>
										<AttachMoneyOutlinedIcon sx={{ fontSize: { xs: 30, sm: 35, md: 35 } }} />
									</Avatar>
									<Box>
										<Typography
											sx={{
												fontSize: { xs: 15, sm: 15, md: 20, },
												fontWeight: 700
											}}>
											PHP 50,000.00
										</Typography>
										<Typography
											sx={{
												fontSize: { xs: 12, sm: 12, md: 18, }
											}}>
											Total Loan Amount
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'flex-end' }}>
									<Typography
										sx={{
											fontSize: { xs: 10, sm: 12, md: 14 }
										}}>
										Voucher NO. 117007
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
													marginLeft: 1,
													fontWeight: 'bold',
													fontSize: { xs: 21, sm: 21, md: 21 }
												}}>
												42,700.00
											</Typography>
										</Box>
									</div>
								</Grid>
							</Grid>
						</CardContent>
					</Card>

				</div>
			</Container >
		</div >
	);
}