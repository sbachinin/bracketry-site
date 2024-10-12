import { createBracket } from '../bracketry.min.js'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

const data = {
    rounds: [{}, {}],
    matches: [
        {
            roundIndex: 0, order: 0, sides: [
                { contestantId: 'Argentina', scores: [{ mainScore: 3 }], isWinner: true },
                { contestantId: 'Croatia', scores: [{ mainScore: 0 }] },
            ]
        },
        {
            roundIndex: 0, order: 1, sides: [
                { contestantId: 'France', scores: [{ mainScore: 2 }], isWinner: true },
                { contestantId: 'Morocco', scores: [{ mainScore: 0 }] },
            ]
        },
        {
            roundIndex: 1, order: 0, sides: [
                { contestantId: 'Argentina', scores: [{ mainScore: 3 }, { mainScore: '(4)' }], isWinner: true },
                { contestantId: 'France', scores: [{ mainScore: 3 }, { mainScore: '(2)' }] },
            ]
        },
        {
            roundIndex: 1, order: 1, sides: [
                { contestantId: 'Croatia', scores: [{ mainScore: 2 }], isWinner: true },
                { contestantId: 'Morocco', scores: [{ mainScore: 1 }] },
            ], isBronzeMatch: true
        }
    ],
    contestants: {
        Argentina: { players: [{ title: 'Argentina' }] },
        France: { players: [{ title: 'France' }] },
        Croatia: { players: [{ title: 'Croatia' }] },
        Morocco: { players: [{ title: 'Morocco' }] }
    }
}

const bracket = createBracket(
    data,
    document.querySelector('.common-bracket-wrapper')
)

adjust_options_on_resize(bracket)