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

	// const [productLoans, setProductLoans] = useState([]);

	// const termRange = (min, max) => {
	// 	let arr = [];
	// 	for (let i = min; i <= max; i++)
	// 		arr.push(i);
	// 	return arr;
	// }

	// useEffect(() => {
	// 	if (product === "ST") {
	// 		setProductLoans(termRange(3, 12))
	// 	}
	// 	else {
	// 		setProductLoans(termRange(3, 36))
	// 	}
	// }, [product])

	const [rangeMo, setRangeMo] = useState([]);
	useEffect(() => {
		product === "ST" ? setRangeMo("3-12") : setRangeMo("3-36")
	}, [product])

	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, value },
				fieldState: { error },
			}) => (
				<div>
					<FormLabel htmlFor="term">
						<Typography
							className={!error ? classes.formLabel : classes.formLabelError}
							sx={{
								fontSize: { xs: '11px', sm: '12px', md: '12px', lg: '13px' },
							}}>
							{label} ({rangeMo} mos.)
							<span style={{ color: red[400] }}> *</span>
						</Typography>
					</FormLabel>
					<FormControl
						margin="dense"
						size="small"
						error={!!error}
						fullWidth>
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
				</div>
			)}
		/>
	)
}