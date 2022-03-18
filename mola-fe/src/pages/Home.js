import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';

const useStyles = makeStyles(theme => ({
	root: {
		background: '#F0F1F3',
		height: '100%',
	},
	content: {
		padding: '24px 16px',
		[theme.breakpoints.down('sm')]: {
			padding: '24px 0'
		}
	},
	cardDetails: {
		backgroundColor: '#18223E !important',
		marginTop: '20px !important',
		borderRadius: '10px !important',
		cursor: 'pointer',
		"&:hover": {
			backgroundColor: '#0d47a1 !important'
		}
	},
	cardTitle: {
		color: '#A2ACBA'
	},
	btnGroup: {
		marginTop: 40
	},
	menuBtn: {
		marginRight: '20px !important',
		background: '#fff !important',
		color: '#000 !important',
		borderRadius: '10px !important',
		border: '1px solid #fff !important',
		"&:hover": {
			border: '1px solid #184470 !important',
			boxShadow: '0 0.25em 0 #184470 !important'
		}
	}
}));

export default function Home() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					<Card elevation={0} sx={{ bgcolor: '#184470', borderRadius: 4 }}>
						<CardContent sx={{ paddingX: 5, paddingTop: '20px !important', paddingBottom: '30px !important' }}>
							<Grid container>
								<Grid item xs={12} sm={12} md={6} lg={6} sx={{ margin: 'auto' }}>
									<Typography variant='h5' sx={{ color: '#fff', marginBottom: 4, fontWeight: 'bold' }}>Profile Information</Typography>
									<Grid container sx={{ paddingBottom: { xs: 2, sm: 2, md: 0 } }}>
										<Grid item lg={2}>
											<Avatar sx={{ width: 80, height: 80, fontSize: 30 }}>JL</Avatar>
										</Grid>
										<Grid item lg={10} sx={{ paddingLeft: 2 }}>
											<Typography variant='h6' sx={{ color: '#fff' }}>Jeovanne Lugo</Typography>
											<Typography variant='subtitle2' sx={{ color: '#fff' }}>Age: 30</Typography>
											<Typography variant='subtitle2' sx={{ color: '#fff' }}>jeov@gmail.com</Typography>
										</Grid>
									</Grid>
								</Grid>

								<Grid item xs={12} sm={12} md={6} lg={6}>
									<Grid container>
										<Grid item xs={12} sm={12} md={6} lg={6} sx={{ paddingLeft: { sm: 0, md: 2 } }}>
											<Card className={classes.cardDetails}>
												<CardContent sx={{ color: '#fff' }}>
													<Typography variant="button" className={classes.cardTitle}>DIVISION</Typography>
													<Typography sx={{ fontWeight: 'bold' }}>00H</Typography>
												</CardContent>
											</Card>
											<Card className={classes.cardDetails}>
												<CardContent sx={{ color: '#fff' }}>
													<Typography variant="button" className={classes.cardTitle}>STATION</Typography>
													<Typography sx={{ fontWeight: 'bold' }}>000</Typography>
												</CardContent>
											</Card>
										</Grid>
										<Grid item xs={12} sm={12} md={6} lg={6} sx={{ paddingLeft: { sm: 0, md: 2 } }}>
											<Card className={classes.cardDetails}>
												<CardContent sx={{ color: '#fff' }}>
													<Typography variant="button" className={classes.cardTitle}>PAYMENT TYPE</Typography>
													<Typography sx={{ fontWeight: 'bold' }}>DepEd</Typography>
												</CardContent>
											</Card>
											<Card className={classes.cardDetails}>
												<CardContent sx={{ color: '#fff' }}>
													<Typography variant="button" className={classes.cardTitle}>SCHOOL</Typography>
													<Typography sx={{ fontWeight: 'bold' }}>Sauce University</Typography>
												</CardContent>
											</Card>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</CardContent>
					</Card>

					<div className={classes.btnGroup}>
						<Button variant="contained" size='large' disableElevation className={classes.menuBtn}>
							<QueryStatsOutlinedIcon sx={{ fontSize: 'large' }} />
							<Typography variant='overline' sx={{ marginX: 1 }}>Loan Status</Typography>
						</Button>
						<Button variant="contained" size='large' disableElevation className={classes.menuBtn}>
							<HistoryOutlinedIcon sx={{ fontSize: 'large' }} />
							<Typography variant='overline' sx={{ marginX: 1 }}>History</Typography>
						</Button>
					</div>
				</div>
			</Container >
		</div >
	)
}