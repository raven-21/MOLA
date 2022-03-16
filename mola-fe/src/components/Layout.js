import React from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'

import LogoMemba from '../assets/memba_logo/memba.png'
import BgImageLeft from '../assets/svg/undraw_transfer_money_rywa.svg'
import BgImageRight from '../assets/svg/undraw_pay_online_re_aqe6.svg'

import Footer from './Footer'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh'
	},
	page: {
		background: 'transparent', //'#4e73df'
		width: '100%',
		padding: '10px 0 20px'
	},
	header: {
		textAlign: 'center',
		padding: '30px 0 10px'
	},
}));

export default function Layout({ children }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{/* Header */}
			<div className={classes.header}>
				<Box
					component="img"
					sx={{
						width: 250,
					}}
					alt="Memba Logo"
					src={LogoMemba}
				/>
			</div>
			{/* Main */}
			<div className={classes.page}>
				{children}
			</div>
			{/* Footer */}
			<Box
				component="img"
				sx={{
					width: 300,
					position: 'fixed',
					bottom: 2,
					left: 0,
					zIndex: -1,
					display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' },
				}}
				alt="Memba Logo"
				src={BgImageLeft}
			/>
			<Box
				component="img"
				sx={{
					width: 300,
					position: 'fixed',
					bottom: 5,
					right: 0,
					zIndex: -1,
					display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' },
				}}
				alt="Memba Logo"
				src={BgImageRight}
			/>
			<Footer />
		</div>
	)
}