import { createBracket } from '../../bracketry.min.js'
import data from '../../test_data/finished-singles-2021.js'

const bracket = createBracket(
    {
        ...data,
        rounds: [...data.rounds.slice(0,2), ...data.rounds.slice(4)]
    },
    
    document.querySelector('.common-bracket-wrapper'),
    {
        getNationalityHTML: p => ``,
        getEntryStatusHTML: es => ``,
        width: 'max-content',
        matchFontSize: 12,
        matchHorMargin: 6,
        distanceBetweenScorePairs: 6,
        useClassicalLayout: true,
        rootBorderColor: 'transparent',
        mainVerticalPadding: 0,
        navButtonsPosition: 'overTitles',
        displayWholeRounds: true,
        roundTitlesFontSize: 18
    }
)
