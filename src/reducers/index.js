import { combineReducers } from 'redux';
import peopleReducer from './people.reducer'
import starshipReducer from './starship.reducer';

const appReducer = combineReducers({
    people: peopleReducer,
    starship: starshipReducer,
});
export default appReducer;