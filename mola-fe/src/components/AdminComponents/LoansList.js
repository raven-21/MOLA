import React, { useState, useEffect } from "react";

import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
//MUI Components
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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
import MenuItem from '@mui/material/MenuItem';
//Mui icons
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
//Hooks
import moment from "moment";

//Custom Components
import LoanDialog from "./LoanDialog";


const useStyles = makeStyles(theme => ({
	paperLoan: {
		borderRadius: '8px !important',
		marginTop: 15,
	},
	cardAction: {
		borderRadius: '8px !important',
		padding: '18px 24px !important',
	},
	paperFlex: {
		display: 'flex',
		alignItems: 'center',
	},
}));

const LoansList = ({ loans, branches }) => {
	const classes = useStyles();
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.up('sm'));

	const loanStatus = [
		{ id: 1, status_name: 'For Verification' },
		{ id: 2, status_name: 'Verified' },
		{ id: 3, status_name: 'For Approval' },
		{ id: 4, status_name: 'Approved' },
		{ id: 5, status_name: 'Disapproved' },
	];

	const [search, setSearch] = useState("");
	const [branch, setBranch] = useState("All");
	const [status, setStatus] = useState("All");

	const [userData, setUserData] = useState(loans);
	const [filteredData, setFilteredData] = useState(loans);

	const handleFilter = () => {
		const lowerCased = search.toLowerCase();
		const result =
			userData
				.filter(item => item.branch === (branch === "All" ? item.branch : branch))
				.filter(item => item.app_status === (status === "All" ? item.app_status : status))
				.filter(item => item.lastname.toLowerCase().includes(lowerCased))
		setFilteredData(result);
	}

	useEffect(() => {
		handleFilter();
	}, [branch, status, search]);

	const [openDialog, setOpenDialog] = useState(false);
	const [value, setValue] = useState();

	const [newStatus, setNewStatus] = useState("");

	const handleDialogOpen = (value) => {
		setOpenDialog(true);
		setValue(value)
	}

	return (
		<div>
			<Grid container spacing={0} sx={{ minWidth: '320px' }}>
				<Grid item xs={6} sm={6} md={3} pr={{ xs: 1, sm: 2, md: 2 }}>
					<Paper
						elevation={0}
						className={classes.paperLoan}
						sx={{
							padding: 0,
						}}>
						<TextField
							defaultValue="All"
							select
							fullWidth
							size="small"
							// label="Status"
							onChange={(e) => setStatus(e.target.value)}
							SelectProps={{
								IconComponent: (props) => <KeyboardArrowDownRoundedIcon {...props} fontSize="small" />,
							}}
							// InputLabelProps={{ sx: { fontSize: 14 } }}
							sx={{
								"& fieldset": { border: 'none' },
							}}
							InputProps={{
								sx: { fontSize: 14, paddingY: .7 }
							}}>
							<MenuItem value="All">
								<em style={{ fontStyle: 'normal', fontSize: 14 }}>
									<span style={{ fontWeight: 700 }}>Status</span> (All)
								</em>
							</MenuItem>
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
					</Paper>
				</Grid>
				<Grid item xs={6} sm={6} md={3} pr={{ xs: 0, sm: 0, md: 2 }}>
					<Paper
						elevation={0}
						className={classes.paperLoan}
						sx={{
							padding: 0,
						}}>
						{branches &&
							<TextField
								defaultValue="All"
								select
								fullWidth
								size="small"
								// label="Branch"
								onChange={(e) => setBranch(e.target.value)}
								SelectProps={{
									IconComponent: (props) => <KeyboardArrowDownRoundedIcon {...props} fontSize="small" />,
								}}
								// InputLabelProps={{ sx: { fontSize: 14 } }}
								sx={{
									"& fieldset": { border: 'none' },
								}}
								InputProps={{
									sx: { fontSize: 14, paddingY: .7 }
								}}>
								<MenuItem value="All">
									<em style={{ fontStyle: 'normal', fontSize: 14 }}>
										<span style={{ fontWeight: 700 }}>Branch</span> (All)
									</em>
								</MenuItem>
								{branches.map((branch) => (
									<MenuItem
										key={branch.id}
										value={branch.branch}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14 },
										}}>
										{branch.branch}
									</MenuItem>
								))}
							</TextField>
						}
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Paper
						elevation={0}
						className={classes.paperLoan}
						sx={{
							padding: 0
						}}>
						<TextField
							// label="Search..."
							// placeholder="lastname... ex. Dela Cruz"
							// InputLabelProps={{ sx: { fontSize: 14 } }}
							fullWidth
							placeholder="Search last name..."
							size="small"
							onChange={(e) => setSearch(e.target.value)}
							InputProps={{
								startAdornment: <InputAdornment position="start"><SearchRoundedIcon sx={{ fontSize: 20 }} /></InputAdornment>,
								sx: { fontSize: 14, paddingX: 2, paddingY: .7 },

							}}
							sx={{
								"& fieldset": { border: 'none' },
							}}
						/>
					</Paper>
				</Grid>
			</Grid>
			{/* <Paper
				elevation={0}
				className={classes.paperLoan}
				sx={{
					padding: 2.5,
					minWidth: '280px',
				}}>
				<Grid container spacing={2}>
					<Grid item xs={6} sm={6} md={3} className={classes.paperFlex}>
						<SortRoundedIcon sx={{ marginRight: 2, fontSize: { xs: 22, sm: 20, md: 25 }, color: grey[600] }} />
						<TextField
							defaultValue="All"
							select
							fullWidth
							size="small"
							// label="Status"
							onChange={(e) => setStatus(e.target.value)}
							SelectProps={{
								IconComponent: (props) => <KeyboardArrowDownRoundedIcon {...props} fontSize="small" />,
							}}
							// InputLabelProps={{ sx: { fontSize: 14 } }}
							sx={{
								"& fieldset": { border: 'none' },
							}}
							InputProps={{
								sx: { fontSize: 14 }
							}}>
							<MenuItem value="All">
								<em style={{ fontStyle: 'normal', fontSize: 14 }}>
									<span style={{ fontWeight: 700 }}>Status</span> (All)
								</em>
							</MenuItem>
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
					</Grid>
					<Grid item xs={6} sm={6} md={3} className={classes.paperFlex}>
						{branches &&
							<TextField
								defaultValue="All"
								select
								fullWidth
								size="small"
								// label="Branch"
								onChange={(e) => setBranch(e.target.value)}
								SelectProps={{
									IconComponent: (props) => <KeyboardArrowDownRoundedIcon {...props} fontSize="small" />,
								}}
								// InputLabelProps={{ sx: { fontSize: 14 } }}
								InputProps={{
									sx: { fontSize: 14 }
								}}>
								<MenuItem value="All">
									<em style={{ fontStyle: 'normal', fontSize: 14 }}>
										<span style={{ fontWeight: 700 }}>Branch</span> (All)
									</em>
								</MenuItem>
								{branches.map((branch) => (
									<MenuItem
										key={branch.id}
										value={branch.branch}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 14 }
										}}>
										{branch.branch}
									</MenuItem>
								))}
							</TextField>
						}
					</Grid>
					<Grid item xs={12} sm={12} md={6} className={classes.paperFlex} sx={{ justifyContent: 'flex-end' }}>
						<TextField
							// label="Search..."
							// placeholder="lastname... ex. Dela Cruz"
							placeholder="Search last name..."
							size="small"
							onChange={(e) => setSearch(e.target.value)}
							InputProps={{
								startAdornment: <InputAdornment position="start"><SearchRoundedIcon sx={{ fontSize: 20 }} /></InputAdornment>,
								sx: { fontSize: 14 },

							}}
							sx={{ width: 400 }}
						// InputLabelProps={{ sx: { fontSize: 14 } }}
						// fullWidth
						/>
					</Grid>
				</Grid>
			</Paper > */}
			<Grid container spacing={1}>
				<Grid item sx={{ display: 'flex', alignItems: 'center' }}>
					<Box ml={1} mt={2} sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography sx={{ fontWeight: 600, color: grey[600], fontSize: { xs: 13, sm: 13, md: 14 } }}>
							List of Loans
						</Typography>
						<Typography sx={{ fontWeight: 600, color: grey[500], fontSize: { xs: 13, sm: 13, md: 14 } }}>
							&nbsp;({filteredData.length})
						</Typography>
					</Box>
				</Grid>
			</Grid>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={12} md={12}>
					{filteredData.length > 0 ?
						(
							<>
								{filteredData.map((value) => (
									<Paper
										elevation={0}
										className={classes.paperLoan}
										key={value.id}
										sx={{
											minWidth: '320px',
										}}>
										<CardActionArea className={classes.cardAction} onClick={() => handleDialogOpen(value)}>
											<Grid container spacing={1}>
												<Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
													<Avatar sx={{ bgcolor: '#' + value.prof_color, width: 35, height: 35, fontSize: 14, fontWeight: 'bold' }}>
														{value.firstname.charAt(0)}
													</Avatar>
													<Box sx={{ marginLeft: 2 }}>
														<Typography sx={{ fontSize: 14, fontWeight: 700, color: '#184470' }}>
															{value.firstname + ' ' + value.middlename.charAt(0) + '. ' + value.lastname} {value.suffix ? value.suffix : ""}
														</Typography>
														<Typography sx={{ fontSize: { xs: 11, sm: 11, md: 12 }, fontWeight: 600, color: grey[400] }}>
															{'Memba-' + value.branch_code} &nbsp;|&nbsp; {'ID No: ' + value.employee_id}
														</Typography>
													</Box>

												</Grid>
												<Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
													<Chip label={value.app_status} variant="outlined" />
												</Grid>
											</Grid>
											<br />
											<Divider sx={{ opacity: 0.5 }} />
											<br />
											<Grid container spacing={{ xs: 0, sm: 1, md: 1 }}>
												<Grid item sx={{ display: 'flex', alignItems: 'center' }}>
													<Typography variant='overline'
														sx={{
															marginX: 1,
															marginY: -0.5,
															letterSpacing: .5,
															textTransform: 'none',
															fontWeight: 700,
															display: 'flex',
															alignItems: 'center',
															color: grey[500],
															fontSize: { xs: 11, sm: 12, md: 13 },
														}}>
														<SellOutlinedIcon fontSize="small" sx={{ marginRight: .8, fontSize: { xs: 14, sm: 14, md: 16 }, }} />
														{fullScreen ? value.product_name : value.product_code}
													</Typography>
												</Grid>
												<Grid item sx={{ display: 'flex', alignItems: 'center' }}>
													<Typography variant='overline'
														sx={{
															marginX: 1,
															marginY: -0.5,
															letterSpacing: .5,
															textTransform: 'none',
															// fontWeight: 600,
															display: 'flex',
															alignItems: 'center',
															color: grey[500],
															fontSize: { xs: 11, sm: 12, md: 13 },
														}}>
														<CreditCardOutlinedIcon fontSize="small" sx={{ marginRight: .8, fontSize: { xs: 14, sm: 14, md: 16 }, }} />
														&#8369; {value.loan_amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
													</Typography>
												</Grid>
												<Grid item sx={{ display: 'flex', alignItems: 'center' }}>
													<Typography variant='overline'
														sx={{
															marginX: 1,
															marginY: -0.5,
															letterSpacing: .5,
															textTransform: 'none',
															// fontWeight: 600,
															display: 'flex',
															alignItems: 'center',
															color: grey[500],
															fontSize: { xs: 11, sm: 12, md: 13 },
														}}>
														<CalendarMonthOutlinedIcon fontSize="small" sx={{ marginRight: .8, fontSize: { xs: 14, sm: 14, md: 16 }, }} />
														{moment(value.date_applied).fromNow()}
													</Typography>
												</Grid>
											</Grid>
										</CardActionArea>
									</Paper>
								))}
								<LoanDialog openDialog={openDialog} setOpenDialog={setOpenDialog} value={value} loans={loans} />
							</>
						)
						:
						(
							<>
								<Grid container spacing={2} mt={2}>
									<Grid item xs={12} sm={12} md={12} sx={{
										display: 'flex', alignItems: 'center', justifyContent: 'center'
									}}>
										<Typography>
											No data found.
										</Typography>
									</Grid>
								</Grid>
							</>
						)
					}
				</Grid>
			</Grid>

		</div >
	);
}

export default LoansList;