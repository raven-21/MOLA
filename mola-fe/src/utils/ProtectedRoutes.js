import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuthToken from "../hooks/useAuthToken";

const ProtectedRoutes = () => {
	let { isAuth } = useAuthToken('http://localhost:5000/user/auth');
	const accessToken = localStorage.getItem("accessToken");

	// let auth = { 'token': isAuth ? true : false };
	if (!accessToken) return <Navigate to="/" />;

	if (isAuth) return <Navigate to="/" />;

	return <Outlet />;
}

export default ProtectedRoutes;