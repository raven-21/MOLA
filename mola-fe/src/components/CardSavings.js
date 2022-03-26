import React from "react";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
// Icons
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

const useStyles = makeStyles(theme => ({

	card: {
		background: 'linear-gradient(45deg, #113050 10%, #184470 90%)',
		borderRadius: '12px !important',
		minWidth: '300px',
		height: '100%'
	},
	title: {
		fontWeight: 'bold !important',
		color: grey[600]
	}

}));

export default function CardSavings() {
	const classes = useStyles();

	return (
		<div>
			<Card className={classes.card} elevation={0}>
				<CardContent
					sx={{
						paddingX: { xs: '25px', sm: '25px', md: '30px' },
						paddingY: { xs: '20px', sm: '20px', md: '30px' },
						color: '#fff',
					}}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
							<Avatar
								sx={{
									bgcolor: '#fff',
									color: 'rgba(0, 0, 0, 0.54)',
									width: { xs: 50, sm: 60, md: 60 },
									height: { xs: 50, sm: 60, md: 60 },
								}}>
								<SavingsOutlinedIcon sx={{ fontSize: { xs: 30, sm: 35, md: 35 } }} />
							</Avatar>
							<Box ml={2}>
								<Typography
									sx={{
										fontSize: { xs: 15, sm: 15, md: 18, },
										fontWeight: 700
									}}>
									Jeovanne Lugo
								</Typography>
								<Typography
									sx={{
										fontSize: { xs: 15, sm: 15, md: 18, }
									}}>
									Total Savings
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'flex-end' }}>
							<Typography variant="overline">**** **** **2906</Typography>
						</Grid>
						<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
							<div>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
									<Typography
										sx={{
											fontSize: { xs: 12, sm: 14, md: 16 }
										}}>
										Available Balance
									</Typography>
								</Box>

								<Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
									<Typography sx={{ marginTop: '2px', fontWeight: 'bold' }}>PHP</Typography>
									<Typography
										sx={{
											marginLeft: 1,
											fontWeight: 'bold',
											fontSize: { xs: 21, sm: 21, md: 21 }
										}}>
										2,000.00
									</Typography>
								</Box>
							</div>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</div>
	);
}