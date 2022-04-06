import React from "react";
import { Link } from "react-router-dom";
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
import LogoMemba from '../assets/memba_logo/memba_inline.png';
import LogoMembaM from '../assets/memba_logo/memba_abbrv.png';
// ICONS
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';


const useStyles = makeStyles(theme => ({
	btnIcon: {
		[theme.breakpoints.down('sm')]: {
			boxShadow: '0 .2rem .3rem rgba(0,0,0,.15)',
			marginLeft: '8px !important'
		}
	},
	link: {
		textDecoration: 'none !important'
	}
}));

export default function Header() {
	const classes = useStyles();

	return (
		<AppBar position="fixed" elevation={0} sx={{ bgcolor: '#fff' }}>
			<Container maxWidth="xl" sx={{ paddingX: { xs: 0, sm: 0, md: '16px' }, paddingBottom: '10px', overflowX: 'auto' }}>
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
					<Tooltip TransitionComponent={Zoom} title="Profile" arrow>
						<Link to="/profile" className={classes.link}>
							<IconButton className={classes.btnIcon}>
								{/* <AccountCircleOutlinedIcon /> */}
								<Avatar sx={{ bgcolor: cyan[700], width: 25, height: 25, fontSize: 11, fontWeight: 'bold' }}>JL</Avatar>
							</IconButton>
						</Link>
					</Tooltip>
					<Tooltip TransitionComponent={Zoom} title="Home" arrow>
						<Link to="/home">
							<IconButton className={classes.btnIcon}>
								<CottageOutlinedIcon />
							</IconButton>
						</Link>
					</Tooltip>
					<Tooltip TransitionComponent={Zoom} title="Notifications" arrow>
						<IconButton className={classes.btnIcon}>
							<Badge badgeContent="7" color="error">
								<NotificationsOutlinedIcon />
							</Badge>
						</IconButton>
					</Tooltip>

					<Tooltip TransitionComponent={Zoom} title="Settings" arrow>
						<Link to="/settings">
							<IconButton className={classes.btnIcon}>
								<SettingsOutlinedIcon />
							</IconButton>
						</Link>
					</Tooltip>
					<Tooltip TransitionComponent={Zoom} title="Sign Out" arrow>
						<Link to="/">
							<IconButton className={classes.btnIcon}>
								<LogoutOutlinedIcon />
							</IconButton>
						</Link>
					</Tooltip>
				</Toolbar>
			</Container>
		</AppBar >
	)
}