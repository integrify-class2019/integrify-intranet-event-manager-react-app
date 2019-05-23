export const createProject = events => (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_EVENTS', events });
};
