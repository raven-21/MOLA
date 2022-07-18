import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';
import useFetchId from '../../hooks/useFetchId';
import Configs from '../../utils/Configs';
//MATERIAL
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
//Custom components
import BtnGrp from '../../components/ProfileComponents/BtnGrp';
import ProfileInfo from '../../components/ProfileComponents/ProfileInfo';
import ProfileInfoLG from '../../components/ProfileComponents/ProfileInfoLG';
import SkeletonLoader from '../../components/SkeletonLoader';

const useStyles = makeStyles(theme => ({
	root: {
		background: '#F0F1F3',
		height: '100%',
	},
	content: {
		padding: '24px 16px',
		overflowX: 'auto',
		[theme.breakpoints.down('sm')]: {
			padding: '24px 0'
		}
	},
}));

export default function Profile() {
	const classes = useStyles();
	const { API } = Configs();
	const { id } = useParams();
	const { data: user } = useFetchId(API + 'user/', id);

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					{user ?
						(
							<div>
								<Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
									<ProfileInfoLG user={user} />
								</Box>
								<Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
									<ProfileInfo user={user} />
								</Box>
							</div>
						)
						:
						(<SkeletonLoader />)
					}

					{/* <BtnGrp /> */}
				</div>
			</Container >
		</div >
	)
}