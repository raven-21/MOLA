import React from "react";
import { red } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { Controller } from "react-hook-form";
import useStyles from "./useStyles";

export const FormInputRate = ({ control, name, label }) => {
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
					<FormLabel>
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

						<TextField
							variant="standard"
							margin="dense"
							placeholder="0"
							size="small"
							onChange={onChange}
							value={value}
							sx={{ width: { xs: '100%', md: '50%' } }}
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
				</Paper>
			)}
		/>
	)
}