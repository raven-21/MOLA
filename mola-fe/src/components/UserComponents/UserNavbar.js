import React, { useState } from "react";
import { Link, useLocation, matchRoutes } from "react-router-dom";
import { makeStyles } from "@mui/styles";
// CUSTOM
import Configs from "../../utils/Configs"
import useFetchId from '../../hooks/useFetchId';
// MATERIAL UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import Zoom from '@mui/material/Zoom';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import { cyan } from '@mui/material/colors';
//IMAGES
import LogoMemba from '../../assets/memba_logo/memba_inline.png';
import LogoMembaM from '../../assets/memba_logo/memba_abbrv.png';
// ICONS
import CottageIcon from '@mui/icons-material/Cottage';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';


const useStyles = makeStyles(theme => ({
	btnIcon: {
		background: '#F0F2F5 !important',
		color: '#000 !important',
		"&:hover": {
			background: '#D8DADF !important',
		},
	},
	active: {
		background: '#DAE6F1 !important',
		color: '#1770E6 !important',
	},
	link: {
		textDecoration: 'none !important',
		marginTop: '10px !important',
		marginLeft: '7px !important'
	}
}));

export default function UserNavbar() {
	const classes = useStyles();
	const location = useLocation();
	const { API, userId } = Configs();
	const { data: user } = useFetchId(API + 'user/', userId);

	const handleLogOut = () => {
		localStorage.clear();
	}

	return (
		<AppBar position="fixed" elevation={0} sx={{ bgcolor: '#fff', boxShadow: '0 .1rem .3rem rgba(0,0,0,.10)', }}>
			<Container maxWidth="lg" sx={{ paddingX: { xs: 0, sm: 0, md: '16px' }, paddingBottom: '10px', overflowX: 'auto' }}>
				<Toolbar>
					<Typography sx={{ flexGrow: 1, color: '#000', margin: 'auto !important' }}>
						<Box
							component="img"
							sx={{
								width: 150,
								marginTop: '10px',
								display: { xs: 'none', sm: 'block' }
							}}
							alt="Memba Logo"
							src={LogoMemba}
						/>
						<Box
							component="img"
							sx={{
								width: 40,
								marginTop: '10px',
								display: { xs: 'block', sm: 'none' }
							}}
							alt="Memba Logo"
							src={LogoMembaM}
						/>
					</Typography>
					<Box ml={5}></Box>
					<Tooltip TransitionComponent={Zoom} title="Profile" arrow>
						<Link to={`/profile/${userId}`} className={classes.link}>
							<IconButton className={location.pathname == `/profile/${userId}` ? classes.active : classes.btnIcon}>
								<Avatar sx={{ bgcolor: '#184470', width: 25, height: 25, fontSize: 11, fontWeight: 'bold' }}>{user ? user[0].firstname.charAt(0) : null}</Avatar>
							</IconButton>
						</Link>
					</Tooltip>
					<Tooltip TransitionComponent={Zoom} title="Home" arrow>
						<Link to="/home" className={classes.link}>
							<IconButton className={location.pathname == '/home' ? classes.active : classes.btnIcon}>
								<CottageIcon />
							</IconButton>
						</Link>
					</Tooltip>
					<Tooltip TransitionComponent={Zoom} title="Notifications" arrow>
						<Link to="/home" className={classes.link}>
							<IconButton className={classes.btnIcon}>
								<Badge badgeContent="7" color="error">
									<NotificationsIcon />
								</Badge>
							</IconButton>
						</Link>
					</Tooltip>
					<Tooltip TransitionComponent={Zoom} title="Settings" arrow>
						<Link to="/settings" className={classes.link}>
							<IconButton className={location.pathname == '/settings' ? classes.active : classes.btnIcon}>
								<SettingsIcon />
							</IconButton>
						</Link>
					</Tooltip>
					<Tooltip TransitionComponent={Zoom} title="Sign Out" arrow>
						<Link to="/" onClick={handleLogOut} className={classes.link}>
							<IconButton className={classes.btnIcon}>
								<MeetingRoomIcon />
							</IconButton>
						</Link>
					</Tooltip>
				</Toolbar>
			</Container>
		</AppBar >
	)
}