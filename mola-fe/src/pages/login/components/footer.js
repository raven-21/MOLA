import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import LogoOliviaFooter from '../../../assets/olivia_logos/olivia_rectangleBW.png';

import CopyrightIcon from '@mui/icons-material/Copyright';

const useStyles = makeStyles(theme => ({
	footer: {
		textAlign: 'center',
		padding: '40px 0 20px',
		width: '100%',
		marginTop: 'auto',
	},
}));

export default function Footer() {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Box sx={{ width: { xs: '80%', sm: 400 }, margin: 'auto' }}>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<Box
						mb={1.5}
						component="img"
						sx={{
							width: { xs: 90, sm: 90, md: 100 },
						}}
						alt="Memba Logo"
						src={LogoOliviaFooter}
					/>
				</Box>

				<div sx={{ display: 'flex' }}>
					<Typography
						display="block"
						sx={{
							fontSize: { xs: 8, sm: 8, md: 10 },
							color: '#696969',
						}}>
						OLIVIA<CopyrightIcon sx={{ fontSize: 10 }} /> 2022 &nbsp;·&nbsp; MEMBA PH &nbsp;·&nbsp; Powered by: Solutions Management Systems Inc.
					</Typography>
				</div>
			</Box>
		</footer>
	)
}