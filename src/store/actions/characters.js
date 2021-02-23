import axios from 'axios';
import { GET_CHARACTERS, GET_PERSON, SET_LOADING } from './types';

const setLoading = (payload) => ({
	type: SET_LOADING,
	payload,
});

const setCahracters = (payload) => ({
	type: GET_CHARACTERS,
	payload,
});

export const getCharacters = (page) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
		setTimeout(() => {
			dispatch(setCahracters(response.data));
			dispatch(setLoading(false));
		}, 500);
	} catch (error) {
		console.warn(error);
		dispatch(setLoading(false));
	}
};

const setPerson = (payload) => ({
	type: GET_PERSON,
	payload,
});

export const getPerson = (id) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const response = await axios.get(`https://swapi.dev/api/people/${id}`);
		dispatch(setPerson(response.data));
		setTimeout(() => {
			dispatch(setLoading(false));
		}, 1000);
	} catch (error) {
		console.warn(error);
		dispatch(setLoading(false));
	}
};
