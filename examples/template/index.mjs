import { createBracket } from '../../bracketry.min.js'
import data from '../../test_data/finished-singles-2021.js'

const bracket = createBracket(
    data,
    document.querySelector('.common-bracket-wrapper'),
    {
        getNationalityHTML: p => `<div style="
        width: 28px;
        text-align: center;
        font-size: 14px;
        background: #f0f0f0;">${p.nationality}</div>`,
        getEntryStatusHTML: es => `<div style="
        width: 24px;
        font-size: 14px;
        text-align: center;">${es || ''}</div>`
    }
)
