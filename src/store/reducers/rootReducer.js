import { combineReducers } from 'redux';
import authReducer from './authReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    project: eventReducer,
});

export default rootReducer;
