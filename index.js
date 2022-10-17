import { createPlayoffs } from './easy-playoffs.min.js'
import { get_some_data } from './test_data/get_some_data.mjs'
import { create_data_picker } from './test_data/create_data_picker.mjs'
import { add_options_manager } from './options-manager/options-manager.mjs'
import { get_default_options } from './options-manager/options-meta-getter.mjs'

const default_playoffs_wrapper = document.querySelector('.default-playoffs')

get_some_data().then(data => {
    let playoffs = createPlayoffs(data, default_playoffs_wrapper, {})

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



    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const adjust_options_to_width = () => {
        if (mediaQuery.matches) {
            playoffs.applyNewOptions({
                visibleRoundsCount: 1,
                navButtonsPosition: 'overTitles',
                matchFontSize: 14,
                matchMinVerticalGap: 20,
                matchAxisMargin: 2,
                matchHorMargin: 8
            })
        } else {
            const def = get_default_options()
            playoffs.applyNewOptions({
                visibleRoundsCount: def.visibleRoundsCount,
                navButtonsPosition: def.navButtonsPosition,
                matchFontSize: def.matchFontSize,
                matchMinVerticalGap: def.matchMinVerticalGap,
                matchAxisMargin: def.matchAxisMargin,
                matchHorMargin: def.matchHorMargin
            })
        }
        options_manager.update_inputs(playoffs.getUserOptions())
    }

    adjust_options_to_width()

    mediaQuery.addEventListener('change', adjust_options_to_width)


})