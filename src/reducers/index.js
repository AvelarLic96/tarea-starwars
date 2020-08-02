import { combineReducers } from 'redux';
import peopleReducer from './people.reducer'

const appReducer = combineReducers({
    people: peopleReducer,
});
export default appReducer;