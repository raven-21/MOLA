import React from "react";
import { makeStyles } from "@mui/styles";
import { grey, red } from "@mui/material/colors";

const myStyles = makeStyles(theme => ({
	cardContent: {
		padding: '24px !important',
		[theme.breakpoints.down('sm')]: {
			padding: '15px 15px !important'
		},
		borderRadius: '7px !important',
	},
	textGrey: {
		color: grey[700]
	},
	formLabel: {
		fontWeight: '700 !important',
		color: 'grey[700] important',
		margin: '0 !important'
	},
	formText: {
		marginLeft: '0 !important'
	}
}));

export default function useStyles() {
	const classes = myStyles();
	return { classes }
}