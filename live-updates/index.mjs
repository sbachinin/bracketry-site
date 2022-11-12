import { createPlayoffs } from '../easy-playoffs.min.js'
import data from './data.js'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

const playoffs = createPlayoffs(
    data,
    document.querySelector('.common-playoffs-wrapper'),
    {
        matchMaxWidth: '400px',
        getEntryStatusHTML: (es) => {
            return `<div style="color: #ccc; width: 15px;">${es || ''}</div>`
        },
        getNationalityHTML: (p) => {
            return `<div style="background: #f1f1f1;
                padding: 0 5px;
                font-size: 12px;">${p.nationality}</div>`
        }
    }
)

setInterval(() => {
    data.matches[0].sides[0].currentScore = data.matches[0].sides[0].currentScore === '40' ? 'A' : '40'
    playoffs.applyMatchesUpdates([data.matches[0]])
}, 3000)

setTimeout(() => {
    playoffs.applyMatchesUpdates([
        {
            "roundIndex": 1,
            "sides": [
                {},
                {
                    "contestantId": "199246",
                }
            ],
            "order": 0,
        }
    ])
}, 6000)

adjust_options_on_resize(playoffs)
