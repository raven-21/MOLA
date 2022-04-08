import React, { useState } from "react";
//Theming
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import { grey } from "@mui/material/colors";
import useMediaQuery from '@mui/material/useMediaQuery';
//Material UI Components
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from "@mui/material/FormHelperText";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
//
import { useForm } from "react-hook-form";
//
import AddBoxIcon from '@mui/icons-material/AddBox';



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

export default function LoanApplyDialog(props) {
	const classes = useStyles();
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	const handleDialogClose = () => {
		props.setOpenDialog(false);
	}

	const [lessList, setLessList] = useState([{ particular: "", amount: "" }]);
	const handleLessAdd = () => {
		setLessList([...lessList, { particular: "", amount: "" }])
	}
	const handleLessRemove = (index) => {
		const list = [...lessList];
		list.splice(index, 1);
		setLessList(list);
	}

	const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<div>
			<Dialog fullScreen={fullScreen} open={props.openDialog} maxWidth="sm" fullWidth>
				<form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
					<DialogTitle sx={{ marginBottom: 1 }}>Application Form</DialogTitle>
					<DialogContent sx={{ paddingX: 4 }}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6} md={6} lg={6}>
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
							<Grid item xs={12} sm={6} md={6} lg={6}>
								<FormControl fullWidth margin="dense" size="small" required>
									<InputLabel>Interest Type</InputLabel>
									<Select defaultValue={''} label="Interest Type">
										<MenuItem value={'Diminishing'}>Diminishing</MenuItem>
										<MenuItem value={'w/o'}>Without Interesting</MenuItem>
										<MenuItem value={'w'}>With Interesting</MenuItem>
									</Select>
									<FormHelperText>{''}</FormHelperText>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={6} md={6} lg={6}>
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
							<Grid item xs={12} sm={6} md={6} lg={6}>
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
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12} md={12} lg={12}>
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
							<Grid item xs={12} sm={6} md={6} lg={6}>
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
							<Grid item xs={12} sm={6} md={6} lg={6}>
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
							<Grid item xs={12} sm={6} md={6} lg={6}>
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
							<Grid item xs={12} sm={6} md={6} lg={6}>
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
						</Grid>
						<br />
						<Divider />
						<br />
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<TextField
									variant="outlined"
									margin="dense"
									label="Charge (6%)"
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
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<TextField
									variant="outlined"
									margin="dense"
									label="Gross Proceeds"
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
						<Grid container spacing={2}>
							<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
								<Typography sx={{ fontWeight: '700', marginLeft: 1 }}>Less</Typography>
							</Grid>
							<Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
								<Button color="success" variant="contained" onClick={handleLessAdd}>Add</Button>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<TextField
									label="Loan Balance"
									variant="outlined"
									margin="dense"
									placeholder="0.00"
									size="small"
									fullWidth
									readOnly
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
						{lessList.map((singleLess, index) => (
							<Grid container spacing={2} key={index} mb={1}>
								<Grid item xs={5} sm={5} md={5} lg={5}>
									<TextField
										label="Particulars"
										variant="outlined"
										margin="dense"
										placeholder="ex. 'LT' "
										size="small"
										fullWidth
									/>
								</Grid>
								<Grid item xs={7} sm={7} md={7} lg={7}>
									<TextField
										label="Amount"
										variant="outlined"
										margin="dense"
										placeholder="0.00"
										size="small"
										type="number"
										fullWidth
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													&#8369;
												</InputAdornment>
											),
										}}
									/>
								</Grid>
							</Grid>
						))}

					</DialogContent>
					<DialogActions sx={{ padding: '20px', }}>
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
			</Dialog>
		</div>
	);
};