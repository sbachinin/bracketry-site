import { createBracket } from '../bracketry.min.js'
import data from '../test_data/finished-singles-2021.js'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'
import { create_element_from_Html } from '../utils.mjs'


const em = ['🤗', '🤢', '🤫', '🥸', '🤐', '🤨', '😐', '😑', '😈', '🥶']

const bracket = createBracket(
    data,
    document.querySelector('.common-bracket-wrapper'),
    {
        getRoundTitleElement: (r, i) => create_element_from_Html(
            `<div>
                <div style="text-align: center; font-size: 26px;">${r.name}</div>
                <div style="text-align: center; font-size: 16px; background: #fff6aa; padding: 2px 4px;">Prize money: ${100 * Math.pow(2, i)}$</div>
            </div>`
        ),
        getEntryStatusHTML: (es) => `<div class="estatus">${es || ''}</div>`,
        getNationalityHTML: () => em[Math.floor(Math.random() * 10)],
        getPlayerTitleHTML: p => `<a href="http://google.com/search?q=${p.title}" target="blank">
            ${p.title || ''}
            <svg class="link-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z"/></svg>
        </a>`,
        disableHighlight: true,
        verticalScrollMode: 'mixed'
    }
)

const bracket2 = createBracket(
    { rounds: [{}, {}] },
    document.querySelector('.bracket-wrapper-getMatchElement'),
    {
        getMatchElement: (roundIndex, matchOrder) => {
            const el = document.createElement('div')
            el.style.display = "flex"
            el.style.alignItems = "center"
            el.style.fontSize = "50px"
            el.innerHTML = `${roundIndex} ${matchOrder} &nbsp; <img style="width: 150px" src="./matches.jpg">`
            return el
        }
    }
)



adjust_options_on_resize(bracket)
adjust_options_on_resize(bracket2)
