import React from 'react'
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import LogoMembaFooter from '../assets/memba_logo/memba_bnw.png'
import CopyrightIcon from '@mui/icons-material/Copyright'

const useStyles = makeStyles(theme => ({
	footer: {
		textAlign: 'center',
		padding: '40px 0 20px',
		width: '100%',
		marginTop: 'auto'
	}
}));

export default function Footer() {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Box sx={{ width: { xs: '80%', sm: 400 }, margin: 'auto', paddingTop: 2 }}>
				<Box
					component="img"
					sx={{
						width: 150,
					}}
					alt="Memba Logo"
					src={LogoMembaFooter}
				/>
				<div sx={{ display: 'flex' }}>
					<Typography
						display="block"
						sx={{
							fontSize: 11,
							color: '#696969',
							marginTop: -2
						}}>
						MEMBA<CopyrightIcon sx={{ fontSize: 10 }} /> 2022 &nbsp;&nbsp; Powered by: Solutions Management Systems Inc.
					</Typography>
				</div>
			</Box>
		</footer>
	)
}