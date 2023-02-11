import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/ucl-finished.js'
import { escapeHtml } from '../utils.mjs'

createPlayoffs(
    data,
    document.querySelector('.wr1'),
    {
        verticalScrollMode: 'buttons',
        buttonScrollAmount: 100,
        getEntryStatusHTML: () => '',
        scrollGutterBorderColor: 'orangered',
        displayWholeRounds: true
    }
)

createPlayoffs(
    data,
    document.querySelector('.wr2'),
    {
        verticalScrollMode: 'buttons',
        buttonScrollAmount: 100,
        scrollButtonsPosition: 'overMatches',
        getEntryStatusHTML: () => ''
    }
)

const scrollUpButtonHTML = `<div style="
        width: 100%;
        background: linear-gradient(#fafcff, #fafcff 32%, transparent);
        text-align: center;
        font-size: 24px;">⬆️</div>`

const scrollDownButtonHTML = `<div style="
        width: 100%;
        background: linear-gradient(transparent, #fafcff 68%, #fafcff);
        text-align: center;
        font-size: 24px;">⬇️</div>`

createPlayoffs(
    data,
    document.querySelector('.wr3'),
    {
        verticalScrollMode: 'buttons',
        getEntryStatusHTML: () => '',
        scrollUpButtonHTML,
        scrollDownButtonHTML,
        scrollButtonPadding: '0',
        scrollButtonsPosition: 'overMatches',
        buttonScrollAmount: 100
    }
)

document.querySelector('code.icons').innerHTML = document.querySelector('code.icons').innerHTML
    .replace('SUBHTML', escapeHtml(scrollUpButtonHTML))
    .replace('SDBHTML', escapeHtml(scrollDownButtonHTML))
