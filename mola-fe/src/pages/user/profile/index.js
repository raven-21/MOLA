import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';
//Custom hooks
import useFetchId from '../../../hooks/useFetchId';
import Configs from '../../../utils/Configs';
//MATERIAL
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//Custom components
import ProfileInfo from './components/profile-info/index';
import SkeletonLoader from '../../../features/SkeletonLoader';
import useStyles from '../styles';


export default function Profile() {
	const { classes } = useStyles();
	const { API } = Configs();
	const { id } = useParams();
	const { data: user } = useFetchId(API + 'user/', id);

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					{user ?
						(
							<ProfileInfo user={user} />
						)
						:
						(
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12} md={6}>
									<SkeletonLoader />
								</Grid>
								<Grid item xs={12} sm={12} md={6}>
									<SkeletonLoader />
								</Grid>
							</Grid>
						)
					}
				</div>
			</Container >
		</div >
	)
}