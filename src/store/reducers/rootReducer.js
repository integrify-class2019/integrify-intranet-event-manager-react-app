import { combineReducers } from 'redux';
import authReducer from './authReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    events: eventReducer,
});

export default rootReducer;
