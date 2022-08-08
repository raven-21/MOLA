import { makeStyles } from "@mui/styles";
import { grey, red, blue } from "@mui/material/colors";

const myStyles = makeStyles(theme => ({
	root: {
		background: '#F0F1F3',
		height: '100%',
	},
	content: {
		padding: '24px 16px',
		overflowX: 'auto',
		[theme.breakpoints.down('sm')]: {
			padding: '32px 0'
		}
	},
	title: {
		fontWeight: 'bold !important',
		color: grey[600]
	},
}));

export default function useStyles() {
	const classes = myStyles();
	return { classes }
}