import React from "react";
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

export const FormInputBal = ({ control, name, label }) => {
	const { classes } = useStyles();

	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, value },
				fieldState: { error },
			}) => (
				<Grid container spacing={1}>
					<Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
						<FormLabel>
							<Typography
								sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '16px' } }}>
								{label}
							</Typography>
						</FormLabel>
					</Grid>
					<Grid item xs={12} sm={12} md={8} lg={8} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
						<FormControl
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
								value={value}
								placeholder="0.00"
								variant="outlined"
								size="small"
								sx={{ width: { xs: '100%', sm: '50%', md: '50%' } }}
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
					</Grid>
				</Grid>
			)}
		/>
	)
}