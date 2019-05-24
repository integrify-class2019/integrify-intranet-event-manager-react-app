import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    events: eventReducer,
    firestore: firestoreReducer,
});

export default rootReducer;
