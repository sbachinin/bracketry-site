import { createBracket } from './bracketry.min.js'
import { get_some_data } from './test_data/get_some_data.mjs'
import { create_data_picker } from './test_data/create_data_picker.mjs'
import { add_options_manager } from './options-manager/options-manager.mjs'
import { adjust_options_on_resize } from './options/adjust_options_on_resize.mjs'

const default_bracket_wrapper = document.querySelector('.default-bracket')

get_some_data().then(data => {
    let bracket = createBracket(data, default_bracket_wrapper, {
        getNationalityHTML: p => {
            let url = ''
            if (p.team_id) {
                url = `./football_flags/${p.team_id}.png`
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
    })

    create_data_picker(
        document.querySelector('.default-bracket-data-picker'),
        (new_data) => {
            bracket.replaceData(new_data)
        }
    )


    const options_manager = add_options_manager(
        document.querySelector('.options-manager-opener'),
        bracket
    )

    adjust_options_on_resize(bracket, options_manager)

})