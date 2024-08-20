import { createBracket } from '../../bracketry.min.js'
import data from '../../test_data/finished-singles-2021.js'

const bracket = createBracket(
    data,    
    document.querySelector('.common-bracket-wrapper'),
    {
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
        distanceBetweenScorePairs: 10
    }
)
