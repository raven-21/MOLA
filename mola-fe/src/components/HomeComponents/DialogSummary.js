import React from "react";
import { grey } from "@mui/material/colors";
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
import useStyles from "./useStyles";
//
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';


const DialogSummary = (props) => {
	const { classes } = useStyles();
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
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} mb={1}>
									{data.status === 'Completed' ?
										(<CreditScoreOutlinedIcon
											sx={{
												fontSize: { xs: '80px !important', sm: '80px !important', md: '90px !important' },
												color: '#74C0FC !important'
											}}
										/>)
										:
										(<CreditCardRoundedIcon
											sx={{
												fontSize: { xs: '80px !important', sm: '80px !important', md: '90px !important' },
												color: '#57CBA7 !important'
											}}
										/>)
									}

								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={12}>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} mb={-.5} mt={-2}>
									<Typography
										sx={{
											fontSize: { xs: 11, sm: 11, md: 12 },
											fontWeight: 700,
											color: grey[400],
											letterSpacing: 1
										}}>
										Outstanding Balance
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<Typography
										sx={{
											fontSize: { xs: 25, sm: 25, md: 27 },
											fontWeight: 700,
											letterSpacing: 1
										}}>
										PHP {data.outstanding_bal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
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
										Voucher No.
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<Box className={classes.dValue}>
									<Typography
										className={classes.value}
										sx={{
											fontSize: { xs: 14, sm: 14, md: 16 },
											color: '#74C0FC',
											letterSpacing: 2
										}}>
										{data.voucher_no}
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
										{data.product_name}
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
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										{data.purpose}
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
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										{data.loan_type}
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
										Date Granted
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
										{data.date_granted}
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
										Termination Date
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
										{data.termination_date}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<br />
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
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										PHP {data.amort.toLocaleString(undefined, { minimumFractionDigits: 2 })}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<br />
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
						<Grid container spacing={2} className={classes.dContainer}>
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
										PHP {data.gross_proceeds.toLocaleString(undefined, { minimumFractionDigits: 2 })}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						{data.add_on !== 0 &&
							<br />
						}
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
												fontSize: { xs: 13, sm: 13, md: 14 }
											}}>
											PHP {data.add_on.toLocaleString(undefined, { minimumFractionDigits: 2 })}
										</Typography>
									</Box>
								</Grid>
							</Grid>
						}
						{data.add_on !== 0 &&
							<Grid container spacing={2} className={classes.dContainer}>
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
											PHP {data.total_loan.toLocaleString(undefined, { minimumFractionDigits: 2 })}
										</Typography>
									</Box>
								</Grid>
							</Grid>
						}
						<br />
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
										PHP {data.less_loanbal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
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
										PHP {data.less_interest.toLocaleString(undefined, { minimumFractionDigits: 2 })}
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<br />
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
											fontSize: { xs: 14, sm: 14, md: 16 }
										}}>
										PHP {data.net_proceeds.toLocaleString(undefined, { minimumFractionDigits: 2 })}
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

export default DialogSummary;