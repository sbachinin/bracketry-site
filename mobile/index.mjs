import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/finished-singles-2021.js'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

const playoffs = createPlayoffs(
    data,
    document.querySelector('.common-playoffs-wrapper'),
)

// TODO here i need proper resize
// (that works on every resize, not once)
adjust_options_on_resize(playoffs, options_manager)