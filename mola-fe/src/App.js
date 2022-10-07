import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, grey } from '@mui/material/colors';
import { useEffect, useState } from 'react';

//HOOKS /CONTEXT
import { useAuth } from './context/authContext';

//COMPONENTS
import ProtectedRoutes from './utils/ProtectedRoutes';
import PublicRoutes from './utils/PublicRoutes';

import UserLayout from '../src/layout/user/layout/index';
import AdminLayout from '../src/layout/admin/layout/index';

import Login from '../src/pages/login/index';
import LoginLayout from '../src/pages/login/components/layout';
import NotFound from './pages/others/not-found';

//USER PAGES
import Home from "../src/pages/user/home/index";
import Profile from "../src/pages/user/profile/index";
import LoanApply from "../src/pages/user/apply-loan/index";
import Settings from "../src/pages/user/settings/index";

//ADMIN PAGES
import AdminHome from "../src/pages/admin/home/index";
import Members from "../src/pages/admin/members/index";

const theme = createTheme({
	palette: {
		success: {
			main: '#96c90a',
			light: green['A400'],
			dark: '#7ba909',
			contrastText: '#FFF',
		},
		default: {
			main: grey[500],
			light: grey[400],
			dark: grey[700],
			contrastText: '#000',
		},
		secondary: {
			main: '#4994d8',
			light: '#65829F',
			dark: '#2268a4',
			contrastText: '#FFF',
		}
	},
	typography: {
		fontFamily: 'Quicksand',
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
	components: {
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					borderRadius: 8,
					padding: 10,
					fontSize: 12,
					boxShadow: 'rgba(0, 0, 0, 0.4) 1px 2px 5px'
				}
			}
		}
	}
});

function App() {
	const { user } = useAuth();
	const [role, setRole] = useState(null);

	useEffect(() => {
		let userRole = localStorage.getItem("userRole");
		if (userRole) setRole(userRole);
	}, [user]);

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route element={<PublicRoutes />}>
						<Route path="/" element={<LoginLayout />}>
							<Route index element={<Login />} />
						</Route>
					</Route>
					<Route element={<ProtectedRoutes />}>
						{role === 'admin' && (
							<Route path="/" element={<AdminLayout />}>
								<Route index path="/home" element={<AdminHome />} />
								<Route exact path="/members" element={<Members />} />
								<Route path="*" element={<NotFound />} />
							</Route>
						)}
						{role === 'member' && (
							<Route path="/" element={<UserLayout />}>
								<Route index path="/home" element={<Home />} />
								<Route exact path="/profile/:id" element={<Profile />} />
								<Route exact path="/loan_apply/:id" element={<LoanApply />} />
								<Route exact path="/settings" element={<Settings />} />
								<Route path="*" element={<NotFound />} />
							</Route>
						)}
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</Router>
		</ThemeProvider >

	);
}

export default App;
