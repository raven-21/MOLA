import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import { useForm } from "react-hook-form";
import DoDisturbOnRoundedIcon from '@mui/icons-material/DoDisturbOnRounded';
//Custom Hooks
// import useLoanApplication from "../hooks/useLoanApplication";

const useStyles = makeStyles(theme => ({
	card: {
		backgroundColor: '#F0F1F3 !important',
	},
	cardContent: {
		padding: '10px !important'
	},
	text: {
		color: grey[600]
	}
}));

export default function DialogLoanApply(props) {
	const classes = useStyles();
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	const handleDialogClose = () => {
		props.setOpenDialog(false);
		reset();
	}

	const [comakerList, setComakerList] = useState([{ comaker: "" }]);
	const handleComakerAdd = () => {
		setComakerList([...comakerList, { service: "" }])
	}
	const handleComakerRemove = (index) => {
		const list = [...comakerList];
		list.splice(index, 1);
		setComakerList(list);
	}
	// const { loanAppValues, loanAppError, loanAppText, formErrors, elementRef, open, handleChange, handleSubmit, handleDialogClose } = useLoanApplication(props);

	const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();
	const watchProduct = watch("product");

	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<div>
			<Dialog fullScreen={fullScreen} open={props.openDialog} maxWidth="lg" fullWidth>
				<div style={{ overflowY: 'auto', height: '100%' }}>
					<form id="loan-app-form" onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
						<DialogTitle>Loan Application</DialogTitle>
						<DialogContent>
							<Grid container spacing={4}>
								<Grid item xs={12} sm={12} md={7} lg={7}>
									<Typography className={classes.text} sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Application Form</Typography>
									<br />
									<Grid container spacing={2} direction={"row"}>
										<Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%' }}>
											<FormControl fullWidth margin="dense" size="small" required error={!!errors?.product}>
												<InputLabel>Loan Product</InputLabel>
												<Select defaultValue={''} label="Loan Product" {...register("product", { required: "This field is required." })}>
													<MenuItem value={'LT'}>Long Term</MenuItem>
													<MenuItem value={'ST'}>Short Term</MenuItem>
													<MenuItem value={'SL'}>Special Loan</MenuItem>
												</Select>
												<FormHelperText>{errors.product ? errors.product.message : null}</FormHelperText>
											</FormControl>
										</Grid>
										<Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%' }}>
											<FormControl fullWidth margin="dense" size="small" required>
												<InputLabel>Interest Type</InputLabel>
												<Select defaultValue={''} label="Interest Type">
													<MenuItem value={'Diminishing'}>Diminishing</MenuItem>
													<MenuItem value={'w/o'}>Without Interest</MenuItem>
													<MenuItem value={'w'}>With Interest</MenuItem>
												</Select>
												<FormHelperText>{''}</FormHelperText>
											</FormControl>
										</Grid>
										<Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%' }}>
											<FormControl fullWidth margin="dense" size="small" required>
												<InputLabel>Purpose</InputLabel>
												<Select defaultValue={''} label="Purpose">
													<MenuItem value={'Not Specified'}>Not Specified</MenuItem>
													<MenuItem value={'Education'}>Education</MenuItem>
													<MenuItem value={'Housing'}>Housing</MenuItem>
												</Select>
												<FormHelperText>{''}</FormHelperText>
											</FormControl>
										</Grid>
										<Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%' }}>
											<FormControl fullWidth margin="dense" size="small">
												<InputLabel>Class</InputLabel>
												<Select label="Class" defaultValue="">
													<MenuItem value={'New'}>New</MenuItem>
													<MenuItem value={'Reloan'}>Reloan</MenuItem>
												</Select>
												<FormHelperText></FormHelperText>
											</FormControl>
										</Grid>
									</Grid>
									<br />
									<Divider />
									<br />
									<Grid container spacing={2} direction={"row"}>
										<Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%' }}>
											<TextField
												{...register("amount", {
													required: 'Please specify an amount!',
													min: {
														value: 3000,
														message: 'Minimum loan amount is 3,000!'
													},
													max: {
														value: 500000,
														message: 'Loan amount must not exceed'
													}
												})}
												helperText={errors.amount ? errors.amount.message : null}
												placeholder="0.00"
												variant="outlined"
												margin="dense"
												label="Enter Loan Amount"
												size="small"
												type="number"
												fullWidth
												required
												error={!!errors?.amount}
												InputProps={{
													startAdornment: (
														<InputAdornment position='start'>
															&#8369;
														</InputAdornment>
													),
												}}
											/>
										</Grid>
										<Grid item xs={6} sm={3} md={3} lg={3} sx={{ width: '50%' }}>
											<FormControl fullWidth margin="dense" size="small">
												<InputLabel>Term</InputLabel>
												<Select value={''} label="Term">
													<MenuItem value={12}>12</MenuItem>
													<MenuItem value={24}>24</MenuItem>
													<MenuItem value={36}>36</MenuItem>
												</Select>
												<FormHelperText>{''}</FormHelperText>
											</FormControl>
										</Grid>
										<Grid item xs={6} sm={3} md={3} lg={3} sx={{ width: '50%' }}>
											<TextField
												helperText=""
												variant="outlined"
												margin="dense"
												label="Rate"
												size="small"
												fullWidth
												InputProps={{
													readOnly: true,
													endAdornment: (
														<InputAdornment position='end'>
															%
														</InputAdornment>
													)
												}}
											/>
										</Grid>
										<Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%' }}>
											<TextField
												helperText="Effective Interest Rate"
												variant="outlined"
												margin="dense"
												label="EIR"
												placeholder="0.00"
												size="small"
												fullWidth
												InputProps={{
													readOnly: true,
													startAdornment: (
														<InputAdornment position='start'>
															&#8369;
														</InputAdornment>
													),
												}}
											/>
										</Grid>
										<Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%' }}>
											<TextField
												helperText="Monthly Amortization"
												variant="outlined"
												margin="dense"
												label="Amort"
												placeholder="0.00"
												size="small"
												fullWidth
												InputProps={{
													readOnly: true,
													startAdornment: (
														<InputAdornment position='start'>
															&#8369;
														</InputAdornment>
													),
												}}
											/>
										</Grid>
									</Grid>
									<br />
									<Divider />
									<br />
									<Grid sx={{ marginBottom: 1 }}>
										<Typography className={classes.text} sx={{ fontWeight: 'bold' }}>
											Comaker/s
										</Typography>
										<Typography variant="caption" sx={{ fontStyle: 'italic' }}>
											Please provide atleast 1 comaker
										</Typography>
									</Grid>
									<Grid container spacing={2} direction={"row"}>

										{comakerList.map((singleComaker, index) => (
											<Grid key={index} item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ display: 'flex', alignItems: 'center' }}>
												<TextField
													variant="outlined"
													margin="dense"
													size="small"
													label="Comaker's name"
													fullWidth />
												{comakerList.length > 1 && (
													<IconButton
														onClick={() => handleComakerRemove(index)}
														color="error"
														sx={{ marginLeft: 1 }}>
														<DoDisturbOnRoundedIcon fontSize="medium" />
													</IconButton>
												)}
											</Grid>
										))}

										<Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ display: 'flex', alignItems: 'center' }}>
											<Button variant="contained" onClick={handleComakerAdd}>
												Add comaker
											</Button>
										</Grid>
									</Grid>
									<br />
									<Divider sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }} />
								</Grid>

								<Grid item xs={12} sm={12} md={5} lg={5}>

									{/* Loan Computation */}
									<Typography className={classes.text} sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Loan Computation</Typography>
									<br />
									<Card className={classes.card} elevation={0}>
										<CardContent className={classes.cardContent}>
											<Grid container spacing={2}>
												<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
													<Typography className={classes.text} sx={{ fontSize: { xs: 13, sm: 14, md: 13 } }}>Loan Amount</Typography>
												</Grid>
												<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
													<Typography sx={{ fontSize: { xs: 13, sm: 14, md: 14 } }}>&#8369; 250,000.00</Typography>
												</Grid>
											</Grid>
										</CardContent>
									</Card>
									<div>
										<Card elevation={0}>
											<CardContent className={classes.cardContent}>
												<Grid container spacing={2}>
													<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
														<Typography className={classes.text} sx={{ fontSize: { xs: 13, sm: 14, md: 13 } }}>Interest (AddOn)</Typography>
													</Grid>
													<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
														<Typography sx={{ fontSize: { xs: 13, sm: 14, md: 14 } }}>&#8369; 15,000.00</Typography>
													</Grid>
												</Grid>
											</CardContent>
										</Card>
										<Card className={classes.card} elevation={0}>
											<CardContent className={classes.cardContent}>
												<Grid container spacing={2}>
													<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
														<Typography className={classes.text} sx={{ fontSize: { xs: 13, sm: 14, md: 14 }, fontWeight: 'bold' }}>Total Loan</Typography>
													</Grid>
													<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
														<Typography sx={{ fontSize: { xs: 13, sm: 14, md: 14 }, fontWeight: 'bold' }}>&#8369; 235,000.00</Typography>
													</Grid>
												</Grid>
											</CardContent>
										</Card>
										<br />
									</div>
									<Card elevation={0}>
										<CardContent className={classes.cardContent}>
											<Grid container spacing={2}>
												<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
													<Typography className={classes.text} sx={{ fontSize: { xs: 13, sm: 14, md: 13 } }}>Charges(6%)</Typography>
												</Grid>
												<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
													<Typography sx={{ fontSize: { xs: 13, sm: 14, md: 14 } }}>&#8369; 15,000.00</Typography>
												</Grid>
											</Grid>
										</CardContent>
									</Card>
									<Card className={classes.card} elevation={0}>
										<CardContent className={classes.cardContent}>
											<Grid container spacing={2}>
												<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
													<Typography className={classes.text} sx={{ fontSize: { xs: 13, sm: 14, md: 14 }, fontWeight: 'bold' }}>Gross Proceeds</Typography>
												</Grid>
												<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
													<Typography sx={{ fontSize: { xs: 13, sm: 14, md: 14 }, fontWeight: 'bold' }}>&#8369; 235,000.00</Typography>
												</Grid>
											</Grid>
										</CardContent>
									</Card>
									<br />
									<Typography className={classes.text} sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Less</Typography>
									<Card elevation={0}>
										<CardContent className={classes.cardContent}>
											<Grid container spacing={2}>
												<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
													<Typography className={classes.text} sx={{ fontSize: { xs: 13, sm: 14, md: 13 } }}>Loan Balance</Typography>
												</Grid>
												<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
													<Typography sx={{ fontSize: { xs: 13, sm: 14, md: 14 } }}>&#8369; 25,000.00</Typography>
												</Grid>
											</Grid>
										</CardContent>
									</Card>
									<Card className={classes.card} elevation={0}>
										<CardContent className={classes.cardContent}>
											<Grid container spacing={2}>
												<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
													<Typography className={classes.text} sx={{ fontSize: { xs: 13, sm: 14, md: 13 } }}>PDI</Typography>
												</Grid>
												<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
													<Typography sx={{ fontSize: { xs: 13, sm: 14, md: 14 } }}>&#8369; 0.00</Typography>
												</Grid>
											</Grid>
										</CardContent>
									</Card>
									<br />
									<Divider />
									<br />
									<Grid container spacing={2}>
										<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
											<Typography className={classes.text} sx={{ fontWeight: 'bold', fontSize: { xs: 14, sm: 16, md: 18 } }}>NET</Typography>
										</Grid>
										<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
											<Typography sx={{ fontSize: { xs: 14, sm: 16, md: 16 }, fontWeight: 'bold' }}>&#8369; 210,000.00</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</DialogContent>
						<DialogActions sx={{ padding: '20px' }}>
							<Button sx={{ borderRadius: '25px' }} onClick={handleDialogClose}>
								<Typography variant='overline'
									sx={{
										marginX: 2,
										marginY: -0.5,
										letterSpacing: 1,
										textTransform: 'none'
									}}>
									Cancel
								</Typography>
							</Button>
							<Button variant="contained" type="submit" sx={{ borderRadius: '25px' }}>
								<Typography variant='overline'
									sx={{
										marginX: 2,
										marginY: -0.5,
										letterSpacing: 1,
										textTransform: 'none'
									}}>
									Submit
								</Typography>
							</Button>
						</DialogActions>
					</form>
				</div>
			</Dialog >
		</div>
	);
}
