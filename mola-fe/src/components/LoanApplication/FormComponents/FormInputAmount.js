import React from "react";
import { red } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import useStyles from "./useStyles";

export const FormInputAmount = ({ control, name, label, product }) => {
	const { classes } = useStyles();

	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, value },
				fieldState: { error },
			}) => (
				<Paper
					variant="outlined"
					className={classes.cardContent}
					sx={error ? { borderColor: red[700] } : null}>
					<FormLabel htmlFor="amount">
						<Typography
							className={classes.formLabel}
							sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' } }}>
							{label}
							<span style={{ color: red[700] }}> *</span>
						</Typography>
					</FormLabel>
					<FormControl
						margin="dense"
						size="small"
						error={!!error}
						fullWidth >


						<NumberFormat
							id="amount"
							customInput={TextField}
							decimalScale={2}
							allowEmptyFormatting={false}
							fixedDecimalScale={true}
							thousandSeparator={true}
							error={!!error}
							helperText={error ? error.message : null}
							onChange={onChange}
							value={value}
							placeholder="0.00"
							variant="standard"
							margin="dense"
							sx={{ width: { xs: '100%', md: '50%' } }}
							InputProps={{
								readOnly: product ? false : true,
								startAdornment: (
									<InputAdornment position='start'>
										<Typography sx={{ fontSize: 20 }}> &#8369;</Typography>
									</InputAdornment>
								),
							}}
						/>

					</FormControl>
				</Paper>
			)}
		/>
	)
}