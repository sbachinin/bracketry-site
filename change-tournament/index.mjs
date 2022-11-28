import { createPlayoffs } from '../easy-playoffs.min.js'
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

const playoffs = createPlayoffs(
    data,
    document.querySelector('.common-playoffs-wrapper'),
    options
)

adjust_options_on_resize(playoffs)

create_data_picker(
    document.querySelector('.default-playoffs-data-picker'),
    (new_data) => {
        playoffs.replaceData(new_data)
    }
)