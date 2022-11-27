import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/ucl-finished.js'

createPlayoffs(
    data,
    document.querySelector('.wr1'),
    {
        verticalScrollMode: 'buttons',
        syntheticScrollAmount: 100,
        getEntryStatusHTML: () => '',
        scrollGutterBorderColor: 'orangered'
    }
)

createPlayoffs(
    data,
    document.querySelector('.wr2'),
    {
        verticalScrollMode: 'buttons',
        syntheticScrollAmount: 100,
        scrollButtonsPosition: 'overMatches',
        getEntryStatusHTML: () => ''
    }
)

createPlayoffs(
    data,
    document.querySelector('.wr3'),
    {
        verticalScrollMode: 'buttons',
        getEntryStatusHTML: () => '',
        scrollUpButtonHTML: `
            <div style="
                width: 100%;
                background: linear-gradient(#fafcff, transparent);
                display: flex;
                height: 34px;
                align-items: center;
                justify-content: center;
                opacity: 1;
                font-size: 24px;
            ">
                ⬆️
            </div>
        `,
        scrollDownButtonHTML: `
            <div style="
                width: 100%;
                background: linear-gradient(transparent, #fafcff);
                display: flex;
                height: 34px;
                align-items: center;
                justify-content: center;
                opacity: 1;
                font-size: 24px;
            ">
                ⬇️
            </div>
        `,
        scrollButtonPadding: '0',
        scrollButtonsPosition: 'overMatches',
        syntheticScrollAmount: 100
    }
)
