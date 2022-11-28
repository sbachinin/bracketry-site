import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/ucl-finished.js'
import { escapeHtml } from '../utils.mjs'

createPlayoffs(
    data,
    document.querySelector('.wr1'),
    {
        navButtonsPosition: 'gutters',
        getEntryStatusHTML: () => '',
        navGutterBorderColor: 'orangered'
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
        navGutterBorderColor: 'orangered'
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
        leftNavButtonHTML: '<div style="padding: 5px;">< PREV ROUND</div>',
        rightNavButtonHTML: '<div style="padding: 5px;">NEXT ROUND ></div>',
        getEntryStatusHTML: () => ''
    }
)


const leftNavButtonHTML = `<div style="
        width: 100px;
        height: 100%;
        background: linear-gradient(to left, transparent, #fafcff 50%, #fafcff);
        font-size: 30px;
        display: flex;
        align-items: center;
        padding-left: 10px;
    ">⬅️</div>`

const rightNavButtonHTML = `<div style="
        width: 100px;
        height: 100%;
        background: linear-gradient(to right, transparent, #fafcff 50%, #fafcff);
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    ">➡️</div>`

createPlayoffs(
    { ...data, rounds: data.rounds.map(r => ({ name: 'Very long round title'})) },
    document.querySelector('.wr6'),
    {
        displayWholeRounds: true,
        navButtonsPosition: 'overTitles',
        leftNavButtonHTML,
        rightNavButtonHTML,
        getEntryStatusHTML: () => ''
    }
)

document.querySelector('code.icons').innerHTML = document.querySelector('code.icons').innerHTML
    .replace('LNBHTML', escapeHtml(leftNavButtonHTML))
    .replace('RNBHTML', escapeHtml(rightNavButtonHTML))
