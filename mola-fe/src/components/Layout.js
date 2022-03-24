import React from 'react'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'

import LogoMemba from '../assets/memba_logo/memba.png'

import Header from './Header';
import Footer from './Footer';


const useStyles = makeStyles(theme => ({
	rootA: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
	},
	rootB: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		background: '#F0F1F3'
	},
	pageA: {
		background: 'transparent', //'#4e73df'
		width: '100%',
		padding: '10px 0 20px',
		height: 'auto',
		// [theme.breakpoints.down('sm')]: {
		// 	height: 'auto',
		// },
	},
	pageB: {
		background: 'transparent', //'#4e73df'
		width: '100%',
		padding: '70px 0 20px',
		height: 'auto',
		// [theme.breakpoints.down('sm')]: {
		// 	height: 'auto',
		// },
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
		<div>
			{location.pathname === '/' &&
				<div className={classes.rootA}>
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
					<div className={classes.pageA}>
						{children}
					</div>
					<Footer />
				</div>
			}
			{location.pathname !== '/' &&
				<div className={classes.rootB}>
					<Header />
					<div className={classes.pageB}>
						{children}
					</div>
				</div>
			}
		</div>
		// <div className={classes.root}>
		// 	{/* Header */}
		// 	{location.pathname !== '/' && <Header />}
		// 	{location.pathname === '/' &&
		// 		<div className={classes.logo}>
		// 			<Box
		// 				component="img"
		// 				sx={{
		// 					width: 250,
		// 				}}
		// 				alt="Memba Logo hihi"
		// 				src={LogoMemba}
		// 			/>
		// 		</div>
		// 	}
		// 	{/* Main */}
		// 	<div className={classes.page}>
		// 		{location.pathname !== '/' && <div className={classes.toolbar}></div>}
		// 		{children}
		// 	</div>
		// 	{/* Footer */}
		// 	<Footer />
		// </div>
	)
}