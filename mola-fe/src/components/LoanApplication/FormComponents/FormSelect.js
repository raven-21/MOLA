import React, { useEffect, useState } from "react";
import { red } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

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
				<Paper
					variant="outlined"
					className={classes.cardContent}
					sx={error ? { borderColor: red[700] } : null}>
					<FormLabel htmlFor="term">
						<Typography
							className={classes.formLabel}
							sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' } }}>
							{label}
							<span style={{ color: red[700] }}> *</span>
						</Typography>
					</FormLabel>
					<FormControl
						variant="standard"
						margin="dense"
						size="small"
						error={!!error}
						sx={{ width: { xs: '100%', md: '50%' } }}>
						<InputLabel>Your answer</InputLabel>
						<Select id="term" value={value} onChange={onChange} placeholder="Term">
							{productLoans.map((productLoan) => (
								<MenuItem key={productLoan} value={productLoan}>{productLoan}</MenuItem>
							))}
						</Select>
						<FormHelperText className={classes.formText}>{error ? error.message : null}</FormHelperText>

					</FormControl>
				</Paper>
			)}
		/>
	)
}