import { combineReducers } from 'redux';
import calendarActions from './reducer_calendar';
import teamActions from './reducer_team';

const rootReducer = combineReducers({
    calendar: calendarActions,
    team: teamActions
});

export default rootReducer;
 