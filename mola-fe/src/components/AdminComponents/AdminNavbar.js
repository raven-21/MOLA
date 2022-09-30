import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
//MUI
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { grey } from "@mui/material/colors";
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
import Drawer from "@mui/material/Drawer";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

//IMAGES
import LogoMemba from '../../assets/memba_logo/memba_app.png';
import LogoMembaM from '../../assets/memba_logo/memba_abbrv.png';
import AdminAvatar from '../../assets/admin.jpg';

// ICONS
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import CopyrightIcon from '@mui/icons-material/Copyright';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import ViewStreamRoundedIcon from '@mui/icons-material/ViewStreamRounded';

const useStyles = makeStyles(theme => ({
	btnIcon: {
		// background: '#F0F2F5 !important',
		backgroundColor: '#E4E6EB !important',
		color: '#000 !important',
		marginLeft: '7px !important',
		"&:hover": {
			background: '#D8DADF !important',
		},
	},
	active: {
		background: '#DAE6F1 !important',
		color: '#1770E6 !important',
		marginLeft: '7px !important',
	},
	// link: {
	// 	textDecoration: 'none !important',
	// 	marginTop: '10px !important',
	// 	marginLeft: '7px !important'
	// },
	avatarIcon: {
		// background: '#F0F2F5 !important',
		backgroundColor: '#E4E6EB !important',
		color: '#000 !important',
	},
	avatarIconActive: {
		background: '#DAE6F1 !important',
		color: '#1770E6 !important',
	},
	linkTypo: {
		fontSize: '14px !important',
		fontWeight: 700 + '!important',
		marginLeft: '7px !important',
	},
	linkList: {
		marginLeft: -2,
	},
	linkBtn: {
		borderRadius: '8px !important',
	}
}));

