import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
//Material UI Components
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
//Material ICONS
import SearchOffOutlinedIcon from '@mui/icons-material/SearchOffOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import LinkOffOutlinedIcon from '@mui/icons-material/LinkOffOutlined';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
	},
	page: {
		background: 'transparent', //'#4e73df'
		width: '100%',
		padding: '10px 0 20px',
		height: 'auto',
		margin: 'auto',
		textAlign: 'center'
	},
}));

const NotAvailable = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	return (
		<div className={classes.root}>
			<div className={classes.page}>
				<Grid container>
					<Grid item xs={12}
						sx={{ marginBottom: 0 }}>
						<Typography
							sx={{
								fontSize: { xs: 20, sm: 25, md: 35 },
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}>
							Oops! &nbsp; <LinkOffOutlinedIcon sx={{ fontSize: { xs: 25, sm: 30, md: 50 } }} />
						</Typography>
					</Grid>
					<Grid item xs={12}
						sx={{ marginBottom: 0 }}>
						<Typography
							sx={{
								fontSize: { xs: 18, sm: 25, md: 30 },
								fontWeight: 700
							}}>
							This Page Isn't Available
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography
							sx={{ fontSize: { xs: 13, sm: 15, md: 20 } }}>
							Check to see if the link you're trying to open is correct.
						</Typography>
					</Grid>
					<Grid item xs={12} sx={{ marginTop: { xs: 2, sm: 2, md: 3 } }}>
						<Button variant="outlined" onClick={() => navigate(-1)}>
							<ArrowBackOutlinedIcon fontSize="small" />
							<Typography variant='overline'
								sx={{
									marginX: 2,
									marginY: -0.5,
									letterSpacing: 1,
									textTransform: 'none',
								}}>
								Go back
							</Typography>
						</Button>
					</Grid>
				</Grid>
			</div>
		</div >
	);
}

export default NotAvailable;