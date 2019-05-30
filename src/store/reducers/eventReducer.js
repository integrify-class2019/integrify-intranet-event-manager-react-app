const initState = {};

const eventReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            console.log(state);
            console.log('create project', action.event);
            return { ...state, ...action.event };
        case 'CREATE_EVENT_ERROR':
            console.log('CREATE_EVENT_ERROR', action.err);
            return state;
        case 'JOIN_EVENT':
            console.log('create project', action.eventId);
            return state;
        case 'JOIN_EVENT_ERROR':
            console.log('CREATE_EVENT_ERROR', action.err);
            return state;
        default:
            return state;
    }
};

export default eventReducer;
