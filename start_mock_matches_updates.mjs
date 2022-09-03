const live_match = {
    isLive: true,
    id: "MS219",
    order: 18,
    roundIndex: 0, // ???????
    sides: [{
        contestantId: "163976",
        isServing: false,
        isWinner: false,
        score: [ { mainScore: "4"}, { mainScore: "1" } ],
        subscore: "40"
    }, {
        contestantId: "164216",
        isServing: true,
        isWinner: false,
        score: [ { mainScore: "6" }, { mainScore: "0" } ],
        subscore: "40"
    }]
}

const live_match2 = {
    id: "MS220",
    order: 19,
    roundIndex: 1, // ???????
    sides: [{
        contestantId: "164341",
        score: [ {
            mainScore: "", tieBreak: undefined
        } ],
        subscore: ""
    }, {
        contestantId: "164166",
        score: [ {
            mainScore: "", tieBreak: undefined
        } ],
        subscore: ""
    }]
}


const live_match3 = {
    id: "MS288uhoih20",
    order: 0,
    roundIndex: 3, // ???????
    sides: [{
        contestantId: "199971",
        score: [ {
            mainScore: "", tieBreak: undefined
        } ],
        subscore: ""
    }, {
        contestantId: "199146",
        score: [ {
            mainScore: "", tieBreak: undefined
        } ],
        subscore: ""
    }]
}

const items = ['15', '30', '40', 'A']

export const start_mock_matches_updates = (applyMatchesUpdates) => {
    if (true) return
    setInterval(() => {
        live_match.sides[1].subscore = live_match.sides[1].subscore === '40' ? 'A' : '40'
        live_match2.sides[0].score[0].mainScore = items[Math.floor(Math.random()*items.length)]
        live_match2.sides[1].score[0].mainScore = items[Math.floor(Math.random()*items.length)]
        applyMatchesUpdates([ live_match, live_match2, live_match3 ])
    }, 3000)
}

    


