import { types } from '../actions/people.action';

const initialState = {
    list: [],
    selected: null,
    error: false,
    loading: false,
};

export default function(state = initialState, action){

	switch (action.type) {
		case types.FETCH_PEOPLE_LIST_REQUEST:
			return {...state, loading: true, error:false};

		case types.FETCH_PEOPLE_LIST_SUCCESS:
			const { list } = action.payload;
			return {...state, loading: false, error:false, list};
		
		case types.FETCH_PEOPLE_LIST_FAILURE: 
			return {...state, error: true};
	
		default:
			return state;
	}
}