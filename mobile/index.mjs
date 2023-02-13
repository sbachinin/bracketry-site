import { createBracket } from '../bracketry.min.js'
import data from '../test_data/finished-singles-2021.js'
import { get_default_options } from '../options-manager/options-meta-getter.mjs'

const mobile_options = {
    navButtonsPosition: 'beforeTitles',
    visibleRoundsCount: 1,
    matchMaxWidth: 360,
    leftNavButtonHTML: `<div style="padding: 7px;">< PREV ROUND</div>`,
    rightNavButtonHTML: `<div style="padding: 7px;">NEXT ROUND ></div>`,
    roundTitlesFontSize: 26,
    roundTitlesVerticalPadding: 4,
    matchFontSize: 14,
    matchHorMargin: 14,
    distanceBetweenScorePairs: 10,
    getEntryStatusHTML: () => '',
    disableHighlight: true,
    verticalScrollMode: 'mixed',
    scrollButtonPadding: '0px',


    getNationalityHTML: (p) => `<div style="width:24px; background: #ddd; text-align: center;">${p.nationality || ''}</div>`
}

createBracket(
    data,
    document.querySelector('.wr1'),
    mobile_options
)





const user_options = {
    verticalScrollMode: 'mixed',
    getEntryStatusHTML: (es) => `<div style="width:24px; font-size: 12px; text-align: center;">${es || ''}</div>`,
    getNationalityHTML: (p) => `<div style="width:24px; font-size: 12px; background: #ddd; text-align: center;">${p.nationality || ''}</div>`
}

const bracket = createBracket(
    data,
    document.querySelector('.wr2'),
    user_options
)
const mediaQuery = window.matchMedia('(max-width: 600px)')

const adjust = () => {
    if (mediaQuery.matches) {
        bracket.applyNewOptions(mobile_options)
    } else {
        bracket.applyNewOptions({ ...user_options, ...get_default_options() })
    }
}

mediaQuery.addEventListener('change', adjust)

adjust()