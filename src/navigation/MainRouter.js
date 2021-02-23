import { Switch, Route } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail';
import Characters from '../components/Characters';
import { HOME, PERSON_BY_ID } from './routes';

const MainRouter = () => {
	return (
		<Switch>
			<Route exact path={HOME}>
				<Characters />
			</Route>
			<Route exact path={PERSON_BY_ID}>
				<CharacterDetail />
			</Route>
		</Switch>
	);
};

export default MainRouter;
