import { Card, CardMedia, createStyles, makeStyles, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getCharacters } from '../store/actions/characters';
import Loader from './generic/Loader';

const useStyles = makeStyles(() =>
	createStyles({
		card: {
			maxWidth: 250,
			margin: 5,
			cursor: 'pointer',
		},
		media: {
			height: 350,
			width: 250,
		},
		content: {
			display: 'flex',
			flexWrap: 'wrap',
			margin: '0 auto',
			justifyContent: 'center',
		},
		pagination: {
			justifyContent: 'center',
		},
		paginationTop: {
			justifyContent: 'start',
		},
		ul: {
			justifyContent: 'center',
			'& .MuiPaginationItem-root': {
				color: '#29EEF7',
			},
			'& .Mui-selected': {
				color: '#FFE81F',
			},
		},
		header: {
			fontSize: 20,
			fontStyle: 'bold',
			paddingLeft: 5,
		},
	}),
);

const Characters = () => {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	const count = useSelector((store) => store.count);
	const page = useSelector((store) => store.currentPage);
	const people = useSelector((store) => store.people);
	const { isLoading } = useSelector((store) => store);

	const pages = people && Math.ceil(count / 10);

	const chooseCard = (idx) => {
		history.push(`person?id=${(page - 1) * 10 + idx + 1}`);
	};

	const handleChange = (e) => {
		dispatch(getCharacters(e.target.textContent, page));
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				left: 100,
				behavior: 'smooth',
			});
		}, 200);
	};

	return (
		<>
			{isLoading && <Loader />}
			<section className={classes.content}>
				{people.length &&
					people.map((item, idx) => (
						<Card key={item.name} className={classes.card} onClick={() => chooseCard(idx)}>
							<CardMedia image={`images/${(page - 1) * 10 + idx + 1}.jpg`} className={classes.media} />
							<Typography color='textSecondary' gutterBottom className={classes.header}>
								{item.name}
							</Typography>
						</Card>
					))}
			</section>
			<Pagination
				count={pages}
				variant='outlined'
				shape='rounded'
				classes={{ ul: classes.ul }}
				className={classes.pagination}
				onChange={handleChange}
				hideNextButton
				hidePrevButton
			/>
		</>
	);
};

export default Characters;
