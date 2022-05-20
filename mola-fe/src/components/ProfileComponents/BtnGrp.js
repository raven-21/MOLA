import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// ICONS
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

const useStyles = makeStyles(theme => ({

	btnGroup: {
		marginTop: 40
	},
	menuBtn: {
		background: '#fff !important',
		color: '#000 !important',
		borderRadius: '10px !important',
		border: '1px solid #fff !important',
		transition: '0s !important',
		"&:hover": {
			border: '1px solid #184470 !important',
			boxShadow: '0 0.25em 0 #184470 !important'
		},
		"&:active": {
			boxShadow: 'none !important',
			transform: 'translateY(4px)'
		},
		[theme.breakpoints.down('sm')]: {
			padding: '18px !important'
		}
	}
}));

export default function BtnGrp() {

	const classes = useStyles();

	return (
		<div className={classes.btnGroup}>
			<Grid container spacing={2}>
				<Grid item>
					<Button variant="contained" size='large' disableElevation className={classes.menuBtn}>
						<QueryStatsOutlinedIcon sx={{ fontSize: 'large' }} />
						<Typography variant='overline' sx={{ marginX: 1, display: { xs: 'none', sm: 'block', md: 'block' } }}>Loan Summary</Typography>
					</Button>
				</Grid>
				<Grid item>
					<Button variant="contained" size='large' disableElevation className={classes.menuBtn}>
						<BorderColorOutlinedIcon sx={{ fontSize: 'large' }} />
						<Typography variant='overline' sx={{ marginX: 1, display: { xs: 'none', sm: 'block', md: 'block' } }}> Apply Loan</Typography>
					</Button>
				</Grid>
				<Grid item>
					<Button variant="contained" size='large' disableElevation className={classes.menuBtn}>
						<HistoryOutlinedIcon sx={{ fontSize: 'large' }} />
						<Typography variant='overline' sx={{ marginX: 1, display: { xs: 'none', sm: 'block', md: 'block' } }}>History</Typography>
					</Button>
				</Grid>
			</Grid>
		</div>
	)
}