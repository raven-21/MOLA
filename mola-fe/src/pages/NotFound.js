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

const NotFound = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	return (
		<div className={classes.root}>
			<div className={classes.page}>
				<Grid container>
					<Grid item xs={12}
						sx={{ marginBottom: -3 }}>
						<Typography
							sx={{
								fontSize: { xs: 20, sm: 25, md: 35 },
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}>
							Oops! &nbsp; <SearchOffOutlinedIcon sx={{ fontSize: { xs: 25, sm: 30, md: 50 } }} />
						</Typography>
					</Grid>
					<Grid item xs={12}
						sx={{ marginBottom: -2 }}>
						<Typography
							sx={{
								fontSize: { xs: 70, sm: 100, md: 120 },
								fontWeight: 700
							}}>
							Error 404
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography
							sx={{ fontSize: { xs: 20, sm: 25, md: 30 } }}>
							Sorry, page not found
						</Typography>
					</Grid>
					<Grid item xs={12} sx={{ marginTop: 5 }}>
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

export default NotFound;