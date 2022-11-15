import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/unfinished-tennis-doubles.js'
import { add_options_manager } from '../options-manager/options-manager.mjs'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

const playoffs = createPlayoffs(
    data,
    document.querySelector('.common-playoffs-wrapper'),
)

const options_manager = add_options_manager(
    document.querySelector('.options-manager-opener'),
    playoffs
)

adjust_options_on_resize(playoffs, options_manager)