import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { grey, red, blue } from "@mui/material/colors";
//
import Configs from "../../utils/Configs";
import useFetch from "../../hooks/useFetch";
//Material UI
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
//
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';


const useStyles = makeStyles(theme => ({
	customRadio: {
		'& input': {
			display: 'none'
		},
		'& input:checked + span': {
			border: '3px solid #1565C0',
			backgroundColor: '#F2F7FC'
		}
	},
	radioBtn: {
		padding: 10,
		cursor: 'pointer',
		minHeight: '130px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: '3px solid' + grey[300],
		borderRadius: '10px !important',
		backgroundColor: '#FFF'
	},
	radioLabel: {
		display: 'flex'
	},
	label: {
		fontWeight: 700 + '!important',
		marginBottom: '15px !important'
	}
}));

const AppForm = () => {
	const classes = useStyles();
	const { API } = Configs();

	const { data: loanProducts } = useFetch(API + 'loanApps/loan_products');
	const { data: loanPurposes } = useFetch(API + 'loanApps/loan_purposes');
	const { data: interestTypes } = useFetch(API + 'loanApps/interest_types');

	const [product, setProduct] = useState('');

	const handleChange = (event) => {
		setProduct(event.target.value);
	};

	return (
		<div>
			<Paper elevation={0} sx={{ padding: { xs: 4, sm: 4, md: 7 }, borderRadius: '12px' }}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12} md={12}>
						<FormLabel>
							<Typography className={classes.label} sx={{ fontSize: { xs: 12, sm: 12, md: 15 } }}>
								What is your preferred loan product?
							</Typography>
						</FormLabel>
						<FormControl fullWidth>
							{loanProducts &&
								<Grid container spacing={2}>
									{loanProducts.map((loanProduct) => (
										<Grid item xs={12} sm={4} md={4} key={loanProduct.id}>
											<label className={classes.customRadio}>
												<input type="radio" name="product" value={loanProduct.product_name} onChange={handleChange} />
												<span elevation={0} className={classes.radioBtn}>
													<Grid container>
														<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
															<Box>
																{loanProduct.product_name === 'Long Term' ?
																	<AccountBalanceTwoToneIcon sx={{ fontSize: '60px', color: product === loanProduct.product_name ? blue[800] : grey[400] }} /> :
																	loanProduct.product_name === 'Short Term' ?
																		<AccountBalanceWalletTwoToneIcon sx={{ fontSize: '60px', color: product === loanProduct.product_name ? blue[800] : grey[400] }} /> :
																		<StoreTwoToneIcon sx={{ fontSize: '60px', color: product === loanProduct.product_name ? blue[800] : grey[400] }} />}
															</Box>
														</Grid>
														<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
															<Box>
																<Typography
																	sx={{
																		fontWeight: 700,
																		color: product === loanProduct.product_name ? blue[800] : grey[700]
																	}}>
																	{loanProduct.product_name}
																</Typography>
															</Box>
														</Grid>
													</Grid>
												</span>
											</label>
										</Grid>
									))}
								</Grid>
							}
						</FormControl>
					</Grid>

					<Grid item xs={12} sm={12} md={12}>

					</Grid>
				</Grid>
			</Paper>
		</div >
	);
}

export default AppForm;