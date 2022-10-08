import React from "react";
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
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
//
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import useStyles from "../../styles";
//
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import ContentPasteSearchRoundedIcon from '@mui/icons-material/ContentPasteSearchRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import ApprovalRoundedIcon from '@mui/icons-material/ApprovalRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';
import HourglassBottomRoundedIcon from '@mui/icons-material/HourglassBottomRounded';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


const DialogStatus = (props) => {

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
					<DialogTitle sx={{ paddingX: 3.5, paddingBottom: 4, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
						<IconButton onClick={handleDialogClose} size="small" sx={{ position: 'absolute', top: 10, right: 10 }}>
							<CloseRoundedIcon fontSize="small" />
						</IconButton>
						<Box mb={4} sx={{ display: 'flex', alignItems: 'center' }}>
							<Typography sx={{ fontWeight: 'bold', fontSize: 19 }}>
								{data.app_status === 'Approved' ? 'Loan Details' : 'Application Details'}
							</Typography>
						</Box>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12} md={12}>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									{data.app_status === 'For Verification' &&
										<Avatar sx={{ bgcolor: '#57CBA7', width: { xs: 60, sm: 60, md: 80 }, height: { xs: 60, sm: 60, md: 80 }, }}>
											<ContentPasteSearchRoundedIcon sx={{ fontSize: { xs: 25, sm: 25, md: 30 } }} />
										</Avatar>
									}
									{data.app_status === 'Verified' &&
										<Avatar sx={{ bgcolor: '#57CBA7', width: { xs: 60, sm: 60, md: 80 }, height: { xs: 60, sm: 60, md: 80 }, }}>
											<FactCheckRoundedIcon sx={{ fontSize: { xs: 30, sm: 30, md: 35 } }} />
										</Avatar>
									}
									{data.app_status === 'For Approval' &&
										<Avatar sx={{ bgcolor: '#74C0FC', width: { xs: 60, sm: 60, md: 80 }, height: { xs: 60, sm: 60, md: 80 }, }}>
											<ManageSearchRoundedIcon sx={{ fontSize: { xs: 30, sm: 30, md: 35 } }} />
										</Avatar>
									}
									{data.app_status === 'Disapproved' &&
										<Avatar sx={{ bgcolor: red['A200'], width: { xs: 60, sm: 60, md: 80 }, height: { xs: 60, sm: 60, md: 80 }, }}>
											<ThumbDownAltRoundedIcon sx={{ fontSize: { xs: 20, sm: 20, md: 25 } }} />
										</Avatar>
									}
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={12}>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: -.2 }}>
									<Typography
										sx={{
											fontSize: { xs: 11, sm: 11, md: 12 },
											fontWeight: 700,
											color: grey[400],
											letterSpacing: 1
										}}>
										Status
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: { xs: -1, sm: -1, md: -.5 } }}>
									<Typography
										sx={{
											fontSize: { xs: 20, sm: 20, md: 22 },
											fontWeight: 700,
											letterSpacing: .5,
											color: '#184470'
										}}>
										{data.app_status}
									</Typography>
								</Box>
								{data.app_status !== 'Disapproved' &&
									<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: -1 }}>
										<HourglassBottomRoundedIcon className={classes.rotateIcon} sx={{ fontSize: 13 }} /> &nbsp;
										<Typography
											sx={{
												fontSize: { xs: 11, sm: 11, md: 12 },
												fontWeight: 700,
												letterSpacing: 1
											}}>
											Processing...
										</Typography>
									</Box>
								}
								{data.app_status === 'Disapproved' &&
									<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: -1 }}>
										<InfoOutlinedIcon sx={{ fontSize: 14, color: grey[500] }} /> &nbsp;
										<Typography
											sx={{
												fontSize: { xs: 10, sm: 11, md: 12 },
												fontWeight: 600,
												letterSpacing: 1,
												color: grey[500]
											}}>
											For more info. Contact your admin.
										</Typography>
									</Box>
								}

							</Grid>
						</Grid>
					</DialogTitle>
					<Divider sx={{ opacity: 0 }} />
					<DialogContent sx={{ padding: 4, backgroundColor: '#F0F1F3' }} className={fullScreen ? null : classes.scrollBar}>
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
										{data.product_name ? data.product_name : '-'}
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
										Purpose of Loan
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
										{data.interest_type ? data.interest_type : '-'}
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
										{data.loan_type ? data.loan_type : '-'}
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
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										{data.date_applied}
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
										PHP {data.initial_amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
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
										{data.term ? data.term : '-'} Months
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
										{data.interest_rate ? data.interest_rate : '-'} %
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
										PHP {data.amort ? data.amort.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
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
										PHP {data.charges ? data.charges.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
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
										PHP {data.gross_proceeds ? data.gross_proceeds.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
									</Typography>
								</Box>
							</Grid>
						</Grid>
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
												fontSize: { xs: 13, sm: 13, md: 14 }
											}}>
											PHP {data.add_on ? data.add_on.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
										</Typography>
									</Box>
								</Grid>
							</Grid>
						}
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
										PHP {data.total_loan ? data.total_loan.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
									</Typography>
								</Box>
							</Grid>
						</Grid>
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
										PHP {data.less_loanbal ? data.less_loanbal.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
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
										PHP {data.less_interest ? data.less_interest.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
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
										PHP {data.net_proceeds ? data.net_proceeds.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</DialogContent>
					<Divider sx={{ opacity: 0.5 }} />
					<DialogActions sx={{ padding: 2, }}>
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