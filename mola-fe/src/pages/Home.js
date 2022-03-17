import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const useStyles = makeStyles(theme => ({
	root: {
		background: '#F0F1F3',
		height: '100%'
	},
	content: {
		padding: '24px 16px'
	}
}));

export default function Home() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					<Typography variant="h4" mb={2}>Welcome to MOLA!</Typography>
					<Card elevation={0} sx={{ bgcolor: '#74C0FC' }}>
						<CardContent>
							<Typography sx={{ fontWeight: 'bold' }}>Profile Information</Typography>
						</CardContent>
					</Card>
				</div>
			</Container>
		</div>
	)
}