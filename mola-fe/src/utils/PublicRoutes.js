import { Outlet, Navigate } from "react-router-dom";

const PublicRoutes = () => {
	const authToken = localStorage.getItem("accessToken");
	let auth = { 'token': authToken ? true : false };

	return (
		auth.token ? <Navigate to="/home" /> : <Outlet />
	)
}

export default PublicRoutes;