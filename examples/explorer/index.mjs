import { createBracket } from '../../bracketry.min.js'
import data from '../../test_data/finished-singles-2021.js'

const bracket = createBracket(
    data,
    document.querySelector('.common-bracket-wrapper'),
    {
        width: '500px',
        navButtonsPosition: 'overTitles',
        matchFontSize: 11,
        distanceBetweenScorePairs: 8,

        matchHorMargin: 6,
        visibleRoundsCount: 2,
        
        getNationalityHTML: p => '',

        getPlayerTitleHTML: (
            player,
            { roundIndex, matchOrder, contestantId, playerIndex }
        ) => {
            let es = data.contestants[contestantId].entryStatus || ''
            if (es) {
                es = ' (' + es + ')'
            }
            return `<a href="https://www.google.com/search?q=${player.title}">${player.title}</a>${es}`
        },
        getEntryStatusHTML: es => ``,
        disableHighlight: true,
        getMatchBottomHTML: () => {
            return `
                <div class="mbottom">
                    <a href="#">Match details</a>
                    <a href="#">H2H</a>
                </div>
            `
        },
        mainVerticalPadding: 10,
        roundTitlesFontSize: 16
    }
)
