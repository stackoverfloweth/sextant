import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import calendarActions from './reducer_calendar'
import eventActions from './reducer_event'
import settingActions from './reducer_setting'
import jiraActions from './reducer_jira'

const rootReducer = combineReducers({
    form: formReducer,
    calendar: calendarActions,
    settings: settingActions,
    eventCurrentlyBeingEdited: eventActions,
    jira: jiraActions,
});

export default rootReducer;
