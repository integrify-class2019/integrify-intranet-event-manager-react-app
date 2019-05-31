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
        case 'IN_EVENT':
            console.log('in event  ', action.eventId);
            return state;
        case 'IN_EVENT_ERROR':
            console.log('in event error', action.err);
            return state;
        case 'OUT_EVENT':
            console.log('out event  ', action.eventId);
            return state;
        case 'OUT_EVENT_ERROR':
            console.log('out event error', action.err);
            return state;
        default:
            return state;
    }
};

export default eventReducer;
