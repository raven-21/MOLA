import React, { useEffect, useState } from "react";
import { red } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";

import { Controller } from "react-hook-form";
import useStyles from "./useStyles";

export const FormInputRate = ({ control, name, label, term, setValue }) => {
	const { classes } = useStyles();
	const [rateValue, setRateValue] = useState("");

	useEffect(() => {
		if (term >= 3 && term <= 12) {
			setRateValue(6);
			setValue("rate", rateValue);
		}
		if (term >= 13 && term <= 24) {
			setRateValue(7);
			setValue("rate", rateValue);
		}
		if (term >= 25 && term <= 36) {
			setRateValue(8);
			setValue("rate", rateValue);
		}
	}, [term, rateValue])


	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange },
				fieldState: { error }
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
						<TextField
							variant="outlined"
							placeholder="0"
							size="small"
							value={rateValue}
							onChange={onChange}
							InputProps={{
								readOnly: true,
								endAdornment: (
									<InputAdornment position='end'>
										%
									</InputAdornment>
								)
							}}
						/>
					</FormControl>
				</div>
			)}
		/>
	)
}