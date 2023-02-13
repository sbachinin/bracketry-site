import { createBracket } from '../bracketry.min.js'
import data from '../test_data/finished-singles-2021.js'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

const bracket = createBracket(
    data,
    document.querySelector('.wr1'),
    {
        getNationalityHTML: p => `<div style="
        width: 28px;
        text-align: center;
        font-size: 14px;
        background: #f0f0f0;">${p.nationality}</div>`,
        getEntryStatusHTML: es => `<div style="
        width: 24px;
        font-size: 14px;
        text-align: center;">${es || ''}</div>`,
        visibleRoundsCount: 1
    }
)

adjust_options_on_resize(bracket)



const bracket2 = createBracket(
    data,
    document.querySelector('.wr2'),
    {
        getNationalityHTML: p => `<div style="
        width: 28px;
        text-align: center;
        font-size: 14px;
        background: #f0f0f0;">${p.nationality}</div>`,
        getEntryStatusHTML: es => `<div style="
        width: 24px;
        font-size: 14px;
        text-align: center;">${es || ''}</div>`,
        displayWholeRounds: true
    }
)

adjust_options_on_resize(bracket2)
