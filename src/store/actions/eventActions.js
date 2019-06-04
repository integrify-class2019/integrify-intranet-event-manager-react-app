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
            authorName: profile.name,
            participant: { total: 15, in: [], out: [] },
        })
        .then(res => {
            console.log(res);
            dispatch({ type: 'CREATE_EVENT', event: { ...event, id: res.id } });
        })
        .catch(err => {
            dispatch({ type: 'CREATE_EVENT_ERROR', err });
        });
};

export const resetEvent = () => ({ type: 'RESET_EVENT' });

export const editEvent = (eventId, event) => (
    dispatch,
    getState,
    { getFirebase, getFirestore }
) => {
    // make async call to database
    const firestore = getFirestore();
    const { profile } = getState().firebase;
    const authorId = getState().firebase.auth.uid;
    console.log(eventId, ' ', event);

    firestore
        .collection('events')
        .doc(eventId)
        .update(event)
        .then(() => {
            console.log('update success');
            // dispatch({ type: 'CREATE_EVENT', event: { ...event, id: res.id } });
        })
        .catch(err => {
            console.log(err);
            // dispatch({ type: 'CREATE_EVENT_ERROR', err });
        });
};

export const inEvent = eventId => (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const { profile } = getState().firebase;
    const authorId = getState().firebase.auth.uid;

    firestore
        .collection('events')
        .doc(eventId)
        .update({
            'participant.in': firestore.FieldValue.arrayUnion(authorId),
            'participant.out': firestore.FieldValue.arrayRemove(authorId),
        })
        .then(() => {
            dispatch({ type: 'IN_EVENT', eventId });
        })
        .catch(err => {
            dispatch({ type: 'IN_EVENT_ERROR', err });
        });
};

export const outEvent = eventId => (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const { profile } = getState().firebase;
    const authorId = getState().firebase.auth.uid;

    firestore
        .collection('events')
        .doc(eventId)
        .update({
            'participant.in': firestore.FieldValue.arrayRemove(authorId),
            'participant.out': firestore.FieldValue.arrayUnion(authorId),
        })
        .then(() => {
            dispatch({ type: 'OUT_EVENT', eventId });
        })
        .catch(err => {
            dispatch({ type: 'OUT_EVENT_ERROR', err });
        });
};

export const deleteEvent = eventId => (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
        .collection('events')
        .doc(eventId)
        .delete();
    // .then(() => {
    //     dispatch({ type: 'IN_EVENT', eventId });
    // })
    // .catch(err => {
    //     dispatch({ type: 'IN_EVENT_ERROR', err });
    // });
};
