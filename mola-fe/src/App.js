import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import PrivateRoutes from './utils/PrivateRoutes';
import PublicRoutes from './utils/PublicRoutes';
import LoginLayout from './components/LoginComponents/LoginLayout';
import UserLayout from './components/UserComponents/UserLayout';
import AdminLayout from './components/AdminComponents/AdminLayout';

import Login from './pages/Login';
import NotFound from './pages/NotFound';
//USER PAGE
import Home from "./pages/UserPages/Home";
import Profile from "./pages/UserPages/Profile";
import { useEffect, useState } from 'react';



const theme = createTheme({
	typography: {
		fontFamily: 'Quicksand',
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});

function App() {

	const user = JSON.parse(localStorage.getItem("userAuth"));

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route element={<PublicRoutes />}>
						<Route path="/" element={<LoginLayout />}>
							<Route index element={<Login />} />
						</Route>
					</Route>
					{user &&
						<Route element={<PrivateRoutes />}>
							{user.role === 'member' ? (
								<Route path="/" element={<UserLayout />}>
									<Route index path="/home" element={<Home />} />
									<Route exact path="/profile" element={<Profile />} />
								</Route>
							) : (
								<Route path="/" element={<AdminLayout />}>
									<Route index path="/home" element={<Home />} />
									<Route exact path="/profile" element={<Profile />} />
								</Route>
							)
							}
						</Route>
					}




					{/* <Route element={<Navigate to="/" />} path="*" />
						<Route element={<Login />} path="/" />
						<Route element={<PrivateRoutes />}>
							<Route element={<Home />} path="/home" exact />
							<Route element={<Profile />} path="/profile" exact />
							<Route element={<Settings />} path="/settings" exact />
							<Route element={<LoanApply />} path="/loan_apply" exact />
						</Route> */}
				</Routes>
			</Router>
		</ThemeProvider >

	);
}

export default App;
