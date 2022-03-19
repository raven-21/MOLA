import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// ICONS
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

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
		opacity: '0.8 !important',
		backgroundColor: '#18223E !important',
		borderRadius: '10px !important',
		cursor: 'pointer',
		transition: '0.3s !important',
		"&:hover": {
			backgroundColor: '#000 !important'
		}
	},
	cardTitle: {
		color: '#A2ACBA'
	},
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
		}
	}
}));



export default function Home() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					<Accordion sx={{ marginBottom: 3 }} elevation={0}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography color='error' sx={{ fontWeight: 'bold' }}>Announcement!</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Card elevation={0} sx={{ bgcolor: '#184470', borderRadius: 4 }}>
						<CardContent sx={{ paddingY: '20px !important', paddingX: { md: '40px !important' } }} >
							<Grid container>
								<Grid item xs={12} sm={12} md={6} lg={7} sx={{ margin: 'auto', paddingBottom: { xs: '20px !important' } }}>
									<Typography variant='h5' sx={{ color: '#fff', marginBottom: 2, fontWeight: 'bold' }}>Profile Information</Typography>
									<Grid container sx={{ paddingBottom: { xs: 2, sm: 2, md: 0 } }}>
										<Grid item lg={2}>
											<Avatar sx={{ width: 80, height: 80, fontSize: 30 }}>JL</Avatar>
										</Grid>
										<Grid item lg={10} sx={{ paddingLeft: 2 }}>
											<Typography variant='h5' sx={{ color: '#fff' }}>Jeovanne Lugo</Typography>
											<Typography variant='subtitle2' sx={{ color: '#fff' }}>ID: 00001</Typography>
											<Typography variant='subtitle2' sx={{ color: '#fff' }}>Membership Date: 01-15-2005</Typography>
										</Grid>
									</Grid>
								</Grid>

								<Grid item xs={12} sm={12} md={6} lg={5}>
									<Grid container spacing={1}>
										<Grid item xs={12} sm={12} md={6} lg={6}>
											<Card className={classes.cardDetails} elevation={0} sx={{ marginBottom: 1 }}>
												<CardContent sx={{ color: '#fff' }}>
													<Typography variant="button" className={classes.cardTitle}>DIVISION</Typography>
													<Typography sx={{ fontWeight: 'bold' }}>00H</Typography>
												</CardContent>
											</Card>
											<Card className={classes.cardDetails} elevation={0}>
												<CardContent sx={{ color: '#fff' }}>
													<Typography variant="button" className={classes.cardTitle}>STATION</Typography>
													<Typography sx={{ fontWeight: 'bold' }}>000</Typography>
												</CardContent>
											</Card>
										</Grid>
										<Grid item xs={12} sm={12} md={6} lg={6}>
											<Card className={classes.cardDetails} elevation={0} sx={{ marginBottom: 1 }}>
												<CardContent sx={{ color: '#fff' }}>
													<Typography variant="button" className={classes.cardTitle}>PAYMENT TYPE</Typography>
													<Typography sx={{ fontWeight: 'bold' }}>DepEd</Typography>
												</CardContent>
											</Card>
											<Card className={classes.cardDetails} elevation={0}>
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
						<Grid container spacing={2}>
							<Grid item sx={12} sm={12}>
								<Button variant="contained" size='large' disableElevation className={classes.menuBtn}>
									<BorderColorOutlinedIcon sx={{ fontSize: 'large' }} />
									<Typography variant='overline' sx={{ marginX: 1 }}>Apply Loan</Typography>
								</Button>
							</Grid>
							<Grid item sx={12} sm={12}>
								<Button variant="contained" size='large' disableElevation className={classes.menuBtn}>
									<QueryStatsOutlinedIcon sx={{ fontSize: 'large' }} />
									<Typography variant='overline' sx={{ marginX: 1 }}>Loan Status</Typography>
								</Button>
							</Grid>
							<Grid item sx={12} sm={12}>
								<Button variant="contained" size='large' disableElevation className={classes.menuBtn}>
									<HistoryOutlinedIcon sx={{ fontSize: 'large' }} />
									<Typography variant='overline' sx={{ marginX: 1 }}>History</Typography>
								</Button>
							</Grid>
						</Grid>
					</div>

				</div>
			</Container >
		</div >
	)
}