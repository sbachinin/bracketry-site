import emptydata from './empty-tournament-data.mjs'
import unfinished_singles from './unfinished-singles.js'
import finished_singles_2021 from './finished-singles-2021.js'
import finished_singles_2022 from './finished-singles-2022.js'
import unfinished_tennis_doubles from './unfinished-tennis-doubles.js'
import finished_ucl from './ucl-finished.js'

export const INITIAL_TEST_DATA_INDEX = 0

// tennis data with second live round
// finished tennis tournament
// doubles
// football
// empty tournament
// with photo

export const datas = [
    {
        type: 'tennis',
        title: 'Tennis ongoing tournament',
        resolver: () => Promise.resolve(unfinished_singles)
    },
    {
        type: 'tennis',
        title: 'Tennis finished tournament',
        resolver: () => Promise.resolve(finished_singles_2021)
    },
    // {
    //     type: 'tennis',
    //     title: 'Another tennis singles finished tournament',
    //     resolver: () => Promise.resolve(finished_singles_2022)
    // },
    {
        type: 'tennis',
        title: 'Tennis DOUBLES unfinished tournament',
        resolver: () => Promise.resolve(unfinished_tennis_doubles)
    },
    
    {
        type: 'football',
        title: 'Champions League (football)',
        resolver: () => Promise.resolve(finished_ucl)
    },
    {
        type: 'empty',
        title: 'Empty (upcoming) 3-round tournament',
        resolver: () => Promise.resolve(emptydata)
    },
]


export const get_some_data = (i = INITIAL_TEST_DATA_INDEX) => {
    return datas[i].resolver()
}
