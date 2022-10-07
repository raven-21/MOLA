import { makeStyles } from "@mui/styles";
//MUI
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

const useStyles = makeStyles(theme => ({
	skeleton: {
		borderRadius: '12px !important'
	},
}))

const SkeletonLoader = () => {
	const classes = useStyles();

	return (
		<Stack>
			<Skeleton className={classes.skeleton} variant="rectangular" height={120} />
			<Skeleton sx={{ marginTop: 0.8 }} />
			<Skeleton width="70%" />
		</Stack>
	);
}

export default SkeletonLoader;