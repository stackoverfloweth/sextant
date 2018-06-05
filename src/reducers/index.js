import { combineReducers } from 'redux';
import calendarActions from './reducer_calendar';
import teamActions from './reducer_team';
import memberActions from './reducer_member';

const rootReducer = combineReducers({
    calendar: calendarActions,
    team: teamActions,
    memberCurrentlyBeingEdited: memberActions,
});

export default rootReducer;
 