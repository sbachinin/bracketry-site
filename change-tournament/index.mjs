import { createBracket } from '../bracketry.min.js'
import data from '../test_data/finished-singles-2021.js'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'
import { create_data_picker } from '../test_data/create_data_picker.mjs'

const options = {
    getNationalityHTML: p => {
        let url = ''
        if (p.team_id) {
            url = `../football_flags/${p.team_id}.png`
        } else {
            url = `https://flagcdn.com/16x12/${p.nationality?.toLowerCase()}.png`
        }
        return `<img style="width: 16px; margin-right: 5px;" src="${url}">`
    },
    getEntryStatusHTML: es => {
        if (es === 'none') {
            return ''
        }
        return `<div style="
            width: 23px;
            font-size: 12px;
            text-align: center;">${es || ''}</div>`
    },
    verticalScrollMode: 'mixed'
}

const bracket = createBracket(
    data,
    document.querySelector('.common-bracket-wrapper'),
    options
)

adjust_options_on_resize(bracket)

create_data_picker(
    document.querySelector('.default-bracket-data-picker'),
    (new_data) => {
        bracket.replaceData(new_data)
    }
)