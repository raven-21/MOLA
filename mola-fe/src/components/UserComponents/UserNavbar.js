import React, { useState, useEffect } from "react";
import { Link, useLocation, matchRoutes } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// CUSTOM
import Configs from "../../utils/Configs"
import useFetchId from '../../hooks/useFetchId';

// MATERIAL UI
import { grey } from '@mui/material/colors';
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
import Drawer from "@mui/material/Drawer";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

//IMAGES
import LogoOlivia from '../../assets/olivia_logos/olivia_rectangle.png';

// ICONS
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';

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
		color: '#4994d8 !important',
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
		color: '#4994d8 !important',
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

export default function UserNavbar() {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.up('sm'));

	const classes = useStyles();
	const location = useLocation();

	const { API, userId } = Configs();
	const { data: user } = useFetchId(API + 'user/', userId);

	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const handleLogOut = () => {
		localStorage.clear();
	};

	const handleCloseDrawer = () => {
		setIsDrawerOpen(false);
	};

	useEffect(() => {
		if (fullScreen) setIsDrawerOpen(false);
	}, [fullScreen]);

	useEffect(() => {
		setIsDrawerOpen(false);
	}, [location.pathname]);

	return (
		<AppBar position="fixed" elevation={0} sx={{ bgcolor: '#fff', boxShadow: '0 .1rem .3rem rgba(0,0,0,.10)', }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box
						component="img"
						sx={{
							width: 100,
							// width: 40,
						}}
						alt="Olivia Logo"
						src={LogoOlivia}
					/>
					{/* Spacer */}
					<Typography sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						<Tooltip TransitionComponent={Zoom} title="Members" arrow>
							<IconButton component={Link} to={`/profile/${userId}`} className={location.pathname === `/profile/${userId}` ? classes.active : classes.btnIcon}>
								{user ?
									(
										<Avatar sx={{ bgcolor: '#' + user[0].prof_color, width: 25, height: 25, fontSize: 11, fontWeight: 'bold' }}>{user[0].firstname.charAt(0)}</Avatar>
									)
									:
									(
										<Avatar sx={{ bgcolor: '#184470', width: 25, height: 25, fontSize: 11, fontWeight: 'bold' }}>{null}</Avatar>
									)
								}
							</IconButton>
						</Tooltip>

						<Tooltip TransitionComponent={Zoom} title="Home" arrow>
							<IconButton component={Link} to="/home" className={location.pathname === '/home' ? classes.active : classes.btnIcon}>
								<CottageRoundedIcon />
							</IconButton>
						</Tooltip>

						<Tooltip TransitionComponent={Zoom} title="Notifications" arrow>
							<Badge badgeContent="7" color="error" overlap="circular">
								<IconButton className={classes.btnIcon}>
									<NotificationsRoundedIcon />
								</IconButton>
							</Badge>
						</Tooltip>

						<Tooltip TransitionComponent={Zoom} title="Settings" arrow>
							<IconButton component={Link} to="/settings" className={location.pathname === '/settings' ? classes.active : classes.btnIcon}>
								<SettingsRoundedIcon />
							</IconButton>
						</Tooltip>

						<Tooltip TransitionComponent={Zoom} title="Log Out" arrow>
							<IconButton component={Link} to="/" onClick={handleLogOut} className={classes.btnIcon}>
								<MeetingRoomRoundedIcon />
							</IconButton>
						</Tooltip>
					</Box>
					{/* Drawer */}
					<Box sx={{ display: { xs: 'block', sm: 'none' } }}>
						<IconButton className={classes.btnIcon} onClick={() => setIsDrawerOpen(true)}>
							<TableRowsRoundedIcon />
						</IconButton>

						<SwipeableDrawer anchor="left" open={isDrawerOpen} onOpen={() => isDrawerOpen(true)} onClose={() => setIsDrawerOpen(false)}>
							<Box sx={{ maxWidth: '100%', padding: 1 }}>
								<Paper
									elevation={0}
									sx={{
										// boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
										// boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
										boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 10px 0px',
										paddingX: .5,
										paddingY: .5,
										margin: 1,
										marginBottom: 2,
										borderRadius: 2,
									}}>
									<List sx={{ padding: 0 }}>
										<ListItem disablePadding>
											<ListItemButton className={classes.linkBtn} component={Link} to={`/profile/${userId}`}>
												<ListItemIcon>
													{user ?
														(
															<Avatar sx={{ bgcolor: '#' + user[0].prof_color, width: 45, height: 45, fontWeight: 700 }} >
																{user[0].firstname.charAt(0)}
															</Avatar>
														)
														:
														(
															<Avatar sx={{ bgcolor: '#184470', width: 45, height: 45 }} >
																{null}
															</Avatar>
														)
													}
												</ListItemIcon>
												<ListItemText>
													<Box sx={{ marginLeft: 1.5, marginRight: 1, }}>
														<Typography sx={{ fontWeight: "bold", fontSize: '1.0625rem', color: '#184470' }}>
															{user ? user[0].firstname + ' ' + user[0].lastname : null} {user ? user[0].suffix : ''}
														</Typography>
														<Typography sx={{ fontWeight: 600, fontSize: 12, color: grey[400] }}>
															{user ? user[0].email : null}
														</Typography>
													</Box>
												</ListItemText>
											</ListItemButton>
										</ListItem>
										<Divider sx={{ marginX: 2, marginY: .5 }} />
										<ListItem disablePadding>
											<ListItemButton className={classes.linkBtn} component={Link} to={`/profile/${userId}`}>
												<ListItemText>
													<Typography color="primary" sx={{ fontWeight: 600, fontSize: 13 }}>
														See your profile
													</Typography>
												</ListItemText>
											</ListItemButton>
										</ListItem>
									</List>
								</Paper>
								<List>
									<ListItem disablePadding>
										<ListItemButton component={Link} to="/home" className={classes.linkBtn}>
											<ListItemIcon className={classes.linkList}>
												<Avatar className={location.pathname === "/home" ? classes.avatarIconActive : classes.avatarIcon}>
													<CottageRoundedIcon />
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
										<ListItemButton component={Link} to={`/loan_apply/${userId}`} className={classes.linkBtn}>
											<ListItemIcon className={classes.linkList}>
												<Avatar className={location.pathname === `/loan_apply/${userId}` ? classes.avatarIconActive : classes.avatarIcon}>
													<DriveFileRenameOutlineRoundedIcon />
												</Avatar>
											</ListItemIcon>
											<ListItemText>
												<Typography className={classes.linkTypo}>
													Apply Loan
												</Typography>
											</ListItemText>
										</ListItemButton>
									</ListItem>
									<ListItem disablePadding>
										<ListItemButton className={classes.linkBtn}>
											<ListItemIcon className={classes.linkList}>
												<Badge badgeContent="7" color="error" overlap="circular">
													<Avatar className={classes.avatarIcon}>
														<NotificationsRoundedIcon />
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
												<Avatar className={location.pathname === "/settings" ? classes.avatarIconActive : classes.avatarIcon}>
													<SettingsRoundedIcon />
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
													<MeetingRoomRoundedIcon />
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
								<Divider sx={{ opacity: 0.7, marginTop: 2 }} />
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
						</SwipeableDrawer>

					</Box>
				</Toolbar>
			</Container>
		</AppBar >
	)
}