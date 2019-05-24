export const createEvent = event => (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_EVENT', event });
};
