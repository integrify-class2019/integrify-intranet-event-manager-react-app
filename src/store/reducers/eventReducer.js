const initState = {
    events: [
        {
            id: '1',
            name: 'Bummer Picnic',
            participant: { total: 15, in: ['userid', 'userid1'], out: ['userid3'] },
            time: { day: '20 May', hourBegin: '16:00', hourEnd: '19:00' },
            type: 'Other',
        },
        {
            id: '2',
            name: 'After Party, JS',
            participant: { total: 15, in: 8, out: 0 },
            time: { day: '30 May', hourBegin: '16:00', hourEnd: '19:00' },
            type: 'Party',
        },
        {
            id: '3',
            name: 'Running Club',
            participant: { total: 15, in: 8, out: 0 },
            time: { day: '30 May', hourBegin: '16:00', hourEnd: '19:00' },
            type: 'Sport',
        },
        {
            id: '4',
            name: 'Demo Day',
            participant: { total: 15, in: 8, out: 0 },
            time: { day: '30 May', hourBegin: '16:00', hourEnd: '19:00' },
            type: 'Presentation',
        },
        {
            id: '5',
            name: 'Demo Day',
            participant: { total: 15, in: 8, out: 0 },
            time: { day: '30 May', hourBegin: '16:00', hourEnd: '19:00' },
            type: 'Meetup',
        },
    ],
};

const eventReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            console.log('create project', action.event);
            return state;
        case 'CREATE_EVENT_ERROR':
            console.log('CREATE_EVENT_ERROR', action.err);
            return state;
        default:
            return state;
    }
};

export default eventReducer;
