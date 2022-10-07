import React from "react";
import { grey, red, blue } from "@mui/material/colors";
//MUI components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

//MUI icons
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';
//Libraries
import { Controller } from "react-hook-form";
import useStyles from "../../pages/user/apply-loan/styles";
//

export const FormProduct = ({ control, name, loanProducts, product }) => {
	const { classes } = useStyles();

	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, value },
				fieldState: { error },
			}) => (
				<div>
					<FormLabel sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography className={classes.formLabel} sx={{ fontSize: { xs: 12, sm: 12, md: 15 }, color: error ? red[700] : null }}>
							What is your preferred loan product?
						</Typography>&nbsp;
						<Typography className={classes.labelRequired} sx={{ fontSize: { xs: 11, sm: 11, md: 12 } }}>
							{error ? error.message : null}
						</Typography>
					</FormLabel>
					<FormControl fullWidth>
						{loanProducts &&
							<Grid container spacing={2}>
								{loanProducts.map((loanProduct) => (
									<Grid item xs={6} sm={4} md={4} key={loanProduct.id}>
										<label className={classes.customRadio} value={value}>
											<input type="radio" name="product" value={loanProduct.id} onChange={onChange} />
											<span elevation={0} className={classes.defaultRadio} >
												<Grid container>
													<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
														<Box>
															{loanProduct.product_name === 'Long Term' ?
																<AccountBalanceTwoToneIcon
																	sx={{
																		fontSize: { xs: 40, sm: 45, md: 50 },
																		color: +product === loanProduct.id ? blue[800] : grey[400]
																	}} /> :
																loanProduct.product_name === 'Short Term' ?
																	<AccountBalanceWalletTwoToneIcon
																		sx={{
																			fontSize: { xs: 40, sm: 45, md: 50 },
																			color: +product === loanProduct.id ? blue[800] : grey[400]
																		}} /> :
																	<StoreTwoToneIcon
																		sx={{
																			fontSize: { xs: 40, sm: 45, md: 50 },
																			color: +product === loanProduct.id ? blue[800] : grey[400]
																		}} />}
														</Box>
													</Grid>
													<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
														<Box>
															<Typography
																sx={{
																	fontWeight: 700,
																	color: +product === loanProduct.id ? blue[800] : grey[700],
																	fontSize: { xs: 12, sm: 12, md: 15 },
																	textAlign: 'center'
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
				</div >
			)}
		/>
	);
}
