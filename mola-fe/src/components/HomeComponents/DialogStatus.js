import React, { useState } from "react";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
//
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
//
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import ContentPasteSearchRoundedIcon from '@mui/icons-material/ContentPasteSearchRounded';
import ApprovalRoundedIcon from '@mui/icons-material/ApprovalRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const useStyles = makeStyles(theme => ({
	rotateIcon: {
		animation: "$spin 2s linear infinite"
	},
	"@keyframes spin": {
		"0%": {
			transform: "rotate(360deg)"
		},
		"100%": {
			transform: "rotate(0deg)"
		}
	},
	label: {
		fontWeight: 600 + '!important',
		color: grey[400],
		letterSpacing: 1,
	},
	value: {
		fontWeight: 600 + '!important',
		color: grey[600],
		letterSpacing: 0.6,
	},
	gValue: {
		fontWeight: 700 + '!important',
		color: grey[900],
		letterSpacing: 1,
	},
	dContainer: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 5
	},
	dLabel: {
		display: 'flex',
		aligntItems: 'center',
		justifyContent: 'flex-start'
	},
	dValue: {
		display: 'flex',
		aligntItems: 'center',
		justifyContent: 'flex-end'
	}
}));

const DialogStatus = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	const handleDialogClose = () => {
		props.setOpenDialog(false);
	}

	const data = props.value;

	return (
		<div>
			{data &&
				<Dialog
					fullScreen={fullScreen}
					open={props.openDialog}
					onClose={handleDialogClose}
					maxWidth="xs"
					fullWidth>
					{/* <DialogTitle sx={{ bgcolor: '#184470 !important', color: '#FFF', padding: 1 }}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<ArrowBackRoundedIcon fontSize="medium" sx={{ cursor: 'pointer' }} onClick={handleDialogClose} />
							&nbsp;&nbsp;&nbsp;
							<Typography>Loan Information</Typography>
						</Box>
					</DialogTitle> */}
					<DialogContent sx={{ padding: 4 }}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12} md={12}>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									{
										data.app_status === 'For Verification' ?
											<ContentPasteSearchRoundedIcon
												sx={{
													fontSize: '80px !important',
													color: '#57CBA7 !important'
												}}
											/> :
											data.app_status === 'Verified' ?
												<TaskAltRoundedIcon
													sx={{
														fontSize: '80px !important',
														color: '#57CBA7 !important'
													}}
												/> :
												data.app_status === 'For Approval' ?
													<ManageSearchRoundedIcon
														sx={{
															fontSize: '80px !important',
															color: '#74C0FC !important'
														}}
													/> :
													<VerifiedRoundedIcon
														sx={{
															fontSize: '80px !important',
															color: '#74C0FC !important'
														}}
													/>
									}
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={12}>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} mb={-.7} mt={-1}>
									<Typography sx={{ fontSize: 12 }}>Status</Typography>
								</Box>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} mb={0}>
									<Typography sx={{ fontSize: 25, fontWeight: 'bolder', }}>
										{data.app_status}
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<LoopRoundedIcon fontSize="small" className={classes.rotateIcon} /> &nbsp;
									<Typography color="primary" sx={{ fontSize: 12, fontWeight: 'medium' }}>
										Processing...
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
											fontSize: { xs: 14, sm: 14, md: 15 }
										}}>
										{data.loan_product}
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
										Loan Purpose
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 14, sm: 14, md: 15 }
										}}>
										{data.loan_purpose}
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
											fontSize: { xs: 14, sm: 14, md: 15 }
										}}>
										{data.interest_type}
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
										Loan Type
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 14, sm: 14, md: 15 }
										}}>
										{data.classification}
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
										Date Applied
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 14, sm: 14, md: 15 }
										}}>
										{data.date_applied}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<br />
						<Divider />
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
											fontSize: { xs: 14, sm: 14, md: 15 }
										}}>
										PHP {data.loan_amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
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
											fontSize: { xs: 14, sm: 14, md: 15 }
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
											fontSize: { xs: 14, sm: 14, md: 15 }
										}}>
										{data.interest_rate} %
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
										Monthly Amort
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 14, sm: 14, md: 15 }
										}}>
										PHP {data.amort.toLocaleString(undefined, { minimumFractionDigits: 2 })}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<br />
						<Divider />
						<br />
						{data.add_on !== 0 &&
							<Grid container spacing={2} className={classes.dContainer}>
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
												fontSize: { xs: 14, sm: 14, md: 15 }
											}}>
											PHP {data.add_on.toLocaleString(undefined, { minimumFractionDigits: 2 })}
										</Typography>
									</Box>
								</Grid>
							</Grid>
						}
						<Grid container spacing={2} className={classes.dContainer}>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dLabel}>
									<Typography
										className={classes.label}
										sx={{
											fontSize: { xs: 12, sm: 12, md: 13, },
										}}>
										Charges
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 14, sm: 14, md: 15 }
										}}>
										PHP {data.charges.toLocaleString(undefined, { minimumFractionDigits: 2 })}
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
										Gross Proceeds
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.gValue}
										sx={{
											fontSize: { xs: 16, sm: 16, md: 18 }
										}}>
										PHP {data.gross_proceeds.toLocaleString(undefined, { minimumFractionDigits: 2 })}
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
								Close
							</Typography>
						</Button>
					</DialogActions>
				</Dialog>
			}

		</div >
	);
}

export default DialogStatus;