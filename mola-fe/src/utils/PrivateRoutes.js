import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoutes = () => {
	let { isAuth, user } = useAuth('http://localhost:5000/user/auth');
	const accessToken = localStorage.getItem("accessToken");

	let auth = { 'token': isAuth ? true : false };
	if (!accessToken) return <Navigate to="/" />;

	return auth.token ? <Navigate to="/" /> : <Outlet />
}

export default PrivateRoutes;