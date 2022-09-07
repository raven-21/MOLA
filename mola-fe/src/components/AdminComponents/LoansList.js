import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
//MUI Components
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//Mui icons
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
//Hooks
import Configs from '../../utils/Configs';
import useFetchId from '../../hooks/useFetchId';
import moment from "moment";

const useStyles = makeStyles(theme => ({
	paperLoan: {
		borderRadius: '8px !important',
		marginTop: 15,
	},
	cardAction: {
		borderRadius: '8px !important',
		padding: '15px !important',
	}
}));

const LoansList = ({ loans, branches }) => {
	const classes = useStyles();
	console.log(loans)
	return (
		<div>
			<Paper elevation={0} className={classes.paperLoan} sx={{ padding: 3 }}>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={6} md={6}>
						<TextField
							label="Search..."
							size="small"
							InputProps={{
								endAdornment: <InputAdornment position="end"><SearchRoundedIcon sx={{ fontSize: 20 }} /></InputAdornment>,
								sx: { fontSize: 14 }
							}}
							InputLabelProps={{ sx: { fontSize: 14 } }}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<TextField
							defaultValue="All"
							select
							fullWidth
							size="small"
							label="Status"
							InputLabelProps={{ sx: { fontSize: 14 } }}
							InputProps={{
								sx: { fontSize: 14 }
							}}>
							<MenuItem value="All" sx={{
								fontSize: { xs: 13, sm: 13, md: 14 }
							}}>
								All
							</MenuItem>
							<MenuItem value="For Verification" sx={{
								fontSize: { xs: 13, sm: 13, md: 14 }
							}}>
								For Verification
							</MenuItem>
							<MenuItem value="Verified" sx={{
								fontSize: { xs: 13, sm: 13, md: 14 }
							}}>
								Verified
							</MenuItem>
							<MenuItem value="For Approval" sx={{
								fontSize: { xs: 13, sm: 13, md: 14 }
							}}>
								For Approval
							</MenuItem>
							<MenuItem value="Approved" sx={{
								fontSize: { xs: 13, sm: 13, md: 14 }
							}}>
								Approved
							</MenuItem>
						</TextField>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						{branches &&
							<TextField
								defaultValue="All"
								select
								fullWidth
								size="small"
								label="Branches"
								InputLabelProps={{ sx: { fontSize: 14 } }}
								InputProps={{
									sx: { fontSize: 14 }
								}}>
								<MenuItem
									value="All"
									sx={{
										fontSize: { xs: 13, sm: 13, md: 14 }
									}}>
									All
								</MenuItem>
								{branches.map((branch) => (
									<MenuItem
										key={branch.id}
										value={branch.id}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										{branch.branch}
									</MenuItem>
								))}
							</TextField>
						}
					</Grid>
				</Grid>
			</Paper>
			{loans.length !== 0 ?
				(
					<div>
						{loans.map((loan) => (
							<Paper
								elevation={0}
								className={classes.paperLoan}
								key={loan.id}
								sx={{
									minWidth: '320px',
								}}>
								<CardActionArea className={classes.cardAction} >
									<Grid container spacing={1}>
										<Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
											<Avatar sx={{ bgcolor: '#' + loan.prof_color, width: 35, height: 35, fontSize: 14, fontWeight: 'bold' }}>
												{loan.firstname.charAt(0)}
											</Avatar>
											<Box sx={{ marginLeft: 2 }}>
												<Typography sx={{ fontSize: 14, fontWeight: 700 }}>
													{loan.firstname + ' ' + loan.middlename.charAt(0) + '. ' + loan.lastname}
												</Typography>
												<Typography sx={{ fontSize: 12, fontWeight: 600, color: grey[400] }}>
													{'Memba-' + loan.branch_code}
												</Typography>
											</Box>

										</Grid>
										<Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
											<Chip label={loan.app_status} variant="outlined" />
										</Grid>
									</Grid>
									<br />
									<Divider sx={{ opacity: 0.5 }} />
									<br />
									<Grid container spacing={1}>
										<Grid item sx={{ display: 'flex', alignItems: 'center' }}>
											<Typography variant='overline'
												sx={{
													marginX: 1,
													marginY: -0.5,
													letterSpacing: 1,
													textTransform: 'none',
													fontWeight: 600,
													display: 'flex',
													alignItems: 'center',
													color: grey[500],
												}}>
												<SellOutlinedIcon fontSize="small" sx={{ marginRight: .8 }} />
												{loan.product_name}
											</Typography>
										</Grid>
										<Grid item sx={{ display: 'flex', alignItems: 'center' }}>
											<Typography variant='overline'
												sx={{
													marginX: 1,
													marginY: -0.5,
													letterSpacing: 1,
													textTransform: 'none',
													fontWeight: 600,
													display: 'flex',
													alignItems: 'center',
													color: grey[500],
												}}>
												<CreditCardOutlinedIcon fontSize="small" sx={{ marginRight: .8 }} />
												Php {loan.loan_amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
											</Typography>
										</Grid>
										<Grid item sx={{ display: 'flex', alignItems: 'center' }}>
											<Typography variant='overline'
												sx={{
													marginX: 1,
													marginY: -0.5,
													letterSpacing: 1,
													textTransform: 'none',
													fontWeight: 600,
													display: 'flex',
													alignItems: 'center',
													color: grey[500],
												}}>
												<CalendarMonthOutlinedIcon fontSize="small" sx={{ marginRight: .8 }} />
												{moment(loan.date_applied).fromNow()}
											</Typography>
										</Grid>
									</Grid>
								</CardActionArea>
							</Paper>
						))}
					</div>
				)
				:
				(
					<div>
						No loans.
					</div>
				)
			}
		</div>
	);
}

export default LoansList;