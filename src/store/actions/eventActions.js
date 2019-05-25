export const createEvent = event => (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
        .collection('events')
        .add({
            ...event,
            userId: 'user11',
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
