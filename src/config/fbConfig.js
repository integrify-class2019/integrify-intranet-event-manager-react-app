import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAt199AU_HtYeRjLG9tHYlwrw9QKGQvPqg',
    authDomain: 'eventify-af40c.firebaseapp.com',
    databaseURL: 'https://eventify-af40c.firebaseio.com',
    projectId: 'eventify-af40c',
    storageBucket: 'eventify-af40c.appspot.com',
    messagingSenderId: '189489424098',
    appId: '1:189489424098:web:256697c71cfddaa9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
