import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
//
import NotAvailable from "../../pages/NotAvailable";

const useStyles = makeStyles(theme => ({

	card: {
		// background: 'linear-gradient(45deg, #113050 10%, #184470 90%)',
		background: '#FFF',
		borderRadius: '12px !important',
		minWidth: '300px',
		// height: '100%'
	},
	title: {
		fontWeight: 'bold !important',
		color: grey[600]
	},
	link: {
		textDecoration: 'none !important'
	}

}));

export default function ProfileInfo({ user }) {
	const classes = useStyles();
	let info = user[0]

	return (
		<div>
			{info &&
				<Grid container spacing={{ xs: 2, sm: 2, md: 3 }}>
					<Grid item xs={12} sm={12} md={6} >
						<Card className={classes.card} elevation={0}>
							<CardContent
								sx={{
									paddingX: { xs: '25px', sm: '25px', md: '30px' },
									paddingY: { xs: '20px', sm: '20px', md: '30px' },
									color: '#fff',
								}}>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
										<Avatar
											sx={{
												background: 'linear-gradient(45deg, #113050 10%, #184470 90%)',
												width: { xs: 70, sm: 80, md: 100 },
												height: { xs: 70, sm: 80, md: 100 },
												fontSize: { xs: 30, sm: 35, md: 40 },
												fontWeight: 700
											}}>
											{info.firstname.charAt(0)}
										</Avatar>
									</Grid>
									<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
										<Box ml={1}>
											<Typography
												sx={{
													fontSize: { xs: 16, sm: 16, md: 20, },
													fontWeight: 700,
													color: '#000',
													textAlign: 'center'
												}}>
												{info.firstname + ' ' + info.middlename + ' ' + info.lastname + ' '} {info.suffix ? info.suffix : ''}
											</Typography>
											<Typography
												sx={{
													fontSize: { xs: 12, sm: 12, md: 14, },
													color: grey[400],
													fontWeight: 700,
													textAlign: 'center'
												}}>
												ID: {info.employee_id}
											</Typography>
											<Typography
												sx={{
													fontSize: { xs: 12, sm: 12, md: 14, },
													color: '#649FEE',
													fontWeight: 700,
													textAlign: 'center'
												}}>
												{info.email}
											</Typography>
										</Box>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12} md={12}>
								<Card className={classes.card} elevation={0}>
									<CardContent sx={{
										paddingLeft: '20px',
										paddingRight: '20px',
										paddingBottom: '10px !important',
										paddingTop: '10px'
									}}>
										<Typography
											sx={{
												fontSize: { xs: 11, sm: 12, md: 12, },
												color: grey[400],
												fontWeight: 700,
											}}>
											Membership Date
										</Typography>
										<Typography
											sx={{
												fontSize: { xs: 13, sm: 13, md: 15, },
												fontWeight: 600,
												color: '#000',
											}}>
											{info.membership_date}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} sm={12} md={12}>
								<Card className={classes.card} elevation={0}>
									<CardContent sx={{
										paddingLeft: '20px',
										paddingRight: '20px',
										paddingBottom: '10px !important',
										paddingTop: '10px'
									}}>
										<Typography
											sx={{
												fontSize: { xs: 11, sm: 12, md: 12, },
												color: grey[400],
												fontWeight: 700,
											}}>
											Mobile no.
										</Typography>
										<Typography
											sx={{
												fontSize: { xs: 13, sm: 13, md: 15, },
												fontWeight: 600,
												color: '#000',
											}}>
											{info.mobile_no}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} sm={12} md={12}>
								<Card className={classes.card} elevation={0}>
									<CardContent sx={{
										paddingLeft: '20px',
										paddingRight: '20px',
										paddingBottom: '10px !important',
										paddingTop: '10px'
									}}>
										<Typography
											sx={{
												fontSize: { xs: 11, sm: 12, md: 12, },
												color: grey[400],
												fontWeight: 700,
											}}>
											Station-Division
										</Typography>
										<Typography
											sx={{
												fontSize: { xs: 13, sm: 13, md: 15, },
												fontWeight: 600,
												color: '#000',
											}}>
											{info.stadiv}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						</Grid>

					</Grid>
				</Grid>
			}
			{!info &&
				<NotAvailable />
			}

		</div >
	);
}