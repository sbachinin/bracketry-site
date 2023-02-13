import { createBracket } from '../bracketry.min.js'
import data from '../test_data/finished-singles-2021.js'
import { add_options_manager } from '../options-manager/options-manager.mjs'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

const bracket = createBracket(
    data,
    document.querySelector('.common-bracket-wrapper'),
    {
        getNationalityHTML: p => `<div style="
        width: 28px;
        text-align: center;
        font-size: 14px;
        background: #f0f0f0;">${p.nationality}</div>`,
        getEntryStatusHTML: es => `<div style="
        width: 24px;
        font-size: 14px;
        text-align: center;">${es || ''}</div>`
    }
)

const options_manager = add_options_manager(
    document.querySelector('.options-manager-opener'),
    bracket
)

adjust_options_on_resize(bracket, options_manager)