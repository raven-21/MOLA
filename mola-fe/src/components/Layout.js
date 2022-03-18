import React from 'react'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'

import LogoMemba from '../assets/memba_logo/memba.png'
import BgImageLeft from '../assets/svg/undraw_transfer_money_rywa.svg'
import BgImageRight from '../assets/svg/undraw_pay_online_re_aqe6.svg'

import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh'
	},
	page: {
		background: 'transparent', //'#4e73df'
		width: '100%',
		padding: '10px 0 20px',
		[theme.breakpoints.up('md')]: {
			height: '100%',
		},
	},
	logo: {
		textAlign: 'center',
		padding: '30px 0 0px'
	},
	toolbar: theme.mixins.toolbar
}));

export default function Layout({ children }) {
	const classes = useStyles();
	const location = useLocation();

	return (
		<div className={classes.root}>
			{/* Header */}
			{location.pathname !== '/' && <Header />}
			{location.pathname === '/' &&
				<div className={classes.logo}>
					<Box
						component="img"
						sx={{
							width: 250,
						}}
						alt="Memba Logo hihi"
						src={LogoMemba}
					/>
				</div>
			}
			{/* Main */}
			<div className={classes.page}>
				{location.pathname !== '/' && <div className={classes.toolbar}></div>}
				{children}
			</div>
			{/* Footer */}
			{location.pathname === '/' &&
				<div>
					<Box
						component="img"
						sx={{
							width: 300,
							position: 'fixed',
							bottom: 2,
							left: 0,
							zIndex: -1,
							display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' },
							userSelect: 'none'
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
							userSelect: 'none'
						}}
						alt="Memba Logo"
						src={BgImageRight}
					/>
				</div>
			}
			<Footer />
		</div>
	)
}