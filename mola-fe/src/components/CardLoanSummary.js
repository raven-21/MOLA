
import React from "react";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CardActionArea from "@mui/material/CardActionArea";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";

import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

const useStyles = makeStyles(theme => ({

	cardLoan: {
		userSelect: 'none',
		background: '#fff',
		borderRadius: '12px !important',
		minWidth: '300px',
		height: '100%',
		cursor: 'pointer',
	},
	title: {
		fontWeight: 'bold !important',
		color: grey[600]
	}

}));

export default function CardLoanSummary() {
	const classes = useStyles();

	return (
		<div>
			<Grid container my="15px" sx={{ display: 'flex', alignItems: 'center', minWidth: '300px' }}>
				<Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center', paddingLeft: { xs: '10px', sm: '20px' } }}>
					<Typography className={classes.title}
						sx={{
							fontSize: { xs: '14px', sm: '18px', md: '18px' }
						}}>
						Loan Summary
					</Typography>
				</Grid>
				<Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
					<Paper elevation={0} sx={{ display: 'flex', alignItems: 'center', paddingLeft: 2, paddingRight: 1, paddingY: 1, borderRadius: 5 }}>
						<Typography
							sx={{
								fontSize: { xs: '12px', sm: '14px', md: '14px' }
							}}>
							Show all
						</Typography>
						<Switch size="small" />
					</Paper>
				</Grid>
			</Grid>
			<Card className={classes.cardLoan} elevation={0}>
				<CardActionArea>
					<CardContent
						sx={{
							paddingX: { xs: '18px', sm: '25px', md: '30px' },
							paddingY: { xs: '18px', sm: '20px', md: '30px' },
							color: grey[600],
						}}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
								{/* <Avatar
									sx={{
										bgcolor: '#fff',
										color: 'rgba(0, 0, 0, 0.54)',
										width: { xs: 50, sm: 60, md: 60 },
										height: { xs: 50, sm: 60, md: 60 },
										display: { xs: 'none', sm: 'flex', md: 'flex' },
										marginRight: 1
									}}>
									<CreditCardOutlinedIcon sx={{ fontSize: { xs: 30, sm: 35, md: 35 } }} />
								</Avatar> */}
								<CreditCardOutlinedIcon
									sx={{
										fontSize: { xs: 30, sm: 35, md: 35 },
										marginRight: 2
									}} />
								<Box>
									<Typography
										sx={{
											fontSize: { xs: 15, sm: 18, md: 20, },
											fontWeight: 700
										}}>
										PHP 50,000.00
									</Typography>
									<Typography
										sx={{
											fontSize: { xs: 12, sm: 12, md: 18, }
										}}>
										Total Loan Amount
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'flex-end' }}>
								<Typography
									sx={{
										fontSize: { xs: 8, sm: 12, md: 14 }
									}}>
									Voucher NO. 117007
								</Typography>
							</Grid>
							<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
								<div>
									<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
										<Typography
											sx={{
												fontSize: { xs: 10, sm: 14, md: 16 }
											}}>
											Outstanding Balance
										</Typography>
									</Box>

									<Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
										<Typography sx={{ marginTop: '2px', fontWeight: 'bold' }}>PHP</Typography>
										<Typography
											sx={{
												marginLeft: .5,
												fontWeight: 'bold',
												fontSize: { xs: 18, sm: 21, md: 21 }
											}}>
											42,700.00
										</Typography>
									</Box>
								</div>
							</Grid>
						</Grid>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
}