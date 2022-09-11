export default {
    "rounds": [
        {
            "name": "Round of 16"
        },
        {
            "name": "Quarter-finals"
        },
        {
            "name": "Semi-finals"
        },
        {
            "name": "Final"
        }
    ],
    "matches": [
        
        {
            "roundIndex": 0,
            "order": 0,
            "isLive": true,
            "sides": [],
        },



        {
            "roundIndex": 0,
            "sides": [
                {
                    "contestantId": "inter",
                    "score": [
                        {
                            "mainScore": "0",
                            "isWinner": false
                        },
                        {
                            "mainScore": "1",
                            "isWinner": true
                        },
                    ],
                    "isWinner": false,
                    subscore: { mainScore: '231111' }
                },
                {
                    "contestantId": "liverpool",
                    "score": [
                        {
                            "mainScore": "2",
                            "isWinner": true
                        },
                        {
                            "mainScore": "0",
                            "isWinner": false
                        },
                    ],
                    "isWinner": true,
                    subscore: { mainScore: '23' }
                }
            ],
            "order": 1,
            "isLive": true,
        },


        {
            "id": "2",
            "roundIndex": 0,
            "sides": [
                {
                    "contestantId": "villarreal",
                    "score": [
                        {
                            "mainScore": "1",
                            "isWinner": false
                        },
                        {
                            "mainScore": "3",
                            "isWinner": true
                        },
                    ],
                    "isWinner": true,
                    subscore: { mainScore: 2 }
                },
                {
                    "contestantId": "juventus",
                    "score": [
                        {
                            "mainScore": "1",
                            "isWinner": false
                        },
                        {
                            "mainScore": "0",
                            "isWinner": false
                        },
                    ],
                    "isWinner": false,
                    subscore: { mainScore: 1 }
                }
            ],
            "order": 2,
            "isLive": false,
            matchStatus: 'Paused'
        },


        {
            "id": "3",
            "roundIndex": 0,
            "sides": [
                {
                    "contestantId": "salzburg",
                    "score": [
                        { mainScore: 'Walkover', isWinner: true },
                        { tieBreak: 12 },
                        { mainScore: '444' },
                        { mainScore: '323', tieBreak: 21 },
                        undefined,
                        { mainScore: '323', isWinner: true }
                    ],
                    "isWinner": false
                },
                {
                    "contestantId": "bayern",
                    "score": [
                        {
                            "mainScore": "14",
                            "isWinner": true
                        },
                        undefined,
                        {
                            "mainScore": "7",
                            "isWinner": true
                        },
                        {
                            mainScore: '1'
                        }
                    ],
                    "isWinner": true
                }
            ],
            "order": 3,
            "isLive": false,
            
        },


        {
            "id": "4",
            "roundIndex": 0,
            "order": 4,
            "isLive": false,
            "matchStatus": "Complete"
        },



        // {
        //     "id": "5",
        //     "roundIndex": 0,
        //     "sides": [
        //         {
        //             "contestantId": "atletico",
        //             "score": [
        //                 {
        //                     "mainScore": "1",
        //                     "isWinner": false
        //                 },
        //                 {
        //                     "mainScore": "1",
        //                     "isWinner": true
        //                 },
        //             ],
        //             "isWinner": true
        //         },
        //         {
        //             "contestantId": "mu",
        //             "score": [
        //                 {
        //                     "mainScore": "1",
        //                     "isWinner": false
        //                 },
        //                 {
        //                     "mainScore": "0",
        //                     "isWinner": false
        //                 },
        //             ],
        //             "isWinner": false
        //         }
        //     ],
        //     "order": 5,
        //     "isLive": false,
        // },



        {
            "id": "6",
            "roundIndex": 0,
            "sides": [
                {
                    "contestantId": "chelsea",
                    "score": [
                        {
                            "mainScore": "2",
                            "isWinner": true
                        },
                        {
                            "mainScore": "2",
                            "isWinner": true
                        },
                    ],
                    "isWinner": true
                },
                {
                    "contestantId": "lille",
                    "score": [
                        {
                            "mainScore": "0",
                            "isWinner": false
                        },
                        {
                            "mainScore": "1",
                            "isWinner": false
                        },
                    ],
                    "isWinner": false
                }
            ],
            "order": 6,
            "isLive": false,
            
        },


        {
            "id": "7",
            "roundIndex": 0,
            "sides": [
                {
                    "contestantId": "psg",
                    "score": [
                        {
                            "mainScore": "1",
                            "isWinner": true
                        },
                        {
                            "mainScore": "1",
                            "isWinner": false
                        },
                    ],
                    "isWinner": false
                },
                {
                    "contestantId": "real",
                    "score": [
                        {
                            "mainScore": "0",
                            "isWinner": false
                        },
                        {
                            "mainScore": "3",
                            "isWinner": true
                        },
                    ],
                    "isWinner": true
                }
            ],
            "order": 7,
            "isLive": false,
        },





        {
            "id": "8",
            "roundIndex": 1,
            "order": 0,
            "isLive": false,
        },

        {
            "id": "9",
            "roundIndex": 1,
            "sides": [
                {
                    "contestantId": "villarreal",
                    "score": [
                        {
                            "mainScore": "1",
                            "isWinner": true
                        },
                        {
                            "mainScore": "1",
                            "isWinner": false
                        },
                    ],
                    "isWinner": true
                },
                {
                    "contestantId": "bayern",
                    "score": [
                        {
                            "mainScore": "0",
                            "isWinner": false
                        },
                        {
                            "mainScore": "1",
                            "isWinner": false
                        },
                    ],
                    "isWinner": false
                }
            ],
            "order": 1,
            "isLive": false,
            "matchStatus": "C"
        },


        {
            "id": "10",
            "roundIndex": 1,
            "sides": [
                {
                    "contestantId": "city",
                    "score": [
                        {
                            "mainScore": "1",
                            "isWinner": true
                        },
                        {
                            "mainScore": "0",
                            "isWinner": false
                        },
                    ],
                    "isWinner": true
                }
            ],
            "order": 2,
            "isLive": false,
        },



        // no winner here
        {
            "id": "11",
            "roundIndex": 1,
            "sides": [
                {
                    "contestantId": "chelsea",
                    "score": [
                        {
                            "mainScore": "1",
                            "isWinner": false
                        },
                        {
                            "mainScore": "3",
                            "isWinner":  true
                        },
                    ],
                },
                {
                    "contestantId": "real",
                    "score": [
                        {
                            "mainScore": "3",
                            "isWinner": true
                        },
                        {
                            "mainScore": "2",
                            "isWinner": false
                        },
                    ],
                }
            ],
            "order": 3,
            "isLive": true,
            
        },


        {
            "id": "12",
            "roundIndex": 2,
            "sides": [
                {
                    "contestantId": "liverpool",
                    "score": [
                        {
                            "mainScore": "2",
                            "isWinner": true
                        },
                        {
                            "mainScore": "3",
                            "isWinner": true
                        },
                    ],
                    "isWinner": true,
                    isServing: true
                },
                {
                    "contestantId": "villarreal",
                    "score": [
                        {
                            "mainScore": "0",
                            "isWinner": false
                        },
                        {
                            "mainScore": "3",
                            "isWinner": false
                        },
                    ],
                    "isWinner": false,
                    isServing: true
                }
            ],
            "order": 0,
            "isLive": false,
            
        },

        {
            "id": "13",
            "roundIndex": 2,
            "sides": [
                {
                    "contestantId": "city",
                    "score": [
                        {
                            "mainScore": "4",
                            "isWinner": true
                        },
                        {
                            "mainScore": "1",
                            "isWinner": false
                        },
                    ],
                    "isWinner": false
                },
                {
                    "contestantId": "real",
                    "score": [
                        {
                            "mainScore": "3",
                            "isWinner": false
                        },
                        {
                            "mainScore": "3",
                            "isWinner": true
                        },
                    ],
                    "isWinner": true
                }
            ],
            "order": 1,
            "isLive": false,
            
        },

        {
            "id": "14",
            "roundIndex": 3,
            "sides": [
                {
                    "contestantId": "liverpool",
                    "score": [
                        {
                            "mainScore": "0",
                            "isWinner": false
                        }
                    ],
                    "isWinner": false
                },
                {
                    "contestantId": "real",
                    "score": [
                        {
                            "mainScore": "1",
                            "isWinner": true
                        }
                    ],
                    "isWinner": true
                }
            ],
            "order": 0,
            "isLive": false,
            
        },
    ],
    "contestants": {
        "liverpool": {
            entryStatus: 'WC',
            "players": [
                {
                    "title": "Liverpool",
                    "nationality": "liverpool"
                }
            ]
        },
        "real": {
            "players": [
                {
                    "title": "Real Madrid",
                    "nationality": "real"
                }
            ]
        },
        "villarreal": {
            "players": [
                {
                    "title": "Villarreal",
                    "nationality": "villarreal"
                }
            ]
        },
        "city": {
            "players": [
                {
                    "title": "Manchester City",
                    "nationality": "city"
                }
            ]
        },
        "benfica": {
            "players": [
                {
                    "title": "Benfica",
                    "nationality": "benfica"
                }
            ]
        },
        "bayern": {
            "players": [
                {
                    "title": "Bayern Munich",
                    "nationality": "bayern"
                }
            ]
        },
        "atletico": {
            "players": [
                {
                    "title": "Atletico",
                    "nationality": "atletico"
                }
            ]
        },
        "chelsea": {
            "players": [
                {
                    "title": "Chelsea",
                    "nationality": "chelsea"
                }
            ]
        },
        "ajax": {
            "players": [
                {
                    "title": "Ajax",
                    "nationality": "ajax"
                }
            ]
        },
        "inter": {
            "players": [
                {
                    "title": "Inter",
                    "nationality": "inter"
                }
            ]
        },
        "juventus": {
            "players": [
                {
                    "title": "Juventus",
                    "nationality": "juventus"
                }
            ]
        },
        "salzburg": {
            "players": [
                {
                    "title": "Salzburg",
                    "nationality": "salzburg"
                }
            ]
        },
        "sporting": {
            "players": [
                {
                    "title": "Sporting",
                    "nationality": "sporting"
                }
            ]
        },
        "mu": {
            "players": [
                {
                    "title": "Manchester United",
                    "nationality": "mu"
                }
            ]
        },
        "lille": {
            "players": [
                {
                    "title": "Lille",
                    "nationality": "lille"
                }
            ]
        },
        "psg": {
            "players": [
                {
                    "title": "PSG",
                    "nationality": "psg"
                }
            ]
        }
    }
}