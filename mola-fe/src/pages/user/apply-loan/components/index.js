import React, { useState } from 'react';

//MUI
import { grey, red } from "@mui/material/colors";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//MUI icons
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

//Hooks
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";

//Custom Hooks
import Configs from "../../../../utils/Configs";
import useFetchId from "../../../../hooks/useFetchId";
import useFetch from "../../../../hooks/useFetch";
import useSchema from "../hooks/useSchema";

//Custom Components
import { InputAmount } from './form/InputAmount';
import { InputPurpose } from './form/InputPurpose';
import { InputTerm } from './form/InputTerm';

export default function LoanForm() {

	const { API, userId: id } = Configs();
	const { data: user } = useFetchId(API + 'user/', id);
	const { data: loanPurposes } = useFetch(API + 'loanApps/loan_purposes');

	const { schema } = useSchema();
	const [isLoading, setIsLoading] = useState(false);

	const defaultValues = {
		memberId: id,
		purpose: 1,
		term: 3,
		amount: "",
		appStatus: 'For Verification',
		status: 'Inactive',
		dateApplied: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
	}

	const { reset, register, handleSubmit, control, formState: { errors } } = useForm({
		defaultValues: defaultValues,
		resolver: yupResolver(schema)
	});

	const onSubmit = (data) => {
		console.log(data)
		setIsLoading(prev => !prev)
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
				<Paper elevation={0} sx={{ paddingX: { xs: 4, sm: 7, md: 16 }, paddingY: { xs: 6, sm: 7, md: 12 }, borderRadius: '12px' }}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={12}>
							<Typography
								sx={{
									fontSize: { xs: 16, sm: 16, md: 21 },
									fontWeight: 700,
									color: grey[700],
								}}>
								Hi {user ? user[0].firstname : 'there'}! Let's get started with your application.
							</Typography>
							<br />
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<InputPurpose
								name="purpose"
								control={control}
								label="What is the purpose?"
								loanPurposes={loanPurposes}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<InputAmount
								name="amount"
								control={control}
								label="How much do you need?"
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<InputTerm
								name="term"
								control={control}
								label="Repayment period"
							/>
							<br /><br />
						</Grid>
						<Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<Button
								variant="contained"
								color="success"
								type="submit"
								size="large"
								fullWidth
								sx={{
									textTransform: 'none',
									borderRadius: '25px',
									boxShadow: 'none',
									background: 'linear-gradient(45deg, #7ba909 10%, #96c90a 90%)',
								}}>
								<Typography variant='overline'
									sx={{
										// marginLeft: 2,
										// marginRight: .5,
										// marginY: -0.1,
										letterSpacing: 1,
										textTransform: 'none',
										fontWeight: 600,
										display: 'flex',
										alignItems: 'center',
									}}>
									{!isLoading ? 'Submit Request' : 'Submitting...'}
								</Typography>
							</Button>
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<Button
								onClick={() => reset()}
								variant="outlined"
								color="default"
								size="large"
								fullWidth
								sx={{
									textTransform: 'none',
									borderRadius: '25px',
									boxShadow: 'none',
								}}>
								<Typography variant='overline'
									sx={{
										// marginX: 1,
										// marginY: -0.1,
										// letterSpacing: 1,
										textTransform: 'none',
										fontWeight: 600,
										display: 'flex',
										alignItems: 'center',
									}}>
									Reset
								</Typography>
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</form>
		</>
	)
}