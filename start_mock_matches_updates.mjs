const live_match = {
    is_live: true,
    id: "MS219",
    order: 18,
    round_index: 0, // ???????
    sides: [{
        contestant_id: "163976",
        is_serving: false,
        is_winner: false,
        score: [ { main_score: "4"}, { main_score: "1" } ],
        subscore: "40"
    }, {
        contestant_id: "164216",
        is_serving: true,
        is_winner: false,
        score: [ { main_score: "6" }, { main_score: "0" } ],
        subscore: "40"
    }]
}

const live_match2 = {
    id: "MS220",
    order: 19,
    round_index: 1, // ???????
    sides: [{
        contestant_id: "164341",
        score: [ {
            main_score: "", tie_break: undefined
        } ],
        subscore: ""
    }, {
        contestant_id: "164166",
        score: [ {
            main_score: "", tie_break: undefined
        } ],
        subscore: ""
    }]
}


const live_match3 = {
    id: "MS288uhoih20",
    order: 0,
    round_index: 3, // ???????
    sides: [{
        contestant_id: "199971",
        score: [ {
            main_score: "", tie_break: undefined
        } ],
        subscore: ""
    }, {
        contestant_id: "199146",
        score: [ {
            main_score: "", tie_break: undefined
        } ],
        subscore: ""
    }]
}

const items = ['15', '30', '40', 'A']

export const start_mock_matches_updates = (applyMatchesUpdates) => {
    if (true) return
    setInterval(() => {
        live_match.sides[1].subscore = live_match.sides[1].subscore === '40' ? 'A' : '40'
        live_match2.sides[0].score[0].main_score = items[Math.floor(Math.random()*items.length)]
        live_match2.sides[1].score[0].main_score = items[Math.floor(Math.random()*items.length)]
        applyMatchesUpdates([ live_match, live_match2, live_match3 ])
    }, 3000)
}

    


