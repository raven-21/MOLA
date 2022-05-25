import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";


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

export default function ProfileInfoLG() {
	const classes = useStyles();

	return (
		<div>
			<Card className={classes.card} elevation={0}>
				<CardContent
					sx={{
						paddingX: { xs: '25px', sm: '25px', md: '30px' },
						paddingY: { xs: '20px !important', sm: '20px !important', md: '35px !important' },
					}}>
					<Grid container spacing={{ xs: 5, sm: 2, md: 3 }}>
						<Grid item xs={12} sm={6} md={7} sx={{ display: 'flex', alignItems: 'center' }}>
							<Avatar
								sx={{
									background: 'linear-gradient(45deg, #113050 10%, #184470 90%)',
									width: { xs: 70, sm: 80, md: 90 },
									height: { xs: 70, sm: 80, md: 90 },
									fontSize: { xs: 30, sm: 35, md: 40 },
									fontWeight: 700
								}}>
								M
							</Avatar>
							<Box ml={3}>
								<Typography
									sx={{
										fontSize: { xs: 16, sm: 16, md: 20, },
										fontWeight: 700,
										color: '#000',
									}}>
									Monjae Steven Lugo
								</Typography>
								<Typography
									sx={{
										fontSize: { xs: 12, sm: 12, md: 14, },
										color: grey[400],
										fontWeight: 700,
									}}>
									ID: 5007979
								</Typography>
								<Typography
									sx={{
										fontSize: { xs: 12, sm: 12, md: 14, },
										color: '#649FEE',
										fontWeight: 700,
									}}> monjae.lugo@gmail.com
								</Typography>
							</Box>
						</Grid>

						<Grid item xs={12} sm={6} md={5} >
							<Grid container mb={1}>
								<Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
									<Typography
										sx={{
											fontSize: { xs: 11, sm: 12, md: 13, },
											fontWeight: 700,
											color: grey[400],
										}}>
										Membership Date
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
									<Typography
										sx={{
											fontSize: { xs: 13, sm: 13, md: 15, },
											fontWeight: 600,
											color: '#000',
										}}>
										05/07/2019
									</Typography>
								</Grid>
							</Grid>
							<Grid container mb={1}>
								<Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
									<Typography
										sx={{
											fontSize: { xs: 11, sm: 12, md: 13, },
											fontWeight: 700,
											color: grey[400],
										}}>
										Mobile no.
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
									<Typography
										sx={{
											fontSize: { xs: 13, sm: 13, md: 15, },
											fontWeight: 600,
											color: '#000',
										}}>
										0935-649-789
									</Typography>
								</Grid>
							</Grid>
							<Grid container>
								<Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
									<Typography
										sx={{
											fontSize: { xs: 11, sm: 12, md: 13, },
											fontWeight: 700,
											color: grey[400],
										}}>
										Station-Division
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
									<Typography
										sx={{
											fontSize: { xs: 13, sm: 13, md: 15, },
											fontWeight: 600,
											color: '#000',
										}}>
										001-033H
									</Typography>
								</Grid>
							</Grid>
						</Grid>

					</Grid>
				</CardContent>
			</Card>

		</div >
	);
}