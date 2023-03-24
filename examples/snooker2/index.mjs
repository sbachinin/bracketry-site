import { createBracket } from '../../bracketry.min.js'


const data = {
    rounds: [{}, {}],
    matches: [
        {
            roundIndex: 0,
            order: 0,
            sides: [
                {
                    contestantId: '1038',
                    scores: [ { mainScore: 4 } ]
                },
                {
                    contestantId: '158',
                    scores: [ { mainScore: 6, isWinner: true } ],
                    isWinner: true
                }
            ]
        },
        {
            roundIndex: 0,
            order: 1,
            sides: [
                {
                    contestantId: '39',
                    scores: [ { mainScore: 3 } ]
                },
                {
                    contestantId: '97',
                    scores: [ { mainScore: 6, isWinner: true } ],
                    isWinner: true
                }
            ]
        },
        {
            roundIndex: 1,
            order: 0,
            sides: [
                {
                    contestantId: '158',
                    scores: [ { mainScore: 4 } ]
                },
                {
                    contestantId: '97',
                    scores: [ { mainScore: 10, isWinner: true } ],
                    isWinner: true
                }
            ]
        },
    ],
    contestants: {
        158: {
            entryStatus: '4',
            players: [
                {
                    title: 'Ali Carter',
                    nationality: 'England'
                }
            ]
        },
        97: {
            entryStatus: '10',
            players: [
                {
                    title: 'Shaun Murphy',
                    nationality: 'England'
                }
            ]
        },
        39: {
            entryStatus: '3',
            players: [
                {
                    title: 'Kyren Wilson',
                    nationality: 'England'
                }
            ]
        },
        1038: {
            entryStatus: '16',
            players: [
                {
                    title: `Joe O'Connor`,
                    nationality: 'England'
                }
            ]
        }
    }
}


const wrapper_el = document.querySelector('.bracket-wrapper')


const options = {
    getNationalityHTML: p => {
        return `<img src="https://www.snooker.org/res/scorekeeper/gfx/flags/icondrawer/16/${p.nationality}.png">`
    },
    getEntryStatusHTML: seed => `<span class="seed">${seed}</span>`,
    getPlayerTitleHTML: (player, context) => {
        return `
            <a href="https://www.snooker.org/res/index.asp?player=${context.contestantId}">
                ${player.title}
            </a>
        `
    },
    
    disableHighlight: true,
    useClassicalLayout: true,
    displayWholeRounds: true,
    navButtonsPosition: 'overTitles',

    rootBorderColor: 'transparent',
    
    matchFontSize: 12,
    matchHorMargin: 6,
    distanceBetweenScorePairs: 6,
    mainVerticalPadding: 0,
    roundTitlesFontSize: 18,
    matchMinVerticalGap: 12,
    matchAxisMargin: 2,
}


createBracket(
    data,
    wrapper_el,
    options
)
