import React from 'react';
import PageLayout from '../components/PageLayout';
import { useLocation } from 'react-router-dom';

export default function Home() {
	const location = useLocation();
	console.log(location.pathname)
	return (
		<div>
			Home

		</div>
	)
}