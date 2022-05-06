import React, { useEffect, useState } from "react";

//Material UI
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider"

//react-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//Custom hooks
import useLoanApp from "../../hooks/useLoanApp";
import useStyles from "./FormComponents/useStyles";

import { FormInputAmount } from "./FormComponents/FormInputAmount";
import { FormRadioProducts } from "./FormComponents/FormRadioProducts";
import { FormRadioPurposes } from "./FormComponents/FormRadioPurpose";
import { FormSelectTerm } from "./FormComponents/FormSelectTerm";
import { FormInputRate } from "./FormComponents/FormInputRate";
import { FormInputAmort } from "./FormComponents/FormInputAmort";
import { FormInputCharges } from "./FormComponents/FormInputCharges";

export default function LoanAppForm() {
	const { classes } = useStyles();
	const [productValue, setProductValue] = useState("");


	const { loanProducts, loanPurposes, interestTypes, schema2 } = useLoanApp(productValue);

	const defaultValues = {
		amount: "",
		product: "",
		purpose: "",
		term: 3,
		rate: "",
		amort: ""
	}

	const { handleSubmit, reset, control, watch } = useForm({
		defaultValues: defaultValues,
		resolver: yupResolver(schema2)
	});

	const handleClickReset = () => {
		reset();
	}

	const watchProduct = watch("product");

	useEffect(() => {
		function setValueProduct() {
			// const productSelected = control._fields.product._f.value
			setProductValue(watchProduct)
		}
		setValueProduct();
	}, [watchProduct])

	const onSubmit = data => console.log(data)

	return (
		<div>
			<Box mb={3}>
				<Paper elevation={0} className={classes.cardContent} variant="outlined" sx={{ background: 'linear-gradient(45deg, #113050 10%, #184470 90%)' }}>
					<Typography
						sx={{
							fontWeight: 700,
							fontSize: { xs: 20, sm: 22, md: 22, lg: 24 },
							marginBottom: { xs: 0, sm: 0, md: .5, lg: .5 },
							color: '#FFF'
						}}>
						Loan Application Form
					</Typography>
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: { xs: 10, sm: 14, md: 14, lg: 16 },
							color: '#FFF'
						}}>
						Please fill all the required fields
					</Typography>
				</Paper>
			</Box>
			<form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
				<div>
					{/* <Box mb={2}>
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
												{...register("product", {
													onChange: (e) => { handleChangeProduct(e) }
												})}
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

					<Box mb={2}>
						<Paper
							variant="outlined"
							className={classes.cardContent}
							sx={errors.purpose ? { borderColor: red[700] } : null}>
							<FormControl
								variant="standard"
								margin="dense"
								error={!!errors?.purpose}>
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
					</Box> */}
				</div>

				<Box mb={2}>
					<FormRadioProducts
						name="product"
						control={control}
						label="Choose your loan product"
					/>
				</Box>
				<Box mb={2}>
					<FormRadioPurposes
						name="purpose"
						control={control}
						label="Purpose of loan"
					/>
				</Box>

				<Box mb={2}>
					<Paper
						variant="outlined"
						className={classes.cardContent}>
						<FormInputAmount
							name="amount"
							control={control}
							label="Loan Amount"
							product={productValue}
						/>
						<br />
						<FormSelectTerm
							name="term"
							control={control}
							label="Term (Months)"
							product={productValue}
						/>
						<br />
						<FormInputRate
							name="rate"
							control={control}
							label="Interest Rate"
						/>
						<br />
						<FormInputAmort
							name="amort"
							control={control}
							label="Amort"
						/>
						<br />
						<Divider />
						<br />
						<FormInputCharges
							name="charges"
							control={control}
							label="Charges (6%)"
						/>
					</Paper>
				</Box>

				<Button
					variant="contained"
					type="submit"
					sx={{ textTransform: 'none', borderRadius: '6px' }}>
					Submit
				</Button>
				&nbsp;
				<Button
					variant="inherit"
					onClick={() => handleClickReset()}
					sx={{ textTransform: 'none', borderRadius: '5px' }}>
					Reset
				</Button>
			</form>
		</div >
	);
}