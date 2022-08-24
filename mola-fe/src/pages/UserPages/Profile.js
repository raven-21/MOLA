import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';
import useFetchId from '../../hooks/useFetchId';
import Configs from '../../utils/Configs';
//MATERIAL
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//Custom components
import BtnGrp from '../../components/ProfileComponents/BtnGrp';
import ProfileInfo from '../../components/ProfileComponents/ProfileInfo';
import ProfileInfoLG from '../../components/ProfileComponents/ProfileInfoLG';
import SkeletonLoader from '../../components/SkeletonLoader';
import useStyles from './usePageStyles';


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
							// <div>
							// 	<Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
							// 		<ProfileInfoLG user={user} />
							// 	</Box>
							// 	<Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
							// 		<ProfileInfo user={user} />
							// 	</Box>
							// </div>
							<ProfileInfoLG user={user} />
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

					{/* <BtnGrp /> */}
				</div>
			</Container >
		</div >
	)
}