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

export const FormTerm = ({ control, name, label, product }) => {
	const { classes } = useStyles();

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
					<FormLabel htmlFor="term" sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography className={classes.formLabel} sx={{ fontSize: { xs: 12, sm: 12, md: 15 }, color: error ? red[700] : null }}>
							{label}
						</Typography> &nbsp;
						<Typography sx={{ fontSize: { xs: 11, sm: 11, md: 12 }, marginBottom: '12px', letterSpacing: .5 }}>
							(months)
						</Typography>
					</FormLabel>
					<FormControl
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
							value={value}
							InputProps={{
								sx: ({ fontSize: { xs: 13, sm: 13, md: 16 } })
							}}
							disabled={product ? false : true}
						/>
						<FormHelperText sx={{ fontSize: { xs: 11, sm: 11, md: 12 } }}>{error ? error.message : null}</FormHelperText>
					</FormControl>
				</div>
			)}
		/>
	)
}