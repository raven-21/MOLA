import React from 'react';
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';
import useFetchId from '../../hooks/useFetchId';
import Configs from '../../utils/Configs';
//MATERIAL
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
//Custom components
import BtnGrp from '../../components/ProfileComponents/BtnGrp';
import ProfileInfo from '../../components/ProfileComponents/ProfileInfo';
import ProfileInfoLG from '../../components/ProfileComponents/ProfileInfoLG';

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
	const { id } = useParams();
	const { API } = Configs();
	const { data: user } = useFetchId(API + 'user/', id);

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					<Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
						{user &&
							<ProfileInfoLG user={user} />
						}
					</Box>
					<Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
						{user &&
							<ProfileInfo user={user} />
						}
					</Box>
					<BtnGrp />
				</div>
			</Container >
		</div >
	)
}