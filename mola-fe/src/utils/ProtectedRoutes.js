import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Configs from "./Configs";
import useAuthToken from "../hooks/useAuthToken";

const ProtectedRoutes = () => {
	const { API } = Configs();
	let { isAuth } = useAuthToken(API + 'user/auth');
	const accessToken = localStorage.getItem("accessToken");

	// let auth = { 'token': isAuth ? true : false };
	if (!accessToken) return <Navigate to="/" />;

	if (isAuth) return <Navigate to="/" />;

	return <Outlet />;
}

export default ProtectedRoutes;