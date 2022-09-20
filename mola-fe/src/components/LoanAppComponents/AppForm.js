import React, { useState, useEffect } from "react";
//Material UI
import { grey, red } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//Custom hooks
import Configs from "../../utils/Configs";
import useFetch from "../../hooks/useFetch";
import useFetchId from "../../hooks/useFetchId";
import useSchema from "./useSchema";
import useStyles from "./useStyles";
//react-hook-form / yup resolver
import { appendErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
//Custom form components
import { FormProduct } from "./FormProduct";
import { FormPurpose } from "./FormPurpose";
import { FormAmount } from "./FormAmount";
import { FormTerm } from "./FormTerm";
import SkeletonLoader from "../SkeletonLoader";
import DialogApp from "./DialogApp";
//MUI icons
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

export default function AppForm() {
	const { classes } = useStyles();

	const { API, userId: id } = Configs();
	const { data: user } = useFetchId(API + 'user/', id);
	const { data: userLP } = useFetchId(API + 'loanApps/selectProduct/', id);
	const { data: loanProducts } = useFetch(API + 'loanApps/loan_products');
	const { data: loanPurposes } = useFetch(API + 'loanApps/loan_purposes');
	const { data: count } = useFetchId(API + 'loanApps/product_count/', id);
	const { data: less } = useFetchId(API + 'loanApps/less/', id);

	const [selectProduct, setSelectProduct] = useState();
	const [openDialog, setOpenDialog] = useState(false);
	const [formValue, setFormValue] = useState();
	const [lessBy, setLessBy] = useState({});

	const { schema } = useSchema(userLP, selectProduct);

	const defaultValues = {
		memberId: id,
		product: 0,
		purpose: 1,
		amount: "",
		term: 3,
		loanType: '',
		intRate: 0,
		amort: 0,
		addOn: 0,
		totalLoan: 0,
		charges: 0,
		grossProceeds: 0,
		lessBalance: 0,
		lessInterest: 0,
		netProceeds: 0,
		outBal: 0,
		appStatus: 'For Verification',
		status: 'Inactive',
		dateApplied: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
	}

	const { handleSubmit, reset, control, watch, setValue, formState: { errors } } = useForm({
		defaultValues: defaultValues,
		resolver: yupResolver(schema)
	});

	const handleClickReset = () => {
		// reset();
		window.location.reload();
	}

	const watchProduct = watch('product');
	const watchTerm = watch('term');
	const watchAmount = watch('amount');
	const watchRate = watch('intRate');
	const watchAddon = watch('addOn');
	const watchTotal = watch('totalLoan');
	const watchCharges = watch('charges');
	const watchLessBal = watch('lessBalance');
	const watchLessInt = watch('lessInterest');
	const watchGross = watch('grossProceeds');

	useEffect(() => {
		setSelectProduct(prev => watchProduct);
	}, [watchProduct])

	const setLoanType = (product) => {
		if (product === 1) {
			return count[0].count_LT > 0 ? 'Reloan' : 'New';
		}
		if (product === 2) {
			return count[0].count_ST > 0 ? 'Reloan' : 'New';
		}
		if (product === 3) {
			return count[0].count_SL > 0 ? 'Reloan' : 'New';
		}
	}

	const setIntRate = (term) => {
		if (term >= 3 && term <= 12) {
			return 6;
		}
		if (term >= 13 && term <= 24) {
			return 7;
		}
		if (term >= 25 && term <= 36) {
			return 8;
		}
	}

	const setLessBal = () => {
		if (lessBy) {
			return lessBy.less_balance;
		}
	}

	const setLessInt = () => {
		if (lessBy) {
			return lessBy.less_interest;
		}
	}

	const setNet = (lessBal, lessInt, gross) => {
		let totalNet = gross - (lessBal + lessInt);
		return totalNet;
	}

	const setAddOn = (product, amount, rate) => {
		let addon = parseFloat(amount.replace(/,/g, "")) * (rate / 100);
		return product == 1 ? 0 : Number(addon.toFixed(2));
	}

	const setTotalLoan = (product, amount, addOn) => {
		let total = parseFloat(amount.replace(/,/g, "")) + addOn;
		return Number(total.toFixed(2));
	}

	const setAmort = (product, rate, term, total) => {
		const annualRate = (Number(rate) / 100) / 12;
		const terms = Math.pow(1 + annualRate, term);
		const result = (0 * annualRate) / (terms - 1) + (total * annualRate) / (1 - 1 / terms);
		const diminishing = Number(result.toFixed(2));
		const winterest = Number((total / term).toFixed(2));

		return product == 1 ? diminishing : winterest;
	}

	useEffect(() => {
		let product = Number(watchProduct);
		if (less && product) {
			setLessBy(less.find(item => item.product_id === product))
		}
	}, [watchProduct])

	useEffect(() => {
		if (lessBy) {
			setValue("lessBalance", setLessBal());
			setValue("lessInterest", setLessInt());
		} else {
			setValue("lessBalance", 0);
			setValue("lessInterest", 0);
		}
	}, [lessBy]);

	useEffect(() => {
		setValue("loanType", setLoanType(+watchProduct));
		setValue("intRate", setIntRate(+watchTerm));
	}, [watchProduct, watchTerm])

	useEffect(() => {
		setValue("addOn", setAddOn(+watchProduct, watchAmount, watchRate));
		setValue("charges", parseFloat(watchAmount.replace(/,/g, "") * 0.06));
	}, [watchAmount, watchRate, watchProduct])

	useEffect(() => {
		setValue("totalLoan", setTotalLoan(+watchProduct, watchAmount, watchAddon));
		setValue("outBal", setTotalLoan(+watchProduct, watchAmount, watchAddon));
	}, [watchAmount, watchAddon])

	useEffect(() => {
		setValue("amort", setAmort(+watchProduct, watchRate, +watchTerm, watchTotal))
	}, [watchTotal, watchTerm, watchRate])

	useEffect(() => {
		setValue("grossProceeds", parseFloat(watchAmount.replace(/,/g, "")) - watchCharges)
	}, [watchCharges])

	useEffect(() => {
		setValue("netProceeds", setNet(watchLessBal, watchLessInt, watchGross))
	}, [watchLessBal, watchLessInt, watchGross])

	const onSubmit = (data) => {
		// console.log(data)
		setOpenDialog(true);
		setFormValue(data)
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
				<Paper elevation={0} sx={{ paddingX: { xs: 4, sm: 7, md: 25 }, paddingY: { xs: 6, sm: 7, md: 12 }, borderRadius: '12px' }}>
					{user && loanProducts && loanPurposes && userLP && less ?
						(
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12} md={12}>
									<Typography
										sx={{
											fontSize: { xs: 16, sm: 16, md: 21 },
											fontWeight: 700
										}}>
										Hi {user ? user[0].firstname : 'there'}! Let's get started with your application.
									</Typography>
									<br />
								</Grid>

								<Grid item xs={12} sm={12} md={12}>
									<FormPurpose
										name="purpose"
										control={control}
										label="What is the purpose?"
										loanPurposes={loanPurposes}
									/>
									<br />
								</Grid>
								<Grid item xs={12} sm={12} md={12}>
									<FormProduct
										name="product"
										control={control}
										loanProducts={loanProducts}
										product={watch('product')}
									/>
									<br />
								</Grid>
								<Grid item xs={12} sm={12} md={6}>
									<FormAmount
										name="amount"
										control={control}
										label="How much do you need?"
										product={watch('product')}
									/>
									<br />
								</Grid>
								<Grid item xs={12} sm={12} md={6}>
									<FormTerm
										name="term"
										control={control}
										label="Repayment period"
										product={watch('product')}
									/>
									<br /><br />
								</Grid>

								<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<Button
										variant="contained"
										color="success"
										type="submit"
										disabled={watch('product') && watch('amount') && watch('term') ? false : true}
										sx={{
											textTransform: 'none',
											borderRadius: '25px',
											boxShadow: 'none',
										}}>
										<Typography variant='overline'
											sx={{
												marginLeft: 2,
												marginRight: .5,
												marginY: -0.1,
												letterSpacing: 1,
												textTransform: 'none',
												fontWeight: 600,
												display: 'flex',
												alignItems: 'center'
											}}>
											Continue <ChevronRightRoundedIcon />
										</Typography>

									</Button>
								</Grid>
							</Grid>
						)
						:
						(
							<>
								<SkeletonLoader />
								<br /><br />
								<Grid container spacing={2}>
									<Grid item xs={6} sm={6} md={4}><SkeletonLoader /></Grid>
									<Grid item xs={6} sm={6} md={4}><SkeletonLoader /></Grid>
									<Grid item xs={6} sm={6} md={4}><SkeletonLoader /></Grid>
								</Grid>
								<br /><br />
								<SkeletonLoader />
							</>
						)
					}
					<DialogApp
						openDialog={openDialog}
						setOpenDialog={setOpenDialog}
						formValue={formValue}
						loanProducts={loanProducts}
						loanPurposes={loanPurposes} />
				</Paper>
			</form>
		</div >
	);
}
