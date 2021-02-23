import { makeStyles, createStyles } from '@material-ui/core/styles';
import Background from '../images/5R2EL3.jpg';
import MainRouter from '../navigation/MainRouter';

const useStyles = makeStyles(() =>
	createStyles({
		main: {
			backgroundImage: `url(${Background})`,
			minHeight: '100vh',
			height: '100%',
			padding: '10px calc(50% - 775px)',
		},
		header: {
			color: '#FFE81F',
			textAlign: 'center',
		},
	}),
);

const Home = () => {
	const classes = useStyles();
	return (
		<main className={classes.main}>
			<header className={classes.header}>
				<h1 className={classes.heading}>
					STAR WARS CHARACTERS FROM <a href='http://swapi.dev'>SWAPI</a>
				</h1>
			</header>
			<MainRouter />
		</main>
	);
};

export default Home;
