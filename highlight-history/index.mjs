import { createBracket } from '../bracketry.min.js'
import data from '../test_data/unfinished-tennis-doubles.js'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

const bracket = createBracket(
    data,
    document.querySelector('.wr1'),
    {
        highlightedConnectionLinesColor: 'pink',
        highlightedPlayerTitleColor: '#8f04ff',
        connectionLinesWidth: 5
    }
)

adjust_options_on_resize(bracket)