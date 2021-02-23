import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import characters from './reducers/characters';

export default createStore(characters, composeWithDevTools(applyMiddleware(thunk)));
