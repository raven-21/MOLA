import React from "react";
import { red } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";

import { Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import useStyles from "./useStyles";

export const FormAmount = ({ control, name, label, product }) => {
	const { classes } = useStyles();

	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, value },
				fieldState: { error },
			}) => (
				<div>
					<FormLabel htmlFor="amount">
						<Typography className={classes.formLabel} sx={{ fontSize: { xs: 12, sm: 12, md: 15 }, color: error ? red[700] : null }}>
							{label}
						</Typography>
					</FormLabel>
					<FormControl
						size="small"
						error={!!error}
						fullWidth>
						<NumberFormat
							id="amount"
							customInput={TextField}
							decimalScale={2}
							allowEmptyFormatting={false}
							fixedDecimalScale={true}
							thousandSeparator={true}
							error={!!error}
							onChange={onChange}
							value={value}
							placeholder="0.00"
							variant="outlined"
							size="small"
							InputProps={{
								readOnly: product ? false : true,
								sx: ({ fontSize: { xs: 13, sm: 13, md: 16 } }),
								startAdornment: (
									<InputAdornment position='start'>
										<Typography sx={{ sx: ({ fontSize: { xs: 13, sm: 13, md: 16 } }) }}> &#8369;</Typography>
									</InputAdornment>
								),
							}}
						/>
						<FormHelperText sx={{ fontSize: { xs: 11, sm: 11, md: 12 } }}>{error ? error.message : null}</FormHelperText>
					</FormControl>
				</div>
			)}
		/>
	)
}