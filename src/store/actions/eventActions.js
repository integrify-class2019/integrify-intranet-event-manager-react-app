export const createEvent = event => (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const { profile } = getState().firebase;
    const authorId = getState().firebase.auth.uid;
    console.log(profile);

    firestore
        .collection('events')
        .add({
            ...event,
            authorId,
            authorName: 'Steve Phuc',
            participant: { total: 15, in: ['userid', 'userid1'], out: ['userid3'] },
        })
        .then(() => {
            dispatch({ type: 'CREATE_EVENT', event });
        })
        .catch(err => {
            dispatch({ type: 'CREATE_EVENT_ERROR', err });
        });
};
