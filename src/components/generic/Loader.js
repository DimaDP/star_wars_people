import { CircularProgress, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
	createStyles({
		fabProgress: {
			color: '29EEF7',
			position: 'absolute',
			top: '50%',
			left: '50%',
			zIndex: 1,
		},
	}),
);

const Loader = () => {
	const classes = useStyles();
	return (
		<div style={{ height: '100%', width: '100%', backgroundColor: 'grey' }}>
			<CircularProgress size={80} thickness={8} className={classes.fabProgress} />
		</div>
	);
};

export default Loader;
