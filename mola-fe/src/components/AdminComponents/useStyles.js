import { makeStyles } from "@mui/styles";
import { grey, red } from "@mui/material/colors";

const myStyles = makeStyles(theme => ({
	rotateIcon: {
		animation: "$spin 2s linear infinite"
	},
	"@keyframes spin": {
		"0%": {
			transform: "rotate(360deg)"
		},
		"100%": {
			transform: "rotate(0deg)"
		}
	},
	label: {
		fontWeight: 700 + '!important',
		color: grey[400],
		letterSpacing: 0.7,
	},
	gLabel: {
		fontWeight: 700 + '!important',
		color: grey[600],
		letterSpacing: 1,
	},
	value: {
		fontWeight: 700 + '!important',
		color: grey[600],
		letterSpacing: 1,
		textAlign: 'right',
	},
	gValue: {
		fontWeight: 700 + '!important',
		color: grey[900],
		letterSpacing: 1,
		textAlign: 'right',
	},
	dContainer: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 5
	},
	dLabel: {
		display: 'flex',
		aligntItems: 'center',
		justifyContent: 'flex-start'
	},
	dValue: {
		display: 'flex',
		aligntItems: 'center',
		justifyContent: 'flex-end'
	},
	scrollBar: {
		'&::-webkit-scrollbar': {
			width: '7px !important'
		},
		'&::-webkit-scrollbar-track': {
			background: '#FFF'
		},
		'&::-webkit-scrollbar-thumb': {
			background: grey[300],
			borderRadius: '10px'
		},
		'&::-webkit-scrollbar-thumb:hover': {
			background: grey[400]
		}
	},
}));

export default function useStyles() {
	const classes = myStyles();
	return { classes }
}