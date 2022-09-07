import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert';
//
import { grey, red } from "@mui/material/colors";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
//
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import useStyles from "./useStyles";
import Configs from "../../utils/Configs";
//
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';


const DialogApp = (props) => {
	const navigate = useNavigate();
	const { classes } = useStyles();
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
	const { API } = Configs();
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(false);

	const data = props.formValue;
	const products = props.loanProducts;
	const purposes = props.loanPurposes;

	const [productC, setProductC] = useState(null);
	const [purposeC, setPurposeC] = useState(null);

	useEffect(() => {
		if (products && data) {
			setProductC(products.find(item => item.id === data.product));
		}
		if (purposes && data) {
			setPurposeC(purposes.find(item => item.id === data.purpose));
		}
	}, [data]);

	const handleDialogClose = () => {
		props.setOpenDialog(false);
	}

	const handlePost = () => {
		setIsLoading(true);
		console.log(data)
		axios.post(API + 'loanApps/add_loan', data).then((response) => {
			setIsLoading(false);
			if (response.data.error) {
				swal({
					icon: "danger",
					title: "Opps! Something went wrong",
					text: "Please try it again later.",
					buttons: false,
					timer: 2000,
				});
			} else {
				swal({
					icon: "success",
					title: "Success!",
					text: "Loan application submitted.",
					buttons: false,
					timer: 2000,
				});
				setTimeout(() => {
					navigate('/home');
				}, 1500)
			}
		});
	}

	return (
		<div>
			{data &&
				<Dialog
					PaperProps={{ sx: { borderRadius: { xs: 0, sm: 0, md: '12px' } } }}
					fullScreen={fullScreen}
					open={props.openDialog}
					onClose={handleDialogClose}
					maxWidth="sm"
					fullWidth>
					<DialogTitle>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
						</Box>
					</DialogTitle>
					<DialogContent sx={{ padding: 4 }} className={fullScreen ? null : classes.scrollBar}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12} md={12}>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<PostAddRoundedIcon
										sx={{
											fontSize: { xs: '80px !important', sm: '80px !important', md: '90px !important' },
											color: '#57CBA7 !important'
										}}
									/>
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={12}>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} mt={-1}>
									<Typography
										sx={{
											fontSize: { xs: 25, sm: 25, md: 27 },
											fontWeight: 700,
											letterSpacing: 1
										}}>
										Loan Application
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<Typography
										sx={{
											fontSize: { xs: 11, sm: 11, md: 12 },
											fontWeight: 700,
											color: red[400],
											letterSpacing: 1,
											textAlign: 'center',
										}}>
										Note: <span style={{ fontWeight: 500, color: grey[400] }}>Once your application is submitted, it is</span> <span style={{ fontWeight: 600, color: grey[500], fontStyle: 'italic' }}>non-editable</span>
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<br /><br />
						<Grid container spacing={2} className={classes.dContainer}>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dLabel}>
									<Typography
										className={classes.label}
										sx={{
											fontSize: { xs: 12, sm: 12, md: 13, },
										}}>
										Loan Product
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										{productC ? productC.product_name : 'loading...'}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<Grid container spacing={2} className={classes.dContainer}>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dLabel}>
									<Typography
										className={classes.label}
										sx={{
											fontSize: { xs: 12, sm: 12, md: 13, },
										}}>
										Purpose
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14 },
											textAlign: 'right'
										}}>
										{purposeC ? purposeC.purpose : 'loading...'}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<Grid container spacing={2} className={classes.dContainer}>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dLabel}>
									<Typography
										className={classes.label}
										sx={{
											fontSize: { xs: 12, sm: 12, md: 13, },
										}}>
										Interest Type
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										{productC ? productC.interest_type : 'loading...'}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<Grid container spacing={2} className={classes.dContainer} mb={2}>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dLabel}>
									<Typography
										className={classes.label}
										sx={{
											fontSize: { xs: 12, sm: 12, md: 13, },
										}}>
										Loan Type
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										{data.loanType}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<Divider sx={{ opacity: 0.5 }} />
						<br />
						<Grid container spacing={2} className={classes.dContainer}>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dLabel}>
									<Typography
										className={classes.label}
										sx={{
											fontSize: { xs: 12, sm: 12, md: 13, },
										}}>
										Loan Amount
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										PHP {data.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<Grid container spacing={2} className={classes.dContainer}>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dLabel}>
									<Typography
										className={classes.label}
										sx={{
											fontSize: { xs: 12, sm: 12, md: 13, },
										}}>
										Terms
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										{data.term} Months
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<Grid container spacing={2} className={classes.dContainer}>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dLabel}>
									<Typography
										className={classes.label}
										sx={{
											fontSize: { xs: 12, sm: 12, md: 13, },
										}}>
										Interest Rate
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										{data.intRate} %
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<Grid container spacing={2} className={classes.dContainer} mb={2}>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dLabel}>
									<Typography
										className={classes.label}
										sx={{
											fontSize: { xs: 12, sm: 12, md: 13, },
										}}>
										Monthly Amort
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										PHP {data.amort.toLocaleString(undefined, { minimumFractionDigits: 2 })}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<Divider sx={{ opacity: 0.5 }} />
						<br />
						<Grid container spacing={2} className={classes.dContainer}>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dLabel}>
									<Typography
										className={classes.label}
										sx={{
											fontSize: { xs: 12, sm: 12, md: 13, },
										}}>
										Charges (6%)
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										PHP {data.charges.toLocaleString(undefined, { minimumFractionDigits: 2 })}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<Grid container spacing={2} className={classes.dContainer} mb={2}>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dLabel}>
									<Typography
										className={classes.gLabel}
										sx={{
											fontSize: { xs: 12, sm: 12, md: 13, },
										}}>
										Gross Proceeds
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.gValue}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										PHP {data.grossProceeds.toLocaleString(undefined, { minimumFractionDigits: 2 })}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						{data.product !== 1 &&
							<Grid container spacing={2} className={classes.dContainer} mt={2}>
								<Grid item xs={6} sm={6} md={6}>
									<Box className={classes.dLabel}>
										<Typography
											className={classes.label}
											sx={{
												fontSize: { xs: 12, sm: 12, md: 13, },
											}}>
											Interest (Add-on)
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={6} sm={6} md={6}>
									<Box className={classes.dValue}>
										<Typography
											className={classes.value}
											sx={{
												fontSize: { xs: 13, sm: 13, md: 14 }
											}}>
											PHP {data.addOn.toLocaleString(undefined, { minimumFractionDigits: 2 })}
										</Typography>
									</Box>
								</Grid>
							</Grid>
						}
						{data.product !== 1 &&
							<Grid container spacing={2} className={classes.dContainer} mb={2}>
								<Grid item xs={6} sm={6} md={6}>
									<Box className={classes.dLabel}>
										<Typography
											className={classes.gLabel}
											sx={{
												fontSize: { xs: 12, sm: 12, md: 13, },
											}}>
											Total Loan
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={6} sm={6} md={6}>
									<Box className={classes.dValue}>
										<Typography
											className={classes.gValue}
											sx={{
												fontSize: { xs: 13, sm: 13, md: 14 }
											}}>
											PHP {data.totalLoan.toLocaleString(undefined, { minimumFractionDigits: 2 })}
										</Typography>
									</Box>
								</Grid>
							</Grid>
						}
						<Divider sx={{ opacity: 0.5 }} />
						<br />
						<Grid container spacing={2} className={classes.dContainer}>
							<Grid item xs={12} sm={12} md={12}>
								<Box className={classes.dLabel}>
									<Typography
										className={classes.gLabel}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14, },
											textDecoration: 'underline'
										}}>
										LESS
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dLabel}>
									<Typography
										className={classes.label}
										sx={{
											fontSize: { xs: 12, sm: 12, md: 13, },
										}}>
										Loan Balance
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										PHP {data.lessBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<Grid container spacing={2} className={classes.dContainer} mb={2}>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dLabel}>
									<Typography
										className={classes.label}
										sx={{
											fontSize: { xs: 12, sm: 12, md: 13, },
										}}>
										Interest %
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										PHP {data.lessInterest.toLocaleString(undefined, { minimumFractionDigits: 2 })}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<Divider sx={{ opacity: 0.5 }} />
						<br />
						<Grid container spacing={2} className={classes.dContainer}>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dLabel}>
									<Typography
										className={classes.gLabel}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14, },
										}}>
										Net Proceeds
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.gValue}
										sx={{
											fontSize: { xs: 14, sm: 14, md: 17 },
											letterSpacing: 2
										}}>
										PHP {data.netProceeds.toLocaleString(undefined, { minimumFractionDigits: 2 })}
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleDialogClose} variant="text" color="inherit"
							sx={{
								borderRadius: '25px',
								boxShadow: 'none',
								bgcolor: '#E5E5E5'
							}}>
							<Typography variant='overline'
								sx={{
									marginX: 2,
									marginY: -0.5,
									letterSpacing: 1,
									textTransform: 'none',
									fontWeight: 700
								}}>
								Cancel
							</Typography>
						</Button>
						{!isLoading &&
							<Button onClick={handlePost} variant="contained" color="success"
								sx={{
									borderRadius: '25px',
									boxShadow: 'none',
								}}>
								<Typography variant='overline'
									sx={{
										marginX: 2,
										marginY: -0.5,
										letterSpacing: 1,
										textTransform: 'none',
										fontWeight: 700
									}}>
									Submit
								</Typography>
							</Button>
						}
						{isLoading &&
							<Button variant="contained" color="success"
								sx={{
									borderRadius: '25px',
									boxShadow: 'none',
								}}>
								<Typography variant='overline'
									sx={{
										marginX: 2,
										marginY: -0.5,
										letterSpacing: 1,
										textTransform: 'none',
										fontWeight: 700
									}}>
									Submitting...
								</Typography>
							</Button>
						}
					</DialogActions>
				</Dialog>
			}

		</div >
	);
}

export default DialogApp;