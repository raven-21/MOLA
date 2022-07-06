import React, { useEffect, useState } from "react";
import { red } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";

import { Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import useStyles from "./useStyles";

export const FormInputAmort = ({ control, name, label, product, term, rate, total, setValue }) => {
	const { classes } = useStyles();
	const [amortValue, setAmortValue] = useState();

	useEffect(() => {
		const annualRate = (Number(rate) / 100) / 12;
		// const parsedAmount = parseFloat(total.replace(/,/g, ""));
		const terms = Math.pow(1 + annualRate, Number(term));
		const result = (0 * annualRate) / (terms - 1) + (total * annualRate) / (1 - 1 / terms);
		const diminishing = Number(result.toFixed(2));
		const winterest = Number((total / term).toFixed(2));
		// console.log(Number(result.toFixed(2)))
		if (product !== 'LT') {
			setAmortValue(winterest);
		}
		else {
			setAmortValue(diminishing);
		}
		setValue("amort", amortValue)
	}, [product, total, term, rate, amortValue])

	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, value },
				fieldState: { error },
			}) => (
				<div>
					<FormLabel>
						<Typography
							className={classes.formLabel}
							sx={{
								fontSize: { xs: '11px', sm: '12px', md: '12px', lg: '13px' },
							}}>
							{label}
						</Typography>
					</FormLabel>
					<FormControl
						margin="dense"
						size="small"
						error={!!error}
						fullWidth>
						<NumberFormat
							customInput={TextField}
							decimalScale={2}
							allowEmptyFormatting={false}
							fixedDecimalScale={true}
							thousandSeparator={true}
							error={!!error}
							onChange={onChange}
							value={amortValue}
							placeholder="0.00"
							variant="outlined"
							size="small"
							InputProps={{
								readOnly: true,
								startAdornment: (
									<InputAdornment position='start'>
										<Typography> &#8369;</Typography>
									</InputAdornment>
								),
							}}
						/>
						<FormHelperText className={classes.formText}>{error ? error.message : null}</FormHelperText>
					</FormControl>
				</div>
			)}
		/>
	)
}