import React from "react";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const useStyles = makeStyles(theme => ({

	cardLoan: {
		userSelect: 'none',
		background: '#fff',
		borderRadius: '12px !important',
		minWidth: '300px',
		height: '100%',
		cursor: 'pointer',
	},

}));

export default function CardLoanStatus({ inactives }) {
	const classes = useStyles();

	return (
		<div>
			{inactives.map((inactive) => (
				<Card className={classes.cardLoan} elevation={0} key={inactive.id}>
					<CardActionArea>
						<CardContent
							sx={{
								paddingX: { xs: '18px', sm: '25px', md: '30px' },
								paddingY: { xs: '18px', sm: '20px', md: '30px' },
								color: grey[600],
							}}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
									<Box>
										<Typography
											sx={{
												fontSize: { xs: 18, sm: 18, md: 20, },
												fontWeight: 700
											}}>
											{inactive.app_status}
										</Typography>
										<Typography
											sx={{
												fontSize: { xs: 13, sm: 13, md: 16, }
											}}>
											Loan Status
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'flex-end' }}>
									<Typography
										sx={{
											fontSize: { xs: 10, sm: 12, md: 14 }
										}}>
										Date Applied: {inactive.date_applied}
									</Typography>
								</Grid>
								<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
									<div>
										<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
											<Typography
												sx={{
													fontSize: { xs: 11, sm: 14, md: 16 }
												}}>
												Loan Amount
											</Typography>
										</Box>
										<Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
											<Typography sx={{ marginTop: '2px', fontWeight: 'bold' }}>PHP</Typography>
											<Typography
												sx={{
													marginLeft: .5,
													fontWeight: 'bold',
													fontSize: { xs: 18, sm: 20, md: 20 }
												}}>
												{inactive.loan_amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
											</Typography>
										</Box>
									</div>
								</Grid>
							</Grid>
						</CardContent>
					</CardActionArea>
				</Card>
			))}

		</div>
	);
}