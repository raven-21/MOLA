import React, { useState, useEffect } from "react";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import { Controller } from "react-hook-form";
import useStyles from "../../styles";

export const InputPurpose = (props) => {
	const { classes } = useStyles();

	return (

		<Controller
			name={props.name}
			control={props.control}
			render={({
				field: { onChange, value },
				fieldState: { error },
			}) => (
				<div>
					<FormLabel htmlFor="purpose">
						<Typography className={classes.formLabel} sx={{ fontSize: { xs: 13, sm: 13, md: 13 } }}>
							{props.label}
						</Typography>
					</FormLabel >
					<FormControl
						error={!!error}
						fullWidth >
						{props.loanPurposes &&
							<TextField
								id="purpose"
								select
								color="secondary"
								size="small"
								onChange={onChange}
								value={value}
								SelectProps={{
									IconComponent: (props) => <KeyboardArrowDownRoundedIcon {...props} fontSize="small" />,
								}}
								InputProps={{
									sx: { fontSize: { xs: 14, sm: 14, md: 14, paddingTop: 4, paddingBottom: 4 } }
								}}>
								{props.loanPurposes.map((loanPurpose) => (
									<MenuItem
										key={loanPurpose.id}
										value={loanPurpose.id}
										sx={{
											fontSize: { xs: 14, sm: 14, md: 14 }
										}}>
										{loanPurpose.purpose}
									</MenuItem>
								))}
							</TextField>
						}
						<FormHelperText className={classes.formText} sx={{ fontSize: { xs: 11, sm: 11, md: 12 } }}>{error ? error.message : null}</FormHelperText>
					</FormControl>
				</div >
			)}
		/>
	)
}

