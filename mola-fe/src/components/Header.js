import React from "react";
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
import LogoMemba from '../assets/memba_logo/memba_m.png';
// ICONS
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const useStyles = makeStyles(theme => ({
	btnIcon: {
		[theme.breakpoints.down('sm')]: {
			boxShadow: '0 .3rem .5rem rgba(0,0,0,.15)',
			marginLeft: '5px !important'
		}
	}
}));

export default function Header() {
	const classes = useStyles();

	return (
		<AppBar position="fixed" elevation={0} sx={{ bgcolor: '#fff' }}>
			<Container maxWidth="lg" sx={{ paddingX: { xs: 0, sm: 0, md: '16px' } }}>
				<Toolbar>
					<Typography sx={{ flexGrow: 1, color: '#000', marginTop: '8px' }}>
						<Box
							component="img"
							sx={{
								width: 60
							}}
							alt="Memba Logo"
							src={LogoMemba}
						/>
					</Typography>
					<Tooltip TransitionComponent={Zoom} title="Notifications" arrow>
						<IconButton className={classes.btnIcon}>
							<Badge badgeContent="7" color="error">
								<NotificationsOutlinedIcon />
							</Badge>
						</IconButton>
					</Tooltip>
					<Tooltip TransitionComponent={Zoom} title="Settings" arrow>
						<IconButton className={classes.btnIcon}>
							<SettingsOutlinedIcon />
						</IconButton>
					</Tooltip>
					<Tooltip TransitionComponent={Zoom} title="Sign Out" arrow>
						<IconButton className={classes.btnIcon}>
							<LogoutOutlinedIcon />
						</IconButton>
					</Tooltip>
				</Toolbar>
			</Container>
		</AppBar >
	)
}