import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/finished-singles-2021.js'
import { add_options_manager } from '../options-manager/options-manager.mjs'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

createPlayoffs(
    data,
    document.querySelector('.wr1')
)

createPlayoffs(
    data,
    document.querySelector('.wr2'),
    { verticalScrollMode: 'buttons'}
)

createPlayoffs(
    data,
    document.querySelector('.wr3'),
    { verticalScrollMode: 'mixed'}
)