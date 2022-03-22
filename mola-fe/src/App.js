import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Login from "./pages/Login";
import Home from "./pages/Home";
import Settings from './pages/Settings';
import Layout from "./components/Layout";

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
				<Layout>
					<Routes>
						<Route exact path="/" element={<Login />} />
						<Route path="/home" element={<Home />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</Layout>
			</Router>
		</ThemeProvider>

	);
}

export default App;
