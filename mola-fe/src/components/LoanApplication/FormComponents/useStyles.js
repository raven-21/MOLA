import React from "react";
import { makeStyles } from "@mui/styles";
import { grey, red } from "@mui/material/colors";

const myStyles = makeStyles(theme => ({
	cardTitle: {
		padding: '30px 90px !important',
		[theme.breakpoints.down('sm')]: {
			padding: '20px 30px !important'
		},
		borderRadius: '12px !important',
	},
	cardContent: {
		padding: '60px 90px !important',
		[theme.breakpoints.down('sm')]: {
			padding: '40px 30px !important'
		},
		borderRadius: '12px !important',
	},
	textGrey: {
		color: grey[700]
	},
	formLabel: {
		fontWeight: '600 !important',
		color: grey[400],
		margin: '0 !important'
	},
	formLabelError: {
		fontWeight: '600 !important',
		color: red[700],
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