export default function AdminNavbar() {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.up('sm'));

	const classes = useStyles();
	const location = useLocation();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const handleLogOut = () => {
		localStorage.clear();
	}

	useEffect(() => {
		if (fullScreen) setIsDrawerOpen(false);
	}, [fullScreen]);


	return (
		<AppBar position="fixed" elevation={0} sx={{ bgcolor: '#fff', boxShadow: '0 .1rem .3rem rgba(0,0,0,.10)', overflow: 'auto' }}>
			<Container maxWidth="xl" >
				<Toolbar disableGutters>
					<Box
						component="img"
						sx={{
							width: 150,
							// width: 40,
						}}
						alt="Memba Logo"
						src={LogoMemba}
					/>

					{/* Spacer */}
					<Typography sx={{ flexGrow: 1 }}>
					</Typography>
					{/* Links on breakpoint 'md' and up */}
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						<Tooltip TransitionComponent={Zoom} title="Members" arrow>
							<IconButton component={Link} to="/members" className={location.pathname == '/members' ? classes.active : classes.btnIcon}>
								<PersonSearchOutlinedIcon />
							</IconButton>
						</Tooltip>

						<Tooltip TransitionComponent={Zoom} title="Home" arrow>
							<IconButton component={Link} to="/home" className={location.pathname == '/home' ? classes.active : classes.btnIcon}>
								<CottageOutlinedIcon />
							</IconButton>
						</Tooltip>

						<Tooltip TransitionComponent={Zoom} title="Notifications" arrow>
							<Badge badgeContent="7" color="error" overlap="circular">
								<IconButton className={classes.btnIcon}>
									<NotificationsNoneRoundedIcon />
								</IconButton>
							</Badge>
						</Tooltip>

						<Tooltip TransitionComponent={Zoom} title="Settings" arrow>
							<IconButton component={Link} to="/settings" className={location.pathname == '/settings' ? classes.active : classes.btnIcon}>
								<TuneRoundedIcon />
							</IconButton>
						</Tooltip>

						<Tooltip TransitionComponent={Zoom} title="Log Out" arrow>
							<IconButton component={Link} to="/" onClick={handleLogOut} className={classes.btnIcon}>
								<LogoutRoundedIcon />
							</IconButton>
						</Tooltip>
					</Box>
					{/* Drawer */}
					<Box sx={{ display: { xs: 'block', sm: 'none' } }}>
						<IconButton className={classes.btnIcon} onClick={() => setIsDrawerOpen(true)}>
							<MenuRoundedIcon />
						</IconButton>

						<Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
							<Box sx={{ maxWidth: 330, padding: 1 }}>
								<Paper
									sx={{
										// boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
										boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 10px 0px',
										// boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
										paddingX: 1.4,
										paddingY: 2,
										margin: 1,
										marginBottom: 2,
										borderRadius: 2,
										display: 'flex',
										alignItems: 'center',
									}}>
									<Avatar src={AdminAvatar} sx={{ width: 45, height: 45 }} />
									<Box sx={{ flexGrow: 1, marginLeft: 1.5, marginRight: 1, }}>
										<Typography sx={{ fontWeight: "bold", fontSize: '1.0625rem', color: '#184470' }}>
											Administrator
										</Typography>
										<Typography sx={{ fontWeight: 600, fontSize: 12, color: grey[400] }}>
											admin@gmail.com
										</Typography>
									</Box>
									<IconButton className={classes.btnIcon} onClick={() => setIsDrawerOpen(false)}>
										<ChevronRightRoundedIcon />
									</IconButton>
								</Paper>
								{/* <br />
								<Divider sx={{ opacity: 0.5 }} /> */}
								<List>
									<ListItem disablePadding>
										<ListItemButton component={Link} to="/members" className={classes.linkBtn}>
											<ListItemIcon className={classes.linkList}>
												<Avatar className={location.pathname === "/members" ? classes.avatarIconActive : classes.avatarIcon}>
													<PersonSearchOutlinedIcon />
												</Avatar>
											</ListItemIcon>
											<ListItemText>
												<Typography className={classes.linkTypo}>
													Members
												</Typography>
											</ListItemText>
										</ListItemButton>
									</ListItem>
									<ListItem disablePadding>
										<ListItemButton component={Link} to="/home" className={classes.linkBtn}>
											<ListItemIcon className={classes.linkList}>
												<Avatar className={location.pathname === "/home" ? classes.avatarIconActive : classes.avatarIcon}>
													<CottageOutlinedIcon />
												</Avatar>
											</ListItemIcon>
											<ListItemText>
												<Typography className={classes.linkTypo}>
													Home
												</Typography>
											</ListItemText>
										</ListItemButton>
									</ListItem>
									<ListItem disablePadding>
										<ListItemButton className={classes.linkBtn}>
											<ListItemIcon className={classes.linkList}>
												<Badge badgeContent="7" color="error" overlap="circular">
													<Avatar className={classes.avatarIcon}>
														<NotificationsNoneRoundedIcon />
													</Avatar>
												</Badge>
											</ListItemIcon>
											<ListItemText>
												<Typography className={classes.linkTypo}>
													Notifications
												</Typography>
											</ListItemText>
										</ListItemButton>
									</ListItem>
									<ListItem disablePadding>
										<ListItemButton component={Link} to="/settings" className={classes.linkBtn}>
											<ListItemIcon className={classes.linkList}>
												<Avatar className={classes.avatarIcon}>
													<TuneRoundedIcon />
												</Avatar>
											</ListItemIcon>
											<ListItemText>
												<Typography className={classes.linkTypo}>
													Settings
												</Typography>
											</ListItemText>
										</ListItemButton>
									</ListItem>
									<ListItem disablePadding>
										<ListItemButton component={Link} to="/" onClick={handleLogOut} className={classes.linkBtn}>
											<ListItemIcon className={classes.linkList}>
												<Avatar className={classes.avatarIcon}>
													<LogoutRoundedIcon />
												</Avatar>
											</ListItemIcon>
											<ListItemText>
												<Typography className={classes.linkTypo}>
													Log Out
												</Typography>
											</ListItemText>
										</ListItemButton>
									</ListItem>
								</List>
								<Divider sx={{ opacity: 0.7 }} />
								<Box sx={{ display: 'flex', alignItems: 'center', margin: 2, color: grey[400] }}>
									<Typography
										sx={{
											fontSize: 12,
											fontWeight: 400,
										}}>
										&#169;
										2022 Memba PH · Powered by: Solutions Management Systems Inc.
									</Typography>
								</Box>
							</Box>
						</Drawer>
					</Box>
				</Toolbar>
			</Container >
		</AppBar >
	)
}