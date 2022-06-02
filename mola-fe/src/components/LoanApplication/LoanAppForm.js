import React, { useEffect, useState } from "react";

//Material UI
import { red } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";

//react-hook-form
import { appendErrors, useForm } from "react-hook-form";
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
import { FormInputGross } from "./FormComponents/FormInputGross";
import { FormInputBal } from "./FormComponents/FormInputBal";
import { FormInputPdi } from "./FormComponents/FormInputPdi";
import { FormInputNet } from "./FormComponents/FormInputNet";
import { FormInputInterestType } from "./FormComponents/FormInputInterestType"
import { FormInputClass } from "./FormComponents/FormInputClass";

export default function LoanAppForm() {
	const { classes } = useStyles();
	const [productValue, setProductValue] = useState("");
	const [termValue, setTermValue] = useState("");

	const { loanProducts, loanPurposes, interestTypes, schema2 } = useLoanApp(productValue);

	const defaultValues = {
		amount: "",
		product: "",
		purpose: "",
		class: "",
		term: 3,
		rate: 6,
		amort: "",
		charges: "",
		gross: "",
		balance: "",
		pdi: "",
		net: ""
	}

	const { handleSubmit, reset, control, watch, setValue, formState: { errors } } = useForm({
		defaultValues: defaultValues,
		resolver: yupResolver(schema2)
	});

	const handleClickReset = () => {
		reset();
	}

	const watchProduct = watch("product");
	const watchTerm = watch("term");
	const watchAmount = watch("amount");
	const watchCharges = watch("charges");
	const watchRate = watch("rate");

	useEffect(() => {
		function setValueProduct() {
			// const productSelected = control._fields.product._f.value
			setProductValue(watchProduct)
		}
		setValueProduct();
	}, [watchProduct])

	useEffect(() => {
		setTermValue(watchTerm)
	}, [watchTerm])


	const onSubmit = data => console.log(data)

	return (
		<div>
			<Box mb={3}>
				<Paper elevation={0} className={classes.cardTitle} variant="outlined" sx={{ background: 'linear-gradient(45deg, #113050 10%, #184470 90%)' }}>
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
						Please fill the form below!
					</Typography>
				</Paper>
			</Box>
			<form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
				<div>
					{/* <Box mb={2}>
						<FormRadioProducts
							name="product"
							control={control}
							label="Choose a loan product"
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
							className={classes.cardContent}
							sx={errors.amount || errors.term ? { borderColor: red[700] } : null}>
							<FormLabel>
								<Typography
									className={classes.formLabel}
									sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' }, textDecoration: 'underline' }}>
									Loan Computation
								</Typography>
							</FormLabel>
							<br />
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
								label="Term"
								product={productValue}
							/>
							<br />
							<FormInputRate
								name="rate"
								control={control}
								label="Interest Rate"
								term={termValue}
								setValue={setValue}
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
							<br />
							<FormInputGross
								name="gross"
								control={control}
								label="Gross Proceeds"
							/>
							<br />
							<Divider />
							<br />
							<FormLabel>
								<Typography
									className={classes.formLabel}
									sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' }, textDecoration: 'underline' }}>
									Less
								</Typography>
							</FormLabel>
							<br />
							<FormInputBal
								name="balance"
								control={control}
								label="Loan Balance"
							/>
							<br />
							<FormInputPdi
								name="pdi"
								control={control}
								label="Interest %"
							/>
							<br />
							<Divider />
							<br />
							<FormInputNet
								name="net"
								control={control}
								label="Net Proceeds"
							/>
							<br />
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
					</Button> */}
				</div>

				<Paper
					variant="outlined"
					className={classes.cardContent}
					sx={errors.amount || errors.term ? { borderColor: red[700] } : { borderColor: '#FFF' }}>
					<Typography mb={{ xs: 1, sm: 1, md: 2 }} sx={{
						fontWeight: 700,
						fontSize: { xs: 16, sm: 16, md: 18 }
					}}>
						Loan Information
					</Typography>
					<br />
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={6}>
							<FormRadioProducts
								name="product"
								control={control}
								label="Choose a loan product"
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<FormRadioPurposes
								name="purpose"
								control={control}
								label="Loan Purpose"
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<FormInputInterestType
								name="type"
								control={control}
								label="Interest Type"
								product={watchProduct}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<FormInputClass
								name="class"
								control={control}
								label="Classification"
								product={watchProduct}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<Divider />
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<FormInputAmount
								name="amount"
								control={control}
								label="Enter loan amount"
								product={watchProduct}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<FormSelectTerm
								name="term"
								control={control}
								label="Term"
								product={productValue}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<FormInputRate
								name="rate"
								control={control}
								label="Interest Rate"
								term={termValue}
								setValue={setValue}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<FormInputAmort
								name="amort"
								control={control}
								label="Amort"
								amount={watchAmount}
								term={watchTerm}
								rate={watchRate}
								setValue={setValue}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<Divider />
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<FormInputCharges
								name="charges"
								control={control}
								label="Charges (6%)"
								amount={watchAmount}
								setValue={setValue}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<FormInputGross
								name="gross"
								control={control}
								label="Gross Proceeds"
								charges={watchCharges}
								amount={watchAmount}
								setValue={setValue}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<Divider />
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<Typography sx={{
								fontWeight: 800,
								fontSize: { xs: 15, sm: 15, md: 16 }
							}}>
								Less
							</Typography>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<FormInputBal
								name="balance"
								control={control}
								label="Loan Balance"
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<FormInputPdi
								name="pdi"
								control={control}
								label="Interest %"
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<Divider />
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<Typography sx={{
								fontWeight: 800,
								fontSize: { xs: 15, sm: 15, md: 16 }
							}}>
								Net
							</Typography>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<FormInputNet
								name="net"
								control={control}
								label="Net Proceeds"
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<Button
								variant="contained"
								type="submit"
								sx={{
									textTransform: 'none',
									borderRadius: '25px',
									boxShadow: 'none',
									width: '100%'
								}}>
								<Typography variant='overline'
									sx={{
										marginX: 2,
										marginY: -0.1,
										letterSpacing: 1,
										textTransform: 'none',
										fontWeight: 600
									}}>
									Submit
								</Typography>
							</Button>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<Button
								variant="outlined"
								onClick={() => handleClickReset()}
								sx={{
									textTransform: 'none',
									borderRadius: '25px',
									boxShadow: 'none',
									width: '100%'
								}}>
								<Typography variant='overline'
									sx={{
										marginX: 2,
										marginY: -0.1,
										letterSpacing: 1,
										textTransform: 'none',
										fontWeight: 600
									}}>
									Clear Form
								</Typography>
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</form>
		</div >
	);
}