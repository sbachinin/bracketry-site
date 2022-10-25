const live_match = {
    isLive: true,
    id: "MS219",
    order: 18,
    roundIndex: 0, // ???????
    sides: [{
        contestantId: "163976",
        isServing: false,
        isWinner: false,
        scores: [ { mainScore: "4"}, { mainScore: "1" } ],
        currentScore: "40"
    }, {
        contestantId: "164216",
        isServing: true,
        isWinner: false,
        scores: [ { mainScore: "6" }, { mainScore: "0" } ],
        currentScore: "40"
    }]
}

const live_match2 = {
    id: "MS220",
    order: 19,
    roundIndex: 1, // ???????
    sides: [{
        contestantId: "164341",
        scores: [ {
            mainScore: "", subscore: undefined
        } ],
        currentScore: ""
    }, {
        contestantId: "164166",
        scores: [ {
            mainScore: "", subscore: undefined
        } ],
        currentScore: ""
    }]
}


const live_match3 = {
    id: "MS288uhoih20",
    order: 0,
    roundIndex: 3, // ???????
    sides: [{
        contestantId: "199971",
        scores: [ {
            mainScore: "", subscore: undefined
        } ],
        currentScore: ""
    }, {
        contestantId: "199146",
        scores: [ {
            mainScore: "", subscore: undefined
        } ],
        currentScore: ""
    }]
}

const items = ['15', '30', '40', 'A']

export const start_mock_matches_updates = (applyMatchesUpdates) => {
    if (true) return
    setInterval(() => {
        live_match.sides[1].currentScore = live_match.sides[1].currentScore === '40' ? 'A' : '40'
        live_match2.sides[0].scores[0].mainScore = items[Math.floor(Math.random()*items.length)]
        live_match2.sides[1].scores[0].mainScore = items[Math.floor(Math.random()*items.length)]
        applyMatchesUpdates([ live_match, live_match2, live_match3 ])
    }, 3000)
}

    


