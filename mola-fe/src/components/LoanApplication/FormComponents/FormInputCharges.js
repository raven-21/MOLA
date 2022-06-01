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

export const FormInputCharges = ({ control, name, label, amount, setValue }) => {
	const { classes } = useStyles();

	const [chargeValue, setChargeValue] = useState();

	useEffect(() => {
		const parsed = parseFloat(amount.replace(/,/g, ""));
		setChargeValue(parsed * 0.06);
		setValue("charges", chargeValue);

	}, [amount, chargeValue]);

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
							value={chargeValue}
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