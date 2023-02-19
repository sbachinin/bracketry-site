import { createBracket } from '../bracketry.min.js'
import data from '../test_data/finished-singles-2021.js'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

let pl = null

document.querySelector('.open-fullscreen-button').addEventListener('click', () => {
    const options = {
        fullscreen: true,
        fullscreenBgColor: 'rgba(0,0,0,.3)',
        rootBgColor: 'white',
        width: '1200px',
        height: '90vh',
        getNationalityHTML: p => `<div style="
        width: 24px;
        text-align: center;
        font-size: 14px;
        background: #f0f0f0;">${p.nationality}</div>`,
        getEntryStatusHTML: es => `<div style="
        width: 24px;
        font-size: 14px;
        text-align: center;">${es || ''}</div>`
    }
    
    pl = createBracket(
        data,
        document.body,
        options
    )

    adjust_options_on_resize(pl)
})

document.body.prepend('docElement.clientHeight ', document.documentElement.clientHeight)
document.body.prepend(document.createElement('div'))
document.body.prepend('docElement.clientWidth ', document.documentElement.clientWidth)