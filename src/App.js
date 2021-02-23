import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { getCharacters } from './store/actions/characters';
import Home from './components/Home';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCharacters(1));
	}, []);
	return (
		<HashRouter>
			<Home />
		</HashRouter>
	);
}

export default App;
