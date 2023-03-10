import { createBracket } from '../../bracketry.min.js'
import data from '../../test_data/finished-singles-2021.js'

const bracket = createBracket(
    {
        ...data,
        matches: data.matches.map(m => {
            return {
                ...m,
                matchStatus: '<a href="#">H2H</a>'
            }
        })
    },
    
    document.querySelector('.common-bracket-wrapper'),
    {
        getNationalityHTML: p => {
            const url = `https://flagcdn.com/16x12/${p.nationality?.toLowerCase()}.png`
            return `<img style="width: 16px; margin-right: 5px;" src="${url}">`
        },
        matchStatusBgColor: '#051224',
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
        disableHighlight: true,
        getPlayerTitleHTML: p => `<a style="color: #051224" href="https://www.atptour.com/en/players/carlos-alcaraz/a0e2/overview">
            ${p.title || ''}
        </a>`
    }
)
