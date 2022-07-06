import { useEffect, useState } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoutes = () => {
	let { isAuth } = useAuth('http://localhost:5000/user/auth');

	// let auth = { 'token': accessToken ? true : false };
	console.log(isAuth)

	if (isAuth === null) return null;

	return isAuth ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoutes;