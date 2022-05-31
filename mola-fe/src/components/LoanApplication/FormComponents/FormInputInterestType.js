import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";

import { Controller } from "react-hook-form";
import useStyles from "./useStyles";

export const FormInputInterestType = ({ control, name, label, product }) => {
	const { classes } = useStyles();
	const [type, setType] = useState([]);
	useEffect(() => {
		product === "LT" ? setType("Diminishing") : setType("With Interest")
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
							size="small"
							placeholder="..."
							error={!!error}
							onChange={onChange}
							value={type}
							InputProps={{
								readOnly: true,
							}} />
						<FormHelperText className={classes.formText}>{error ? error.message : null}</FormHelperText>
					</FormControl>
				</div>
			)}
		/>
	)
}