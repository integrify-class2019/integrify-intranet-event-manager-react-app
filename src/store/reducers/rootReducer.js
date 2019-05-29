import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    event: eventReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer;
