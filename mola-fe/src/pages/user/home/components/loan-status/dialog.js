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
import Paper from "@mui/material/Paper";
import CircularProgress from '@mui/material/CircularProgress';
//
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

//Custom components/hooks
import useStyles from "../../styles";
import useHome from "../../hooks/useHome";
//
import moment from "moment";
//
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import HourglassBottomRoundedIcon from '@mui/icons-material/HourglassBottomRounded';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FindInPageRoundedIcon from '@mui/icons-material/FindInPageRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';


const DialogStatus = (props) => {

	const { classes } = useStyles();
	const { handleUpdate, isLoading } = useHome();

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	const data = props.value;

	const handleDialogClose = () => {
		props.setOpenDialog(false);
	}

	const handleUpdateAppStatus = (id, appStatus, title) => {
		const newData = { 'id': id, 'appStatus': appStatus, 'title': title };

		handleUpdate(newData);
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
										<Avatar sx={{ background: 'linear-gradient(45deg, #7ba909 10%, #96c90a 90%)', width: { xs: 60, sm: 60, md: 80 }, height: { xs: 60, sm: 60, md: 80 }, }}>
											<FindInPageRoundedIcon sx={{ fontSize: { xs: 30, sm: 30, md: 40 } }} />
										</Avatar>
									}
									{data.app_status === 'Verified' &&
										<Avatar sx={{ background: 'linear-gradient(45deg, #7ba909 10%, #96c90a 90%)', width: { xs: 60, sm: 60, md: 80 }, height: { xs: 60, sm: 60, md: 80 }, }}>
											<FactCheckRoundedIcon sx={{ fontSize: { xs: 30, sm: 30, md: 35 } }} />
										</Avatar>
									}
									{data.app_status === 'For Approval' &&
										<Avatar sx={{ background: 'linear-gradient(45deg, #2268a4 10%, #4994d8 90%)', width: { xs: 60, sm: 60, md: 80 }, height: { xs: 60, sm: 60, md: 80 }, }}>
											<ManageSearchRoundedIcon sx={{ fontSize: { xs: 30, sm: 30, md: 35 } }} />
										</Avatar>
									}
									{data.app_status === 'Disapproved' &&
										<Avatar sx={{ bgcolor: red['A200'], width: { xs: 60, sm: 60, md: 80 }, height: { xs: 60, sm: 60, md: 80 }, }}>
											<ThumbDownAltRoundedIcon sx={{ fontSize: { xs: 20, sm: 20, md: 25 } }} />
										</Avatar>
									}
									{data.app_status === 'Cancelled' &&
										<Avatar sx={{ bgcolor: red['A200'], width: { xs: 60, sm: 60, md: 80 }, height: { xs: 60, sm: 60, md: 80 }, }}>
											<BlockRoundedIcon sx={{ fontSize: { xs: 20, sm: 20, md: 25 } }} />
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
											color: data.app_status === 'For Verification' || data.app_status === 'Verified' ? '#96c90a' : data.app_status === 'Disapproved' || data.app_status === 'Cancelled' ? red['A200'] : '#4994d8'
										}}>
										{data.app_status}
									</Typography>
								</Box>
								{data.app_status !== 'Disapproved' && data.app_status !== 'Cancelled' &&
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
												fontWeight: 500,
												letterSpacing: 1,
												color: grey[500]
											}}>
											For more info. Contact your admin.
										</Typography>
									</Box>
								}
								{data.app_status === 'Cancelled' &&
									<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: -1 }}>
										<InfoOutlinedIcon sx={{ fontSize: 14, color: grey[500] }} /> &nbsp;
										<Typography
											sx={{
												fontSize: { xs: 10, sm: 11, md: 12 },
												fontWeight: 500,
												letterSpacing: 1,
												color: grey[500]
											}}>
											Your loan request has been cancelled.
										</Typography>
									</Box>
								}
							</Grid>
						</Grid>
					</DialogTitle>
					<Divider sx={{ opacity: 0 }} />
					<DialogContent sx={{ padding: { xs: 3, sm: 3, md: 4 }, backgroundColor: '#F0F1F3' }} className={fullScreen ? null : classes.scrollBar}>
						{data.app_status === "For Verification" &&
							<>
								<Paper elevation={0} sx={{ padding: 2, borderRadius: '12px', boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' }}>
									<Grid container spacing={0} className={classes.dContainer}>
										<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex' }}>
											<Box mr={2} sx={{ display: 'flex', alignItems: 'center' }}>
												<InfoRoundedIcon color="secondary" sx={{ fontSize: { xs: 45, sm: 45, md: 50, } }} />
											</Box>
											<Box>
												<Typography mb={.5} sx={{ fontWeight: 700, fontSize: { xs: 14, sm: 14, md: 15 } }}>Important Notice:</Typography>
												<Typography sx={{ fontWeight: 500, fontSize: { xs: 12, sm: 12, md: 13 }, color: grey[500] }}>
													The <span style={{ fontStyle: 'italic', fontWeight: '700', }}>amount </span>
													and <span style={{ fontStyle: 'italic', fontWeight: '700', }}>term </span>
													may change upon verification. The verification process could take 3-5 business days.
												</Typography>
											</Box>
										</Grid>
									</Grid>
								</Paper>
								<br /><br />
							</>
						}

						<Grid container spacing={2} className={classes.dContainer}>
							<Grid item xs={12} sm={12} md={12}>
								<Box className={classes.dLabel} mb={2}>
									<Typography
										sx={{
											fontSize: { xs: 14, sm: 14, md: 16, },
											fontWeight: 700,
											color: '#96c90a'
										}}>
										Loan Request
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
										{moment(data.date_applied).format('MM/DD/YYYY')}
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
										Requested Amount
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
										PHP {data.initial_amount ? data.initial_amount.toLocaleString(undefined, { minimumFractionDigits: 2 }) : "0.00"}
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
										{data.initial_term} months
									</Typography>
								</Box>
							</Grid>
						</Grid>

						{data.app_status !== "For Verification" && data.app_status !== "Cancelled" ?
							(
								<>
									<br />
									<Divider sx={{ opacity: 0.5 }} />
									<br />
									<Grid container spacing={2} className={classes.dContainer}>
										<Grid item xs={12} sm={12} md={12}>
											<Box className={classes.dLabel} mb={2}>
												<Typography
													sx={{
														fontSize: { xs: 14, sm: 14, md: 16, },
														fontWeight: 700,
														color: '#4994d8'
													}}>
													Loan Verified
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
													{moment(data.date_applied).format('MM-DD-YYYY h:mm A')}
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
													PHP {data.loan_amount ? data.loan_amount.toLocaleString(undefined, { minimumFractionDigits: 2 }) : "0.00"}
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
													{data.term ? data.term : '-'} months
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
								</>
							)
							:
							("")
						}

					</DialogContent>
					<Divider sx={{ opacity: 0.5 }} />
					<DialogActions sx={{ padding: 2, }}>
						{data.app_status === 'Verified' &&
							<Button onClick={() => handleUpdateAppStatus(data.id, "For Approval", "Accept")} variant="contained" color="success"
								sx={{
									borderRadius: '25px',
									boxShadow: 'none',
									background: 'linear-gradient(45deg, #7ba909 10%, #96c90a 90%)',
								}}>
								<Typography variant='overline'
									sx={{
										marginX: 2,
										marginY: -0.5,
										letterSpacing: 1,
										textTransform: 'none',
										fontWeight: 700
									}}>
									Accept
								</Typography>
							</Button>
						}

						{data.app_status !== 'Disapproved' && data.app_status !== 'Cancelled' ?
							(
								<Button onClick={() => handleUpdateAppStatus(data.id, "Cancelled", "Cancel")} variant="text" color="inherit"
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
											fontWeight: 700,
										}}>
										Cancel Request
									</Typography>
								</Button>
							)
							:
							('')
						}

						{data.app_status === 'Disapproved' || data.app_status === 'Cancelled' ?
							(
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
											fontWeight: 700,
										}}>
										Close
									</Typography>
								</Button>
							)
							:
							('')

						}
					</DialogActions>
				</Dialog>
			}

		</div >
	);
}

export default DialogStatus;