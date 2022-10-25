import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/unfinished-tennis-doubles.js'
import { add_options_manager } from '../options-manager/options-manager.mjs'
import { get_default_options } from '../options-manager/options-meta-getter.mjs'

const playoffs = createPlayoffs(
    data,
    document.querySelector('.common-playoffs-wrapper'),
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
