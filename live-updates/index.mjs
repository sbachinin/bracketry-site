import { createBracket } from '../bracketry.min.js'
import data from './data.js'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

const bracket = createBracket(
    data,
    document.querySelector('.common-bracket-wrapper'),
    {
        matchMaxWidth: 400,
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
    bracket.applyMatchesUpdates([data.matches[0]])
}, 3000)

setTimeout(() => {
    bracket.applyMatchesUpdates([
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
}, 3000)

adjust_options_on_resize(bracket)
