const live_match = {
    "id": "MS201",
    "roundIndex": 1,
    "sides": [
        {
            "contestantId": "199291",
            "scores": [
                {
                    "mainScore": "7",
                    "subscore": 9,
                    "isWinner": true
                },
                {
                    "mainScore": "5",
                },
            ],
            "currentScore": '40',
            "isWinner": true
        },
        {
            "contestantId": "198921",
            "scores": [
                {
                    "mainScore": "6",
                    "subscore": 7,
                    "isWinner": false
                },
                {
                    "mainScore": "5",
                },
            ],
            "currentScore": 'A',
            "isWinner": false
        }
    ],
    "order": 0,
    "isLive": true,
}

const live_match2 = {
    id: "MS220",
    order: 19,
    roundIndex: 1, // ???????
    sides: [{
        contestantId: "164341",
        scores: [{
            mainScore: "", subscore: undefined
        }],
        currentScore: ""
    }, {
        contestantId: "164166",
        scores: [{
            mainScore: "", subscore: undefined
        }],
        currentScore: ""
    }]
}


const live_match3 = {
    id: "MS288uhoih20",
    order: 0,
    roundIndex: 3, // ???????
    sides: [{
        contestantId: "199971",
        scores: [{
            mainScore: "", subscore: undefined
        }],
        currentScore: ""
    }, {
        contestantId: "199146",
        scores: [{
            mainScore: "", subscore: undefined
        }],
        currentScore: ""
    }]
}

const items = ['15', '30', '40', 'A']

export const start_mock_matches_updates = (applyMatchesUpdates) => {
    setInterval(() => {
        live_match.sides[1].currentScore = live_match.sides[1].currentScore === '40' ? 'A' : '40'
        // live_match2.sides[0].scores[0].mainScore = items[Math.floor(Math.random()*items.length)]
        // live_match2.sides[1].scores[0].mainScore = items[Math.floor(Math.random()*items.length)]
        applyMatchesUpdates([live_match, /* live_match2, live_match3 */])
    }, 3000)
}




