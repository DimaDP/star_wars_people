import { GET_CHARACTERS, GET_PERSON, SET_LOADING } from '../actions/types';

const initialState = {
	people: [],
	currentPage: 1,
	person: null,
	isLoading: false,
};

const characters = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case GET_CHARACTERS: {
			let page;
			if (!payload.next) {
				page = Math.ceil(+payload.count / 10);
			}
			if (!payload.previous) {
				page = 1;
			}
			if (payload.previous !== null && payload.next) {
				page = +payload.previous[payload.previous.length - 1] + 1;
			}
			return {
				...state,
				people: payload.results,
				currentPage: page,
				count: payload.count,
			};
		}
		case GET_PERSON:
			return {
				...state,
				person: payload,
			};
		case SET_LOADING:
			return {
				...state,
				isLoading: payload,
			};
		default:
			return state;
	}
};

export default characters;
