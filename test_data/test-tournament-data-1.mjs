const match1 = {
    order: 0,
    id: 'match1',
    round_index: 0,
    sides: [
        {
            contestant_id: 'a',
            score: [
                {
                    main_score: 0,
                    tie_break: 7
                },
                {
                    main_score: 6
                }
            ],
            is_winner: true
        },
        {
            contestant_id: 'b',
            score: [
                {
                    main_score: 0,
                    tie_break: 5
                },
                {
                    main_score: 3
                }
            ],
        }
    ]
}

const match2 = {
    order: 1,
    id: 'match2',
    round_index: 0,
    sides: [
        {
            contestant_id: 'c',
            score: [],
            is_winner: true
        },
        {
            contestant_id: 'd',
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
            entry_status: 'J',
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
            entry_status: 'WO',
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