import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/unfinished-tennis-doubles.js'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

const playoffs = createPlayoffs(
    data,
    document.querySelector('.common-playoffs-wrapper'),
)

adjust_options_on_resize(playoffs, options_manager)