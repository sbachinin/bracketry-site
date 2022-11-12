import { get_default_options } from '../options-manager/options-meta-getter.mjs'

export const adjust_options_on_resize = (playoffs, options_manager) => {

    const mediaQuery = window.matchMedia('(max-width: 600px)')

    const adjust = () => {
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
        options_manager?.update_inputs(playoffs.getUserOptions())
    }

    adjust()

    mediaQuery.addEventListener('change', adjust)
}