import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/finished-singles-2021.js'

const options = {
    getEntryStatusHTML: (es) => {
        return `<div style="color: #ccc; width: 15px;">${es || ''}</div>`
    },
    getNationalityHTML: (p) => {
        return `<div style="background: #f1f1f1;
            padding: 0 5px;
            font-size: 12px;">${p.nationality}</div>`
    },
    navButtonsPosition: 'overTitles',
    displayWholeRounds: true
}

createPlayoffs(
    data,
    document.querySelector('.wr1'),
    options
)

createPlayoffs(
    data,
    document.querySelector('.wr2'),
    { ...options, verticalScrollMode: 'buttons'}
)

createPlayoffs(
    data,
    document.querySelector('.wr3'),
    { ...options, verticalScrollMode: 'mixed'}
)