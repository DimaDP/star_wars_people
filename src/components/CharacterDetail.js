import { Card, CardMedia, createStyles, Divider, makeStyles, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPerson } from '../store/actions/characters';
import Loader from './generic/Loader';

const useStyles = makeStyles(() =>
	createStyles({
		card: {
			maxWidth: 400,
			margin: '40px auto',
		},
		media: {
			height: 600,
			width: 400,
		},
		content: {
			display: 'flex',
			flexWrap: 'wrap',
			margin: '0 auto',
			justifyContent: 'center',
		},
		fabProgress: {
			color: 'red',
			position: 'absolute',
			top: '50%',
			left: '50%',
			zIndex: 1,
		},
		header: {
			fontSize: 26,
			fontStyle: 'bold',
			paddingLeft: 10,
		},
		text: {
			fontSize: 20,
			fontStyle: 'bold',
			paddingLeft: 10,
		},
	}),
);

const CharacterDetail = () => {
	const params = useParams();
	const { person } = useSelector((store) => store);
	const isLoading = useSelector((store) => store.isLoading);
	const dispatch = useDispatch();

	const idx = +params.id;
	const classes = useStyles();

	useEffect(() => {
		dispatch(getPerson(idx));
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	return (
		person && (
			<Card className={classes.card}>
				<CardMedia image={`images/${idx}.jpg`} className={classes.media} />
				<Typography color='textPrimary' gutterBottom className={classes.header}>
					{person.name}
				</Typography>
				<Divider />
				<Typography color='textPrimary' gutterBottom className={classes.text}>
					{person.birth_year}
				</Typography>
				<Divider />
				<Typography color='textPrimary' gutterBottom className={classes.text}>
					{person.gender}
				</Typography>
			</Card>
		)
	);
};

export default CharacterDetail;
