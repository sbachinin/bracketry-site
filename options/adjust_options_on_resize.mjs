// import { get_default_options } from '../options-manager/options-meta-getter.mjs'

export const adjust_options_on_resize = (bracket, options_manager) => {

    const mediaQuery = window.matchMedia('(max-width: 600px)')

    // const adjust = () => {
    if (mediaQuery.matches) {
        bracket.applyNewOptions({
            visibleRoundsCount: 1,
            navButtonsPosition: 'overTitles',
            matchFontSize: 14,
            matchMinVerticalGap: 20,
            matchAxisMargin: 2,
            matchHorMargin: 8
        })
    }/*  else {
            const d_o = get_default_options()
            const u_o = bracket.getUserOptions()
            bracket.applyNewOptions({
                visibleRoundsCount: u_o.visibleRoundsCount || d_o.visibleRoundsCount,
                navButtonsPosition: u_o.navButtonsPosition || d_o.navButtonsPosition,
                matchFontSize: u_o.matchFontSize || d_o.matchFontSize,
                matchMinVerticalGap: u_o.matchMinVerticalGap || d_o.matchMinVerticalGap,
                matchAxisMargin: u_o.matchAxisMargin || d_o.matchAxisMargin,
                matchHorMargin: u_o.matchHorMargin || d_o.matchHorMargin
            })
        } */
    options_manager?.update_inputs(bracket.getUserOptions())
    // }

    // adjust()

    // mediaQuery.addEventListener('change', adjust)
}