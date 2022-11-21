import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/ucl-finished.js'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

createPlayoffs(
    data,
    document.querySelector('.wr1'),
    {
        navButtonsPosition: 'gutters',
        getEntryStatusHTML: () => '',
        navigationGutterBorderColor: 'orangered'
    }
)

createPlayoffs(
    data,
    document.querySelector('.wr2'),
    {
        navButtonsPosition: 'overMatches',
        getEntryStatusHTML: () => ''
    }
)

createPlayoffs(
    data,
    document.querySelector('.wr3'),
    {
        navButtonsPosition: 'beforeTitles',
        getEntryStatusHTML: () => '',
        navigationGutterBorderColor: 'orangered'
    }
)

createPlayoffs(
    data,
    document.querySelector('.wr4'),
    {
        navButtonsPosition: 'overTitles',
        getEntryStatusHTML: () => ''
    }
)

createPlayoffs(
    data,
    document.querySelector('.wr5'),
    {
        navButtonsPosition: 'beforeTitles',
        leftNavigationButtonHTML: '<div style="padding: 5px;">< PREV ROUND</div>',
        rightNavigationButtonHTML: '<div style="padding: 5px;">NEXT ROUND ></div>',
        getEntryStatusHTML: () => ''
    }
)
