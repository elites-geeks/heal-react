const dates = [
    { date: '2021-07-11', time: '19:00', status: 'new' },
    { date: '2021-07-16', time: '15:43', status: 'new' },
    { date: '2021-07-16', time: '15:12', status: 'new' },
    { date: '2021-07-19', time: '13:23', status: 'new' },
    { date: '2021-07-19', time: '13:26', status: 'new' },
    { date: '2021-07-19', time: '13:27', status: 'new' },
    { date: '2021-07-19', time: '13:31', status: 'new' },
    { date: '2021-07-19', time: '13:31', status: 'new' },
    { date: '2021-07-19', time: 'Invalid date', status: 'new' },
    { date: '2021-07-19', time: 'Invalid date', status: 'new' },
    { date: '2021-07-19', time: '13:38', status: 'new' },
    { date: '2021-07-13', time: '11:00', status: 'new' },
    { date: '2021-07-13', time: '10:00', status: 'new' },
    { date: '2021-07-13', time: '10:00', status: 'new' }
];
const index = dates.findIndex(elem=> elem.date==='2021-07-13' && elem.time==='11:0' && elem.status==="new")
console.log(index)