import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { getCharacters } from './store/actions/characters';
import Home from './components/Home';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCharacters(1));
	}, []);
	return (
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	);
}

export default App;
