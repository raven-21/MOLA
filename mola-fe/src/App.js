import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import PrivateRoutes from './utils/PrivateRoutes';
import PublicRoutes from './utils/PublicRoutes';
import LoginLayout from './components/LoginComponents/LoginLayout';
import UserLayout from './components/UserComponents/UserLayout';

import Login from './pages/Login';
import Home from "./pages/Home";

import Profile from "./pages/Profile";
import Settings from './pages/Settings';
import LoanApply from './pages/LoanApply';
import NotFound from './pages/NotFound';


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

					<Route element={<PrivateRoutes />}>
						<Route path="/" element={<UserLayout />}>
							<Route index path="/home" element={<Home />} />
						</Route>
					</Route>

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
