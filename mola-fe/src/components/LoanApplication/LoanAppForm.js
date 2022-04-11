import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { makeStyles } from "@mui/styles";
import { grey, red } from "@mui/material/colors";
//Material UI
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from '@mui/material/FormLabel';
//react-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//Custom hooks
import useLoanApp from "../../hooks/useLoanApp";

const useStyles = makeStyles(theme => ({
	cardContent: {
		padding: '24px !important',
		[theme.breakpoints.down('sm')]: {
			padding: '15px 20px !important'
		},
		borderRadius: '7px !important',
	},
	textGrey: {
		color: grey[700]
	},
	formLabel: {
		fontWeight: '700 !important',
		color: 'grey[700] important',
		marginBottom: '1rem !important'
	}
}));



export default function LoanAppForm() {
	const classes = useStyles();

	const { loanProducts, loanPurposes, interestTypes, schema } = useLoanApp();

	const { register, handleSubmit, watch, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});

	const [productValue, setProductValue] = useState("");

	const handleChangeProduct = (e) => {
		const value = e.target.value;
		setProductValue(value)
	}

	const onSubmit = data => console.log(data)

	return (
		<div>
			<Box mb={3}>
				<Paper elevation={0} className={classes.cardContent} variant="outlined">
					<Typography
						className={classes.textGrey}
						sx={{
							fontWeight: 700,
							fontSize: { xs: 20, sm: 22, md: 22, lg: 24 },
							marginBottom: { xs: 1, sm: 1.5, md: 1.5, lg: 2 }
						}}>
						Loan Application Form
					</Typography>
					<Typography
						className={classes.textGrey}
						sx={{
							fontWeight: 500,
							fontSize: { xs: 12, sm: 14, md: 14, lg: 16 }
						}}>
						Some information here.
					</Typography>
				</Paper>
			</Box>
			<form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
				{/* Product */}
				<Box mb={2}>
					<Paper
						variant="outlined"
						className={classes.cardContent}
						sx={errors.product ? { borderColor: red[700] } : null}>
						<FormControl
							variant="standard"
							margin="dense"
							size="small"
							error={!!errors?.product}
							fullWidth >
							<FormLabel>
								<Typography
									className={classes.formLabel}
									sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' } }}>
									Choose your loan product
									<span style={{ color: red[700] }}> *</span>
								</Typography>
							</FormLabel>
							{loanProducts &&
								<RadioGroup>
									{loanProducts.map((loanProduct) => (
										<FormControlLabel
											{...register("product")}
											onChange={handleChangeProduct}
											key={loanProduct.id}
											value={loanProduct.product_code}
											control={<Radio size="small" />}
											label={
												<Typography
													sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '16px' } }}>
													{loanProduct.product_name}
												</Typography>}
										/>
									))}
								</RadioGroup>
							}
							<FormHelperText>{errors.product ? errors.product.message : null}</FormHelperText>
						</FormControl>
					</Paper>
				</Box>
				{/* Purpose */}
				<Box mb={2}>
					<Paper
						variant="outlined"
						className={classes.cardContent}
						sx={errors.purpose ? { borderColor: red[700] } : null}>
						<FormControl
							variant="standard"
							margin="dense"
							size="small"
							error={!!errors?.purpose}
							fullWidth >
							<FormLabel>
								<Typography
									className={classes.formLabel}
									sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' } }}>
									Purpose of your loan
									<span style={{ color: red[700] }}> *</span>
								</Typography>
							</FormLabel>
							{loanPurposes &&
								<RadioGroup>
									{loanPurposes.map((loanPurpose) => (
										<FormControlLabel
											{...register("purpose")}
											key={loanPurpose.id}
											value={loanPurpose.purpose}
											control={<Radio size="small" />}
											label={
												<Typography
													sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '16px' } }}>
													{loanPurpose.purpose}
												</Typography>}
										/>
									))}
								</RadioGroup>
							}
							<FormHelperText>{errors.purpose ? errors.purpose.message : null}</FormHelperText>
						</FormControl>
					</Paper>
				</Box>
				{/* Interest Type */}
				<Box mb={2}>
					<Paper
						variant="outlined"
						className={classes.cardContent}
						sx={errors.interestType ? { borderColor: red[700] } : null}>
						<FormControl
							variant="standard"
							margin="dense"
							size="small"
							error={!!errors?.interestType}
							fullWidth >
							<FormLabel>
								<Typography
									className={classes.formLabel}
									sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' } }}>
									Choose interest type
									<span style={{ color: red[700] }}> *</span>
								</Typography>
							</FormLabel>
							{interestTypes &&
								<RadioGroup>
									{interestTypes.filter((interestType) => {
										if (productValue === "") {
											return interestType
										}
										else if (productValue === 'LT') {
											return interestType.interest_type === 'Diminishing'
										}
										else {
											return interestType.interest_type !== 'Diminishing'
										}
									}).map((interestType) => (
										<FormControlLabel
											{...register("interestType")}
											key={interestType.id}
											value={interestType.interest_type}
											control={<Radio size="small" />}
											label={
												<Typography
													sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '16px' } }}>
													{interestType.interest_type}
												</Typography>}
										/>
									))}
								</RadioGroup>
							}
							<FormHelperText>{errors.interestType ? errors.interestType.message : null}</FormHelperText>
						</FormControl>
					</Paper>
				</Box>
				{/* Amount */}
				<Box mb={2}>
					<Paper
						variant="outlined"
						className={classes.cardContent}
						sx={errors.amount ? { borderColor: red[700] } : null}>
						<FormControl
							margin="dense"
							size="small"
							error={!!errors?.amount}
							fullWidth >
							<FormLabel>
								<Typography
									className={classes.formLabel}
									sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' } }}>
									Loan amount
									<span style={{ color: red[700] }}> *</span>
								</Typography>
							</FormLabel>
							<TextField
								{...register("amount")}
								helperText={errors.product ? "Please choose a loan product" : errors.amount ? errors.amount.message : null}
								error={!!errors?.amount}
								placeholder="Enter amount..."
								variant="standard"
								margin="dense"
								type="number"
								sx={{ width: { xs: '100%', md: '50%' } }}
								InputProps={{
									readOnly: watch("product") === null ? true : false,
									startAdornment: (
										<InputAdornment position='start'>
											<Typography sx={{ fontSize: 20 }}> &#8369;</Typography>
										</InputAdornment>
									),
								}}
							/>
						</FormControl>
					</Paper>
				</Box>
				<Button
					variant="contained"
					type="submit"
					sx={{ textTransform: 'none', borderRadius: '7px' }}>
					Submit
				</Button>
			</form>
		</div >
	);
}