import { createBracket } from '../../bracketry.min.js'


const data = {
    rounds: [
        {
            title: 'QF',
            subtitle: 'Losers receive £15,000'
        }, {
            title: 'SF',
            subtitle: 'Losers receive £30,000'
        }, {
            title: 'Final',
            subtitle: 'Winner: £125,000; Runner-up: £50,000'
        }
    ],
    matches: [
        {
            roundIndex: 1,
            order: 0,
            sides: [
                {
                    contestantId: '1038',
                    scores: [{ mainScore: 4 }]
                },
                {
                    contestantId: '158',
                    scores: [{ mainScore: 6, isWinner: true }],
                    isWinner: true
                }
            ],
            detailsUrl: 'https://livescores.worldsnookerdata.com/Matches/Result/14611/893944'
        },
        {
            roundIndex: 1,
            order: 1,
            sides: [
                {
                    contestantId: '39',
                    scores: [{ mainScore: 3 }]
                },
                {
                    contestantId: '97',
                    scores: [{ mainScore: 6, isWinner: true }],
                    isWinner: true
                }
            ],
            detailsUrl: 'https://livescores.worldsnookerdata.com/Matches/Result/14611/893945'
        },
        {
            roundIndex: 2,
            order: 0,
            sides: [
                {
                    contestantId: '158',
                    scores: [{ mainScore: 4 }]
                },
                {
                    contestantId: '97',
                    scores: [{ mainScore: 10, isWinner: true }],
                    isWinner: true
                }
            ],
            detailsUrl: 'https://livescores.worldsnookerdata.com/Matches/Result/14611/893946'
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
    getRoundTitleElement: (roundData, roundIndex) => {
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="rtitle">${roundData.title}</div>
            <div class="rsubtitle">${roundData.subtitle}</div>
        `
        return div
    },

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

    getMatchBottomHTML: match => {
        const id1 = match.sides[0].contestantId
        const id2 = match.sides[1].contestantId
        return `
            <div class="mbottom">
                <a href="https://www.snooker.org/res/index.asp?player1=${id1}&player2=${id2}&season=-1">h2h</a>
                <a href="${match.detailsUrl}">match details</a>
            </div>
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
    matchMinVerticalGap: 24,
    matchAxisMargin: 2,
}


createBracket(
    data,
    wrapper_el,
    options
)
