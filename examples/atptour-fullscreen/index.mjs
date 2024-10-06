import { createBracket } from '../../bracketry.min.js'
import data from '../../test_data/finished-singles-2021.js'

const mobileOptions = {
    navButtonsPosition: 'beforeTitles',
    visibleRoundsCount: 1,
    matchMaxWidth: 360,
    leftNavButtonHTML: `<div style="padding: 7px;">< PREV ROUND</div>`,
    rightNavButtonHTML: `<div style="padding: 7px;">NEXT ROUND ></div>`,
    roundTitlesFontSize: 26,
    roundTitlesVerticalPadding: 4,
    matchFontSize: 14,
    matchHorMargin: 2,
    distanceBetweenScorePairs: 10,
    disableHighlight: true,
    scrollButtonPadding: '0px'
}

const isNarrowScreen = window.innerWidth < 600

createBracket(
    data,    
    document.querySelector('.common-bracket-wrapper'),
    {
        dropNLastRounds: 2,
        getNationalityHTML: p => {
            const url = `https://flagcdn.com/16x12/${p.nationality?.toLowerCase()}.png`
            return `<img style="width: 16px; margin-right: 5px;" src="${url}">`
        },
        getEntryStatusHTML: es => {
            return `<div style="
                color: #969b9d;
                width: 24px;
                font-family: 'Roboto', sans-serif;
                font-size: 13px;
                text-align: center;">${es || ''}</div>`
        },
        matchFontSize: 13,
        rootFontFamily: 'Roboto, sans-serif',
        matchHorMargin: 6,
        distanceBetweenScorePairs: 10,
        ...(isNarrowScreen ? mobileOptions : {})
    }
)
