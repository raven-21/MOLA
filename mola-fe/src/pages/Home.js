import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab'
// ICONS
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import CircleIcon from '@mui/icons-material/Circle';

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
	cardProfile: {
		background: 'linear-gradient(45deg, #113050 10%, #184470 90%)',
		borderRadius: '18px !important',
	},
	cardDetails: {
		opacity: '0.9 !important',
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
		},
		[theme.breakpoints.down('sm')]: {
			padding: '18px !important'
		}
	}
}));

export default function Home() {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					<Card elevation={0} className={classes.cardProfile} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
						<CardContent sx={{ paddingY: '20px !important', paddingX: { md: '40px !important' } }} >
							<Grid container>
								<Grid item xs={12} sm={12} md={6} lg={7} sx={{ margin: 'auto', paddingBottom: { xs: '20px !important' } }}>
									<Typography variant='h5' sx={{ color: '#fff', marginBottom: 2, fontWeight: 'bold' }}>Profile Information</Typography>
									<Grid container sx={{ paddingBottom: { xs: 2, sm: 2, md: 0 } }}>
										<Grid item lg={2} sx={{ display: 'flex', alignItems: 'center' }}>
											<Avatar sx={{ width: 90, height: 90, fontSize: 30 }}>JL</Avatar>
										</Grid>
										<Grid item lg={10} sx={{ paddingLeft: 2 }}>
											<Typography variant='h5' sx={{ color: '#fff' }}>Jeovanne Lugo</Typography>
											<Typography variant='subtitle2' sx={{ color: '#fff' }}>ID: 00001</Typography>
											<Typography variant='subtitle2' sx={{ color: '#fff' }}>Membership Date: 01-15-2005</Typography>
											{/* <Link href="#" underline="hover" variant='subtitle2' sx={{ color: '#fff' }}>
												See full info...
											</Link> */}
											<Button variant='contained' size='small' sx={{ paddingX: 2, marginTop: 1, borderRadius: 2 }}>
												<Typography variant='overline' sx={{ textTransform: 'none' }}>See full info...</Typography>
											</Button>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={12} sm={12} md={6} lg={5}>
									<Grid container spacing={1}>
										<Grid item xs={12} sm={6} md={6} lg={6}>
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
										<Grid item xs={12} sm={6} md={6} lg={6}>
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
					{/* Shows on sm breakpoint */}
					<Card elevation={0} className={classes.cardProfile} sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
						<CardContent sx={{ padding: '30px !important' }}>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={12} sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
									<div>
										<Avatar sx={{ width: 60, height: 60, fontSize: 20 }}>JL</Avatar>
										{/* <Box mt={2} sx={{ display: { xs: 'none', sm: 'none' } }}>
											<Typography variant='h6'>Jeovanne Lugo</Typography>
											<Typography variant='subtitle2'>ID: 00001</Typography>
										</Box> */}
									</div>
									<div>
										<Box ml={2}>
											<Typography variant='h6'>Lugo, Jeovanne </Typography>
											<Typography variant='subtitle2'>ID: 00001</Typography>
										</Box>
									</div>
								</Grid>
								<Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
									<Typography sx={{ color: '#fff' }}>Membership Date: 01-15-2005</Typography>
								</Grid>
								<Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-start', sm: 'flex-end' }, color: '#fff' }}>
									<Button variant='contained' size='small' sx={{ paddingX: 5, borderRadius: 2 }}>
										<Typography variant='overline' sx={{ textTransform: 'none' }}>See full info...</Typography>
									</Button>
								</Grid>
							</Grid>
						</CardContent>
					</Card>

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

					<div>

					</div>
				</div>
			</Container >
		</div >
	)
}