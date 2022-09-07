import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
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
import LogoMemba from '../../assets/memba_logo/memba_inline.png';
import LogoMembaM from '../../assets/memba_logo/memba_abbrv.png';
// ICONS
import CottageIcon from '@mui/icons-material/Cottage';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';


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

export default function AdminNavbar() {
	const classes = useStyles();
	const location = useLocation();

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
								display: {
									xs: 'none',
									sm: 'block'
								}
							}}
							alt="Memba Logo"
							src={LogoMemba}
						/>
						<Box
							component="img"
							sx={{
								width: 40,
								marginTop: '10px',
								display: {
									xs: 'block',
									sm: 'none'
								}
							}}
							alt="Memba Logo"
							src={LogoMembaM}
						/>
					</Typography>
					<Box ml={5}></Box>
					{/* <Tooltip TransitionComponent={Zoom} title="Profile" arrow>
						<Link to="/profile" className={classes.link}>
							<IconButton className={location.pathname == '/profile' ? classes.active : classes.btnIcon}>
								<Avatar sx={{ bgcolor: '#184470', width: 25, height: 25, fontSize: 11, fontWeight: 'bold' }}>A</Avatar>
							</IconButton>

						</Link>
					</Tooltip> */}
					<Tooltip TransitionComponent={Zoom} title="Members" arrow>
						<Link to="/home" className={classes.link}>
							<IconButton className={location.pathname == '/users' ? classes.active : classes.btnIcon}>
								<PersonSearchOutlinedIcon />
							</IconButton>
						</Link>
					</Tooltip>

					<Tooltip TransitionComponent={Zoom} title="Home" arrow>
						<Link to="/home" className={classes.link}>
							<IconButton className={location.pathname == '/home' ? classes.active : classes.btnIcon}>
								<CottageOutlinedIcon />
							</IconButton>
						</Link>
					</Tooltip>

					<Tooltip TransitionComponent={Zoom} title="Notifications" arrow>
						<Link to="/home" className={classes.link}>
							<IconButton className={classes.btnIcon}>
								<Badge badgeContent="7" color="error">
									<NotificationsNoneRoundedIcon />
								</Badge>
							</IconButton>
						</Link>
					</Tooltip>

					<Tooltip TransitionComponent={Zoom} title="Settings" arrow>
						<Link to="/settings" className={classes.link}>
							<IconButton className={location.pathname == '/settings' ? classes.active : classes.btnIcon}>
								<TuneRoundedIcon />
							</IconButton>
						</Link>
					</Tooltip>
					<Tooltip TransitionComponent={Zoom} title="Sign Out" arrow>
						<Link to="/" onClick={handleLogOut} className={classes.link}>
							<IconButton className={classes.btnIcon}>
								<MeetingRoomOutlinedIcon />
							</IconButton>
						</Link>
					</Tooltip>
				</Toolbar>
			</Container>
		</AppBar >
	)
}