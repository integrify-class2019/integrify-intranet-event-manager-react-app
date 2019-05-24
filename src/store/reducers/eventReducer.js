const initState = {
    events: [
        {
            id: '1',
            name: 'Bummer Picnic,2019',
            participant: { total: 15, in: ['userid', 'userid1'], out: ['userid3'] },
            time: { day: '20 May', hourBegin: '16:00', hourEnd: '19:00' },
            type: 'Outdoor',
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
            name: 'After Party, CSS',
            participant: { total: 15, in: 8, out: 0 },
            time: { day: '30 May', hourBegin: '16:00', hourEnd: '19:00' },
            type: 'Party',
        },
        {
            id: '4',
            name: 'After Party, React',
            participant: { total: 15, in: 8, out: 0 },
            time: { day: '30 May', hourBegin: '16:00', hourEnd: '19:00' },
            type: 'Party',
        },
    ],
};

const eventReducer = (state = initState, action) => state;

export default eventReducer;
