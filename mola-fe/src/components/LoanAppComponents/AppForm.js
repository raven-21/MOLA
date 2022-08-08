import React, { useState, useEffect } from "react";
//Material UI
import { grey, red, blue, green } from "@mui/material/colors";
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

	const [selectProduct, setSelectProduct] = useState();

	const [openDialog, setOpenDialog] = useState(false);
	const [dataValue, setDataValue] = useState();

	const { schema } = useSchema(userLP, selectProduct);

	const defaultValues = {
		product: 0,
		purpose: 1,
		amount: "",
		term: 3
	}

	const { handleSubmit, reset, control, watch, setValue, formState: { errors } } = useForm({
		defaultValues: defaultValues,
		resolver: yupResolver(schema)
	});

	const handleClickReset = () => {
		// reset();
		window.location.reload();
	}

	const onSubmit = (data) => {
		console.log(data)
	}

	const handleDialogOpen = () => {
		setOpenDialog(true);
		setDataValue()
	}

	useEffect(() => {
		setSelectProduct(watch('product'));
	}, [watch('product')])

	return (
		<div>
			<Button onClick={() => handleDialogOpen()}>CLICK</Button>
			<DialogApp openDialog={openDialog} setOpenDialog={setOpenDialog} />

			<form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
				<Paper elevation={0} sx={{ paddingX: { xs: 4, sm: 7, md: 25 }, paddingY: { xs: 6, sm: 7, md: 12 }, borderRadius: '12px' }}>
					{user && loanProducts && loanPurposes && userLP ?
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
							<div>
								<SkeletonLoader />
								<br /><br />
								<SkeletonLoader />
							</div>
						)
					}

				</Paper>
			</form>
		</div >
	);
}
