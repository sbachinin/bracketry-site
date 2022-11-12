import { createPlayoffs } from './easy-playoffs.min.js'
import { get_some_data } from './test_data/get_some_data.mjs'
import { create_data_picker } from './test_data/create_data_picker.mjs'
import { add_options_manager } from './options-manager/options-manager.mjs'
import { start_mock_matches_updates } from './start_mock_matches_updates.mjs'
import { adjust_options_on_resize } from './options/adjust_options_on_resize.mjs'

const default_playoffs_wrapper = document.querySelector('.default-playoffs')

get_some_data().then(data => {
    let playoffs = createPlayoffs(data, default_playoffs_wrapper, {
        getNationalityHTML: p => {
            let url = ''
            if (p.team_id) {
                url = `./football_flags/${p.team_id}.png`
            } else {
                url = `https://flagcdn.com/16x12/${p.nationality?.toLowerCase()}.png`
            }
            return `<img style="width: 16px; margin-right: 5px;" loading=lazy src="${url}">`
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

    start_mock_matches_updates(playoffs.applyMatchesUpdates)

    create_data_picker(
        document.querySelector('.default-playoffs-data-picker'),
        (new_data) => {
            playoffs.replaceData(new_data)
        }
    )


    const options_manager = add_options_manager(
        document.querySelector('.options-manager-opener'),
        playoffs
    )

    adjust_options_on_resize(playoffs, options_manager)

})