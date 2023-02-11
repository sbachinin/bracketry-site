import { createPlayoffs } from '../easy-playoffs.min.js'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

const data = {
    rounds: [{}],
    matches: [
        {
            roundIndex: 0,
            sides: [
                {
                    contestantId: "199291",
                    scores: [
                        {
                            mainScore: "7",
                            subscore: 9,
                            isWinner: true
                        },
                        {
                            mainScore: "5",
                        },
                    ],
                    currentScore: "40",
                    isServing: true
                },
                {
                    contestantId: "198921",
                    scores: [
                        {
                            mainScore: "6",
                            subscore: 7,

                        },
                        {
                            mainScore: "5",
                        },
                    ],
                    currentScore: "A",

                }
            ],
            order: 0,
            isLive: true,
        }
    ],
    contestants: {
        "199291": {
            "players": [
                {
                    "title": "M. Kecmanovic",
                    "nationality": "RS",

                }
            ]
        },
        "198921": {
            "players": [
                {
                    "title": "T. Paul",
                    "nationality": "US",

                }
            ]
        }
    }
}

createPlayoffs(
    data,
    document.querySelector('.wr1'),
    {
        disableHighlight: true,
        matchMaxWidth: 400,
        liveMatchBorderColor: '#f38bff',
        liveMatchBgColor: `rgb(117 244 180 / 20%)`,
        navButtonsPosition: 'hidden',
        displayWholeRounds: true
    }
)