import { makeStyles } from "@mui/styles";
import { grey, red, blue } from "@mui/material/colors";

const myStyles = makeStyles(theme => ({
	customRadio: {
		'& input': {
			display: 'none'
		},
		'& input:checked + span': {
			// border: '2px solid #1565C0',
			backgroundColor: '#F2F7FC',
			outlineOffset: '-2px',
			outline: '2px solid #1565C0'
		},
	},
	defaultRadio: {
		padding: 10,
		cursor: 'pointer',
		minHeight: '130px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px solid' + grey[400],
		borderRadius: '5px !important',
		backgroundColor: '#FFF',
	},
	radioLabel: {
		display: 'flex'
	},
	label: {
		fontWeight: 700 + '!important',
		color: grey[500],
		marginBottom: '12px !important'
	},
	labelRequired: {
		marginBottom: '12px !important',
		color: red[700]
	},
	formText: {
		marginLeft: '0 !important',
	},
	//
	appLabel: {
		fontWeight: 700 + '!important',
		color: grey[400],
		letterSpacing: 0.7,
	},
	gLabel: {
		fontWeight: 700 + '!important',
		color: grey[600],
		letterSpacing: 1,
	},
	appValue: {
		fontWeight: 700 + '!important',
		color: grey[600],
		letterSpacing: 1,
	},
	gValue: {
		fontWeight: 700 + '!important',
		color: grey[900],
		letterSpacing: 1,
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