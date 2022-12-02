import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/ucl-finished.js'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

const options = {
    getEntryStatusHTML: () => '',
    getNationalityHTML: p => {
        const url = `../football_flags/${p.team_id}.png`
        return `<img style="width: 16px; margin-right: 5px;" src="${url}">`
    }
}

const playoffs = createPlayoffs(
    data,
    document.querySelector('.wr1'),
    {
        ...options,
        useClassicalLayout: true
    }
)

adjust_options_on_resize(playoffs)
