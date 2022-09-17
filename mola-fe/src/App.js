import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, grey } from '@mui/material/colors';
import { useEffect, useState } from 'react';

//HOOKS /CONTEXT
import { useAuth } from './context/authContext';

//COMPONENTS
import ProtectedRoutes from './utils/ProtectedRoutes';
import PublicRoutes from './utils/PublicRoutes';
import LoginLayout from './components/LoginComponents/LoginLayout';
import UserLayout from './components/UserComponents/UserLayout';
import AdminLayout from './components/AdminComponents/AdminLayout';

import Login from './pages/Login';
import NotFound from './pages/NotFound';

//USER PAGES
import Home from "./pages/UserPages/Home";
import Profile from "./pages/UserPages/Profile";
import LoanApply from "./pages/UserPages/LoanApply";

//ADMIN PAGES
import AdminHome from "./pages/AdminPages/Home";

const theme = createTheme({
	palette: {
		success: {
			main: '#57CBA7',
			light: green['A400'],
			dark: '#00bfa5',
			contrastText: '#FFF',
		},
		default: {
			main: grey[500],
			light: grey[400],
			dark: grey[700],
			contrastText: '#000',
		},
		secondary: {
			main: '#184470',
			light: '#65829F',
			dark: '#102D4A',
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
							</Route>
						)}
						{role === 'member' && (
							<Route path="/" element={<UserLayout />}>
								<Route index path="/home" element={<Home />} />
								<Route exact path="/profile/:id" element={<Profile />} />
								<Route exact path="/loan_apply/:id" element={<LoanApply />} />
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
