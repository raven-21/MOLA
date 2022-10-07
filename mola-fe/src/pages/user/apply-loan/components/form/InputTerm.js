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
import useStyles from "../../styles";

export const InputTerm = (props) => {
	const { classes } = useStyles();

	return (
		<Controller
			name={props.name}
			control={props.control}
			render={({
				field: { onChange, value },
				fieldState: { error },
			}) => (
				<>
					<FormLabel htmlFor="term" sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography className={classes.formLabel} sx={{ fontSize: { xs: 13, sm: 13, md: 14 }, color: error ? red[700] : null }}>
							{props.label} <span style={{ fontWeight: 400 }}>(mos.)</span>
						</Typography> &nbsp;
					</FormLabel>
					<FormControl
						error={!!error}
						fullWidth>
						<TextField
							id="term"
							type="number"
							variant="outlined"
							color="secondary"
							placeholder="0"
							error={!!error}
							onChange={onChange}
							value={value}
							InputProps={{
								sx: ({ fontSize: { xs: 14, sm: 14, md: 14 } })
							}}
						/>
						<FormHelperText sx={{ fontSize: { xs: 11, sm: 11, md: 12 }, marginLeft: 0.5 }}>{error ? error.message : null}</FormHelperText>
					</FormControl>
				</>
			)}
		/>
	)
}