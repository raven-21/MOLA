import React from "react";
import { useState } from "react";
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

import LoanSvg from "../assets/svg/undraw_online_payments_re_y8f2.svg";

const useStyles = makeStyles(theme => ({

	cardApply: {
		background: '#fff',
		borderRadius: '12px !important',
		minWidth: '300px',
		height: '100%',
	},
	title: {
		fontWeight: 'bold !important',
		color: grey[600]
	}

}));

export default function CardLoanApply() {
	const classes = useStyles();

	const [open, setOpen] = useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	//Loan Product
	const [product, setProduct] = useState('');
	const handleChangeProduct = (event) => {
		setProduct(event.target.value);
	};
	//Interest Type
	const [interestType, setInterestType] = useState('');
	const handleChange = (event) => {
		setInterestType(event.target.value);
	};

	return (
		<div>
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
									<Button variant="contained" onClick={handleClickOpen} sx={{ borderRadius: '25px' }}>
										<Typography variant='overline'
											sx={{
												marginX: 2,
												marginY: -0.5,
												letterSpacing: 1,
												textTransform: 'none'
											}}>
											Apply
										</Typography>
									</Button>

									<Dialog fullScreen={fullScreen} open={open} onClose={handleClose} maxWidth="md" fullWidth>
										<DialogTitle>Loan Application</DialogTitle>
										<DialogContent>
											<Grid container spacing={2} direction={"row"}>
												<Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%' }}>
													<FormControl fullWidth margin="dense" size="small">
														<InputLabel>Loan Product</InputLabel>
														<Select value={product} label="Loan Product" onChange={handleChangeProduct}>
															<MenuItem value={10}>Long Term</MenuItem>
															<MenuItem value={20}>Short Term</MenuItem>
															<MenuItem value={30}>Special Loan</MenuItem>
														</Select>
													</FormControl>
												</Grid>
												<Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%' }}>
													<FormControl fullWidth margin="dense" size="small">
														<InputLabel>Interest Type</InputLabel>
														<Select value={interestType} label="Interest Type" onChange={handleChange}>
															<MenuItem value={10}>Diminishing</MenuItem>
															<MenuItem value={20}>Without Interest</MenuItem>
															<MenuItem value={30}>With Interest</MenuItem>
														</Select>
													</FormControl>
												</Grid>
											</Grid>
											{/* <DialogContentText>
												Select your loan amount
											</DialogContentText>
											<Typography variant="overline">You can loan up to 200,000 Pesos</Typography>
											<TextField
												variant="outlined"
												margin="dense"
												label="Enter Loan Amount"
												type="number"
												size="small"
												fullWidth
												required
												autoFocus
											/> */}
										</DialogContent>
										<DialogActions sx={{ padding: '20px' }}>
											<Button onClick={handleClose} sx={{ borderRadius: '25px' }}>
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
											<Button variant="contained" onClick={handleClose} sx={{ borderRadius: '25px' }}>
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
									</Dialog>

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
		</div>
	);
}