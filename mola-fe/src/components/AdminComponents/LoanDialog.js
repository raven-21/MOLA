import React, { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';
//Hooks
import axios from "axios";
import swal from 'sweetalert';
import Configs from '../../utils/Configs';
import moment from "moment";

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
import Slide from '@mui/material/Slide';
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
//
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import useStyles from "./useStyles";
//
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FindReplaceRoundedIcon from '@mui/icons-material/FindReplaceRounded';
import { InputAdornment } from "@mui/material";


const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const LoanDialog = (props) => {

	const { classes } = useStyles();
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	const navigate = useNavigate();
	const { API } = Configs();

	const data = props.value;

	const [voucherNo, setVoucherNo] = useState(null);
	const [appStatus, setAppStatus] = useState("");
	const [voucherExist, setVoucherExist] = useState("");
	const [voucherBool, setVoucherBool] = useState(true);

	const [isLoading, setIsLoading] = useState(false);

	const handleDialogClose = () => {
		props.setOpenDialog(false);
		setVoucherNo(null);
		setAppStatus("");
	}

	const disableSave = (voucher) => {
		if (appStatus || voucherNo) {
			if (appStatus === 'Approved') {
				if (voucherNo || voucher) {
					return false;
				}
				else {
					return true;
				}
			} else {
				return false;
			}
		} else {
			return true;
		}
	}

	const handleVoucherExist = () => {
		const exist = props.loans.find(item => item.voucher_no === voucherNo);
		if (exist) {
			setVoucherExist("EXIST! This number is taken.");
			setVoucherBool(prev => !prev)
		} else {
			setVoucherExist("OK. Number not taken.");
			setVoucherBool(prev => prev)
		}
	}

	useEffect(() => {
		handleVoucherExist();
	}, [voucherNo])

	const handleSubmitUpdate = (id, voucher, app_status, term) => {

		var startdate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

		const newData = {
			'appStatus': appStatus ? appStatus : app_status,
			'voucherNo': voucherNo ? voucherNo : voucher,
			'status': appStatus === 'Approved' ? 'Active' : 'Inactive',
			'dateGrant': appStatus === 'Approved' ? startdate : null,
			'dateTerminate': appStatus === 'Approved' ? moment(startdate).add(term, 'months').format('YYYY-MM-DD HH:mm:ss') : null,
			'id': id,
		}
		setIsLoading(true);

		axios.patch(API + 'loanApps/update_loan', newData)
			.then((response) => {
				setIsLoading(false);
				props.setOpenDialog(prev => !prev);

				if (response.data.error) {
					swal({
						icon: "danger",
						title: "Opps! Something went wrong",
						text: "Please try again later.",
						buttons: false,
						timer: 2000,
					});
				} else {
					swal({
						icon: "success",
						title: "Success!",
						text: "Loan application updated.",
						buttons: false,
						timer: 1500,
					});
					setTimeout(() => {
						window.location.reload();
					}, 1000)
				}
			});
	}

	const loanStatus = [
		{ id: 1, status_name: 'For Verification' },
		{ id: 2, status_name: 'Verified' },
		{ id: 3, status_name: 'For Approval' },
		{ id: 4, status_name: 'Approved' },
		{ id: 5, status_name: 'Disapproved' },
	];

	return (
		<>
			{data &&
				<Dialog
					TransitionComponent={Transition}
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
						<Grid container spacing={4}>
							<Grid item xs={12} sm={2} md={2}>
								<Avatar sx={{ bgcolor: '#' + data.prof_color, width: 60, height: 60, fontSize: 30, fontWeight: 'bold' }}>
									{data.firstname.charAt(0)}
								</Avatar>
							</Grid>
							<Grid item xs={12} sm={10} md={10}>
								<Box>
									<Typography sx={{ fontSize: { xs: 16, sm: 16, md: 18 }, fontWeight: 700, color: '#184470' }}>
										{data.firstname + ' ' + data.middlename.charAt(0) + '. ' + data.lastname} {data.suffix ? data.suffix : ""}
									</Typography>
									<Typography sx={{ fontSize: { xs: 11, sm: 11, md: 12 }, fontWeight: 600, color: grey[400] }}>
										{'Memba-' + data.branch_code} &nbsp;|&nbsp; {'ID No: ' + data.employee_id}
									</Typography>
								</Box>
								<Grid container spacing={2}>
									<Grid item xs={6} sm={6} md={6}>
										<Box mt={4}>
											<Typography sx={{ fontSize: { xs: 12, sm: 12, md: 13 }, fontWeight: 600, marginBottom: { xs: .5, sm: .5, md: 1 } }}>
												Status
											</Typography>
											<TextField
												defaultValue={data.app_status}
												onChange={(e) => setAppStatus(e.target.value)}
												select
												fullWidth
												size="small"
												SelectProps={{
													IconComponent: (props) => <KeyboardArrowDownRoundedIcon {...props} fontSize="small" />,
												}}
												InputProps={{
													sx: { fontSize: 13, paddingY: .2, }
												}}>
												{loanStatus.map((item) => (
													<MenuItem
														key={item.id}
														value={item.status_name}
														sx={{
															fontSize: { xs: 13, sm: 13, md: 14 }
														}}>
														{item.status_name}
													</MenuItem>
												))}
											</TextField>
										</Box>
									</Grid>
									<Grid item xs={6} sm={6} md={6}>
										<Box mt={4}>
											<Typography sx={{ fontSize: { xs: 12, sm: 12, md: 13 }, fontWeight: 600, marginBottom: { xs: .5, sm: .5, md: 1 } }}>
												Voucher No.
											</Typography>
											<TextField
												placeholder='Unknown'
												defaultValue={data.voucher_no}
												onChange={(e) => setVoucherNo(e.target.value)}
												fullWidth
												size="small"
												InputProps={{
													sx: { fontSize: 13, paddingY: .2, },
													endAdornment: (
														<InputAdornment position="end">
															<IconButton fontSize="small" edge="end" onClick={handleVoucherExist}>
																<FindReplaceRoundedIcon fontSize="small" />
															</IconButton>
														</InputAdornment>
													),
												}} />
											{appStatus === 'Approved' && !voucherNo && !data.voucher_no ?
												<Typography sx={{ fontSize: 12, marginTop: .7, marginLeft: .7, color: red[700] }}>
													Required!
												</Typography>
												:
												null
											}
											{voucherNo ?
												<Typography sx={{ fontSize: 12, marginTop: .7, marginLeft: .7, color: red[700] }}>
													{voucherExist}
												</Typography>
												:
												""
											}

										</Box>
									</Grid>
								</Grid>
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
					<Divider sx={{ opacity: 0.5 }} />
					<DialogActions sx={{ padding: 2, }}>
						<Button onClick={handleDialogClose} variant="outlined" color="default"
							sx={{
								borderRadius: '25px',
								boxShadow: 'none',
								// bgcolor: '#E5E5E5'
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
						<Button onClick={() => handleSubmitUpdate(data.id, data.voucher_no, data.app_status, data.term)} variant="contained" color="secondary" disabled={disableSave(data.voucher_no)}
							sx={{
								borderRadius: '25px',
								boxShadow: 'none',
								// bgcolor: '#184470'
							}}>
							<Typography variant='overline'
								sx={{
									marginX: 2,
									marginY: -0.5,
									letterSpacing: 1,
									textTransform: 'none',
									fontWeight: 700,
									color: '#FFF'
								}}>
								{isLoading ? 'Saving...' : 'Save'}
							</Typography>
						</Button>
					</DialogActions>
				</Dialog>
			}
		</>
	);
}

export default LoanDialog;