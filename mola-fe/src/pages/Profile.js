import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

import BtnGrp from '../components/ProfileComponents/BtnGrp';
import Profileinfo from '../components/ProfileComponents/ProfileInfo';

const useStyles = makeStyles(theme => ({
	root: {
		background: '#F0F1F3',
		height: '100%',
	},
	content: {
		padding: '24px 16px',
		overflowX: 'auto',
		[theme.breakpoints.down('sm')]: {
			padding: '24px 0'
		}
	},
}));

export default function Profile() {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					<Profileinfo />

					<BtnGrp />
				</div>
			</Container >
		</div >
	)
}