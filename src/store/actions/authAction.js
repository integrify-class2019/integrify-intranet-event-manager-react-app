export const signIn = credentials => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        })
        .catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
        .auth()
        .signOut()
        .then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        });
};
