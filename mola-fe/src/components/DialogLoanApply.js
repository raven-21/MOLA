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
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";

const useStyles = makeStyles(theme => ({
	card: {
		backgroundColor: '#f1f2f3 !important',
	},
	cardContent: {
		padding: '16px !important'
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
	};

	//Loan Product
	const [product, setProduct] = useState('');
	const handleChangeProduct = (event) => {
		setProduct(event.target.value);
	};
	//Interest Type
	const [interestType, setInterestType] = useState('');
	const handleChangeInterest = (event) => {
		setInterestType(event.target.value);
	};
	//Purpose
	const [purpose, setPurpose] = useState('');
	const handleChangePurpose = (event) => {
		setPurpose(event.target.value);
	};
	//Class
	const [loanClass, setClass] = useState('');
	const handleChangeClass = (event) => {
		setClass(event.target.value);
	};
	//Terms
	const [term, setTerm] = useState('');
	const handleChangeTerm = (event) => {
		setTerm(event.target.value);
	};

	return (
		<Dialog fullScreen={fullScreen} open={props.openDialog} maxWidth="lg" fullWidth>
			<DialogTitle>Loan Application</DialogTitle>
			<DialogContent>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={12} md={7} lg={7}>
						<Typography className={classes.text} sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Application Form</Typography>
						<br />
						<Grid container spacing={2} direction={"row"}>
							<Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%' }}>
								<FormControl fullWidth margin="dense" size="small">
									<InputLabel>Loan Product</InputLabel>
									<Select value={product} label="Loan Product" onChange={handleChangeProduct} autoFocus>
										<MenuItem value={'LT'}>Long Term</MenuItem>
										<MenuItem value={'ST'}>Short Term</MenuItem>
										<MenuItem value={'SL'}>Special Loan</MenuItem>
									</Select>
									<FormHelperText>Select loan product</FormHelperText>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%' }}>
								<FormControl fullWidth margin="dense" size="small">
									<InputLabel>Interest Type</InputLabel>
									<Select value={interestType} label="Interest Type" onChange={handleChangeInterest}>
										<MenuItem value={'Diminishing'}>Diminishing</MenuItem>
										<MenuItem value={'w/o'}>Without Interest</MenuItem>
										<MenuItem value={'w'}>With Interest</MenuItem>
									</Select>
									<FormHelperText>Select Interest type</FormHelperText>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%' }}>
								<FormControl fullWidth margin="dense" size="small">
									<InputLabel>Purpose</InputLabel>
									<Select value={purpose} label="Purpose" onChange={handleChangePurpose}>
										<MenuItem value={10}>Not specified</MenuItem>
										<MenuItem value={20}>Education</MenuItem>
										<MenuItem value={30}>Housing</MenuItem>
									</Select>
									<FormHelperText>Select Purpose</FormHelperText>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%' }}>
								<FormControl fullWidth margin="dense" size="small">
									<InputLabel>Class</InputLabel>
									<Select value={loanClass} label="Class" onChange={handleChangeClass}>
										<MenuItem value={'New'}>New</MenuItem>
										<MenuItem value={'Reloan'}>Reloan</MenuItem>
									</Select>
									<FormHelperText>Classification</FormHelperText>
								</FormControl>
							</Grid>
						</Grid>
						<br />
						<Divider />
						<br />
						<Grid container spacing={2} direction={"row"}>
							<Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '50%' }}>
								<TextField
									helperText="You can loan up to	&#8369; 500,000.00"
									variant="outlined"
									margin="dense"
									label="Enter Loan Amount"
									placeholder="0"
									size="small"
									fullWidth
									required
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
									<InputLabel>Term (Mos)</InputLabel>
									<Select value={term} label="Term (Mos)" onChange={handleChangeTerm}>
										<MenuItem value={12}>12</MenuItem>
										<MenuItem value={24}>24</MenuItem>
										<MenuItem value={36}>36</MenuItem>
									</Select>
									<FormHelperText>Select Term</FormHelperText>
								</FormControl>
							</Grid>
							<Grid item xs={6} sm={3} md={3} lg={3} sx={{ width: '50%' }}>
								<TextField
									variant="outlined"
									margin="dense"
									label="Rate"
									size="small"
									fullWidth
									disabled
									InputProps={{
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
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={12} md={5} lg={5}>
						{/* Loan Computation */}
						<Typography className={classes.text} sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Loan Computation</Typography>
						<br />
						<Card className={classes.card} elevation={0}>
							<CardContent className={classes.cardContent}>
								<Grid container spacing={2}>
									<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
										<Typography className={classes.text} sx={{ fontSize: { xs: 13, sm: 14, md: 15 } }}>Loan Amount</Typography>
									</Grid>
									<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
										<Typography sx={{ fontSize: { xs: 14, sm: 16, md: 16 } }}>&#8369; 250,000.00</Typography>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
						<div>
							<Card elevation={0}>
								<CardContent className={classes.cardContent}>
									<Grid container spacing={2}>
										<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
											<Typography className={classes.text} sx={{ fontSize: { xs: 13, sm: 14, md: 15 } }}>Interest (AddOn)</Typography>
										</Grid>
										<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
											<Typography sx={{ fontSize: { xs: 14, sm: 16, md: 16 } }}>&#8369; 15,000.00</Typography>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
							<Card className={classes.card} elevation={0}>
								<CardContent className={classes.cardContent}>
									<Grid container spacing={2}>
										<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
											<Typography className={classes.text} sx={{ fontSize: { xs: 13, sm: 14, md: 15 }, fontWeight: 'bold' }}>Total Loan</Typography>
										</Grid>
										<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
											<Typography sx={{ fontSize: { xs: 14, sm: 16, md: 16 } }}>&#8369; 235,000.00</Typography>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
							<br />
							<br />
						</div>
						<Card elevation={0}>
							<CardContent className={classes.cardContent}>
								<Grid container spacing={2}>
									<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
										<Typography className={classes.text} sx={{ fontSize: { xs: 13, sm: 14, md: 15 } }}>Charges(6%)</Typography>
									</Grid>
									<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
										<Typography sx={{ fontSize: { xs: 14, sm: 16, md: 16 } }}>&#8369; 15,000.00</Typography>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
						<Card className={classes.card} elevation={0}>
							<CardContent className={classes.cardContent}>
								<Grid container spacing={2}>
									<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
										<Typography className={classes.text} sx={{ fontSize: { xs: 13, sm: 14, md: 15 }, fontWeight: 'bold' }}>Gross Proceeds</Typography>
									</Grid>
									<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
										<Typography sx={{ fontSize: { xs: 14, sm: 16, md: 16 } }}>&#8369; 235,000.00</Typography>
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
										<Typography className={classes.text} sx={{ fontSize: { xs: 13, sm: 14, md: 15 } }}>Loan Balance</Typography>
									</Grid>
									<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
										<Typography sx={{ fontSize: { xs: 14, sm: 16, md: 16 } }}>&#8369; 25,000.00</Typography>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
						<Card className={classes.card} elevation={0}>
							<CardContent className={classes.cardContent}>
								<Grid container spacing={2}>
									<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
										<Typography className={classes.text} sx={{ fontSize: { xs: 13, sm: 14, md: 15 } }}>PDI</Typography>
									</Grid>
									<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
										<Typography sx={{ fontSize: { xs: 14, sm: 16, md: 16 } }}>&#8369; 0.00</Typography>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
						<br />
						<Divider />
						<br />
						<Grid container spacing={2}>
							<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
								<Typography variant="h6" className={classes.text} sx={{ fontWeight: 'bold' }}>NET</Typography>
							</Grid>
							<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
								<Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}>&#8369; 210,000.00</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>


			</DialogContent>
			<DialogActions sx={{ padding: '20px' }}>
				<Button sx={{ borderRadius: '25px' }}>
					<Typography variant='overline' onClick={handleDialogClose}
						sx={{
							marginX: 2,
							marginY: -0.5,
							letterSpacing: 1,
							textTransform: 'none'
						}}>
						Cancel
					</Typography>
				</Button>
				<Button variant="contained" onClick={handleDialogClose} sx={{ borderRadius: '25px' }}>
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
		</Dialog >
	);
}
