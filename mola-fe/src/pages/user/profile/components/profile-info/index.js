import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
//
import NotAvailable from "../../../../others/not-available";


const useStyles = makeStyles(theme => ({

	card: {
		background: '#FFF',
		borderRadius: '12px !important',
		minWidth: '300px',
		height: '100%',
	},
	card2: {
		background: '#FFF',
		borderRadius: '12px !important',
		minWidth: '300px',
		height: '100%'
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
	let info = user[0];

	return (
		<div>
			{info &&
				<Grid container spacing={3}>
					<Grid item xs={12} sm={12} md={6}>
						<Paper className={classes.card} elevation={0} sx={{ display: 'flex', alignItems: 'center' }}>
							<Box sx={{ padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
								<Avatar
									sx={{
										// background: 'linear-gradient(45deg, #113050 10%, #184470 90%)',
										background: '#' + info.prof_color,
										width: { xs: 70, sm: 80, md: 80 },
										height: { xs: 70, sm: 80, md: 80 },
										fontSize: { xs: 30, sm: 35, md: 35 },
										fontWeight: 700,
									}}>
									{info.firstname.charAt(0)}
								</Avatar>
								<Box ml={3}>
									<Typography
										sx={{
											fontSize: { xs: 16, sm: 16, md: 17, },
											fontWeight: 700,
											color: '#000',
										}}>
										{info.firstname + ' ' + info.middlename + ' ' + info.lastname} {info.suffix ? info.suffix : ''}
									</Typography>
									<Typography
										sx={{
											fontSize: { xs: 12, sm: 12, md: 14, },
											color: grey[400],
											fontWeight: 700,
											letterSpacing: 1
										}}>
										ID: {info.employee_id}
									</Typography>
									<Typography
										sx={{
											fontSize: { xs: 12, sm: 12, md: 14, },
											color: '#649FEE',
											fontWeight: 700,
										}}>
										{info.email}
									</Typography>
								</Box>
							</Box>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<Paper className={classes.card2} elevation={0} sx={{ display: 'flex', alignItems: 'center' }}>
							<Box sx={{ width: '100%', padding: 4 }}>
								<Grid container mb={1} >
									<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
										<Typography
											sx={{
												fontSize: { xs: 11, sm: 12, md: 13, },
												fontWeight: 700,
												color: grey[400],
											}}>
											Membership Date
										</Typography>
									</Grid>
									<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
										<Typography
											sx={{
												fontSize: { xs: 13, sm: 13, md: 14, },
												fontWeight: 700,
												color: '#000',
												letterSpacing: .5
											}}>
											{info.membership_date}
										</Typography>
									</Grid>
								</Grid>
								<Grid container mb={1}>
									<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
										<Typography
											sx={{
												fontSize: { xs: 11, sm: 12, md: 13, },
												fontWeight: 700,
												color: grey[400],
											}}>
											Mobile no.
										</Typography>
									</Grid>
									<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
										<Typography
											sx={{
												fontSize: { xs: 13, sm: 13, md: 14, },
												fontWeight: 700,
												color: '#000',
												letterSpacing: .5
											}}>
											{info.mobile_no}
										</Typography>
									</Grid>
								</Grid>
								<Grid container mb={1}>
									<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
										<Typography
											sx={{
												fontSize: { xs: 11, sm: 12, md: 13, },
												fontWeight: 700,
												color: grey[400],
											}}>
											Station-Division
										</Typography>
									</Grid>
									<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
										<Typography
											sx={{
												fontSize: { xs: 13, sm: 13, md: 14, },
												fontWeight: 700,
												color: '#000',
												letterSpacing: .5
											}}>
											{info.stadiv}
										</Typography>
									</Grid>
								</Grid>
								<Grid container>
									<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
										<Typography
											sx={{
												fontSize: { xs: 11, sm: 12, md: 13, },
												fontWeight: 700,
												color: grey[400],
											}}>
											Branch
										</Typography>
									</Grid>
									<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
										<Typography
											sx={{
												fontSize: { xs: 13, sm: 13, md: 14, },
												fontWeight: 700,
												color: '#000',
												letterSpacing: .5
											}}>
											MEMBA-{info.branch_code}
										</Typography>
									</Grid>
								</Grid>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			}
			{!info &&
				<NotAvailable />
			}

		</div >
	)
}