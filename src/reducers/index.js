import { combineReducers } from 'redux';
import Calendar from './reducer_calendar';

const rootReducer = combineReducers({
    calendar: Calendar
});

export default rootReducer;
 