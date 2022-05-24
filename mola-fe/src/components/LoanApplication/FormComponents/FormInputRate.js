import React, { useEffect, useState } from "react";
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
		else if (term >= 13 && term <= 24) {
			setRateValue(7);
			setValue("rate", rateValue);
		}
		else if (term >= 25 && term <= 36) {
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
							sx={{ width: { xs: '50%', sm: '25%', md: '25%' } }}>
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
					</Grid>
				</Grid>
			)}
		/>
	)
}