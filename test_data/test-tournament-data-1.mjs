const match1 = {
    order: 0,
    id: 'match1',
    roundIndex: 0,
    sides: [
        {
            contestantId: 'a',
            scores: [
                {
                    mainScore: 0,
                    subscore: 7
                },
                {
                    mainScore: 6
                }
            ],
            isWinner: true
        },
        {
            contestantId: 'b',
            scores: [
                {
                    mainScore: 0,
                    subscore: 5
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
            scores: [],
            isWinner: true
        },
        {
            contestantId: 'd',
            scores: []
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
                nationality: 'ALB',
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
                nationality: 'fsdfds'
            }]
        }
    }
}