import React, { useEffect, useState } from "react";
import { red } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import { Controller } from "react-hook-form";
import useStyles from "./useStyles";

export const FormSelectTerm = ({ control, name, label, product }) => {
	const { classes } = useStyles();

	const [productLoans, setProductLoans] = useState([]);

	const termRange = (min, max) => {
		let arr = [];
		for (let i = min; i <= max; i++)
			arr.push(i);
		return arr;
	}

	useEffect(() => {
		if (product === "ST") {
			setProductLoans(termRange(3, 12))
		}
		else {
			setProductLoans(termRange(3, 36))
		}
	}, [product])

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
						<FormLabel htmlFor="term">
							<Typography
								className={classes.formLabel}
								sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '16px' } }}>
								{label}
								<span style={{ color: red[700] }}> *</span>
							</Typography>
						</FormLabel>
					</Grid>
					<Grid item xs={12} sm={12} md={8} lg={8} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
						<FormControl
							size="small"
							error={!!error}
							sx={{ width: { xs: '100%', md: '50%' } }}>
							<TextField
								id="term"
								type="number"
								variant="outlined"
								size="small"
								placeholder="0"
								error={!!error}
								onChange={onChange}
								value={value} />
							<FormHelperText className={classes.formText}>{error ? error.message : null}</FormHelperText>
						</FormControl>
					</Grid>
				</Grid>
			)}
		/>
	)
}