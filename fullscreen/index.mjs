import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/finished-singles-2021.js'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

let pl = null

document.querySelector('.open-fullscreen-button').addEventListener('click', () => {
    const options = {
        fullscreen: true,
        rootBgColor: 'white',
        width: '90vw',
        height: '90vh',
        getNationalityHTML: p => `<div style="
        text-align: center;
        font-size: 14px;
        background: #f0f0f0;">${p.nationality}</div>`,
        getEntryStatusHTML: es => `<div style="
        font-size: 14px;
        text-align: center;">${es || ''}</div>`
    }
    
    pl = createPlayoffs(
        data,
        document.body,
        options
    )

    adjust_options_on_resize(pl)
})
