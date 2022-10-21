import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/unfinished-singles.js'
import { get_default_options } from '../options-manager/options-meta-getter.mjs'

let pl = null

document.querySelector('.open-fullscreen-button').addEventListener('click', () => {
    const options = {
        fullscreen: true,
        rootBgColor: 'white',
        width: '90vw',
        height: '90vh',
        getNationalityHTML: p => `<div style="
        width: 30px;
        text-align: center;
        font-size: 14px;
        background: #f0f0f0;">${p.nationality}</div>`,
        getEntryStatusHTML: es => `<div style="
        width: 30px;
        font-size: 14px;
        text-align: center;">${es || ''}</div>`
    }
    
    pl = createPlayoffs(
        data,
        document.body,
        options
    )

    adjust_options_to_width()
})


const mediaQuery = window.matchMedia('(max-width: 600px)')
const adjust_options_to_width = () => {
    if (!pl) return

    if (mediaQuery.matches) {
        pl.applyNewOptions({
            visibleRoundsCount: 1,
            navButtonsPosition: 'overTitles',
            matchFontSize: 14,
            matchMinVerticalGap: 20,
            matchAxisMargin: 2,
            matchHorMargin: 8
        })
    } else {
        const def = get_default_options()
        pl.applyNewOptions({
            visibleRoundsCount: def.visibleRoundsCount,
            navButtonsPosition: def.navButtonsPosition,
            matchFontSize: def.matchFontSize,
            matchMinVerticalGap: def.matchMinVerticalGap,
            matchAxisMargin: def.matchAxisMargin,
            matchHorMargin: def.matchHorMargin
        })
    }
}

mediaQuery.addEventListener('change', adjust_options_to_width)
