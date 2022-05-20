import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const useStyles = makeStyles(theme => ({

	card: {
		// background: 'linear-gradient(45deg, #113050 10%, #184470 90%)',
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

export default function Profileinfo() {
	const classes = useStyles();

	return (
		<div>
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
								<Grid item sx={{ display: 'flex', alignItems: 'center' }}>
									<Avatar
										sx={{
											background: 'linear-gradient(45deg, #113050 10%, #184470 90%)',
											width: { xs: 50, sm: 60, md: 100 },
											height: { xs: 50, sm: 60, md: 100 },
											fontSize: { xs: 20, sm: 20, md: 40 }
										}}>
										M
									</Avatar>
								</Grid>
								<Grid item sx={{ display: 'flex', alignItems: 'center' }}>
									<Box ml={1}>
										<Typography
											sx={{
												fontSize: { xs: 16, sm: 16, md: 25, },
												fontWeight: 700,
												color: '#000'
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
											}}>
											<AttachEmailIcon /> monjae.lugo@gmail.com
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Card className={classes.card} elevation={0}>
						<CardContent sx={{
							paddingX: { xs: '25px', sm: '25px', md: '30px' },
							paddingY: { xs: '20px', sm: '20px', md: '30px' },
						}}>

						</CardContent>
					</Card>
				</Grid>
			</Grid>

		</div>
	);
}