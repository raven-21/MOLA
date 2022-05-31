import React, { useState, useEffect } from "react";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { Controller } from "react-hook-form";
import useFetch from "../../../hooks/useFetch";
import useStyles from "./useStyles";

export const FormRadioPurposes = ({ control, name, label }) => {
	const { classes } = useStyles();
	const { data: loanPurposes } = useFetch('http://localhost:5000/loanApps/loan_purposes');

	return (
		// <Controller
		// 	name={name}
		// 	control={control}
		// 	render={({
		// 		field: { onChange, value },
		// 		fieldState: { error },
		// 	}) => (
		// 		<Paper
		// 			variant="outlined"
		// 			className={classes.cardContent}
		// 			sx={error ? { borderColor: red[700] } : null}>
		// 			<FormLabel>
		// 				<Typography
		// 					className={classes.formLabel}
		// 					sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' } }}>
		// 					{label}
		// 					<span style={{ color: red[700] }}> *</span>
		// 				</Typography>
		// 			</FormLabel>
		// 			<FormControl
		// 				margin="dense"
		// 				size="small"
		// 				error={!!error}
		// 				fullWidth >

		// 				{loanPurposes &&
		// 					<RadioGroup value={value}>
		// 						{loanPurposes.map((loanPurpose) => (
		// 							<FormControlLabel
		// 								onChange={onChange}
		// 								key={loanPurpose.id}
		// 								value={loanPurpose.purpose}
		// 								control={<Radio size="small" />}
		// 								label={
		// 									<Typography
		// 										sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '16px' } }}>
		// 										{loanPurpose.purpose}
		// 									</Typography>}
		// 							/>
		// 						))}
		// 					</RadioGroup>
		// 				}
		// 				<FormHelperText className={classes.formText}>{error ? error.message : null}</FormHelperText>

		// 			</FormControl>
		// 		</Paper>
		// 	)}
		// />


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
							<span style={{ color: red[400] }}> *</span>
						</Typography>
					</FormLabel >
					<FormControl
						margin="dense"
						size="small"
						error={!!error}
						fullWidth >

						{loanPurposes &&
							<Select
								onChange={onChange}
								value={value}
								displayEmpty
							>
								{/* <MenuItem value="">
									<em>...</em>
								</MenuItem> */}
								{loanPurposes.map((loanPurpose) => (
									<MenuItem
										key={loanPurpose.id}
										value={loanPurpose.purpose}>
										{loanPurpose.purpose}
									</MenuItem>
								))}
							</Select>
						}
						<FormHelperText className={classes.formText}>{error ? error.message : null}</FormHelperText>
					</FormControl>
				</div >
			)}
		/>
	)
}

