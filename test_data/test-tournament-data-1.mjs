const match1 = {
    order: 0,
    id: 'match1',
    roundIndex: 0,
    sides: [
        {
            contestantId: 'a',
            score: [
                {
                    mainScore: 0,
                    tieBreak: 7
                },
                {
                    mainScore: 6
                }
            ],
            isWinner: true
        },
        {
            contestantId: 'b',
            score: [
                {
                    mainScore: 0,
                    tieBreak: 5
                },
                {
                    mainScore: 3
                }
            ],
        }
    ]
}

const match2 = {
    order: 1,
    id: 'match2',
    roundIndex: 0,
    sides: [
        {
            contestantId: 'c',
            score: [],
            isWinner: true
        },
        {
            contestantId: 'd',
            score: []
        }
    ]
}

export default {
    rounds: [
        {
            name: 'Ovo',
        },
        {
            name: 'Fin',
        }
    ],

    matches: [
        match1,
        match2
    ],

    contestants: {
        a: {
            entryStatus: 'J',
            players: [{
                title: 'link tag will not be clickable here',
                nationality_code: 'ALB',
            }]
        },
        b: {
            players: [{
                title: 'Bruno Van Den Schplusselberg',
            }]
        },
        c: {
            entryStatus: 'WO',
            players: [{
                title: 'Ccccc',
            }]
        },
        d: {
            players: [{
                title: 'DD DD DD',
                nationality_code: 'fsdfds'
            }]
        }
    }
}