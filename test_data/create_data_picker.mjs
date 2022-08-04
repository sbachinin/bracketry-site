import { create_element_from_Html } from '../pages/utils.mjs'

import { datas, INITIAL_TEST_DATA_INDEX } from './get_some_data.mjs'

const icons = {
    empty: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z"/></svg>',
    tennis: `<svg version="1.1" id="Capa_1" x="0px" y="0px" width="420.76px" height="420.76px" viewBox="0 0 420.76 420.76" style="width: 24px; height: 24px;" xml:space="preserve">
        <g>
            <path d="M210.38,0C94.377,0,0.005,94.372,0.005,210.375c0,116.013,94.373,210.385,210.375,210.385    c116.003,0,210.375-94.372,210.375-210.385C420.765,94.372,326.392,0,210.38,0z M107.574,364.848    c-11.609-7.765-22.281-16.811-31.853-26.899c21.583-32.235,42.543-76.605,42.543-127.583c0-58.14-27.014-96.342-50.538-118.604    c8.807-10.576,18.781-20.148,29.711-28.544c29.424,28.257,62.07,75.658,62.07,147.157    C159.517,273.746,133.526,327.21,107.574,364.848z M349.858,332.68c-9.256,10.537-19.67,20.023-31.059,28.237    c-25.045-37.389-49.285-89.342-49.285-150.552c0-68.515,30.008-114.922,58.408-143.552c10.643,8.731,20.281,18.638,28.754,29.5    c-22.299,22.769-45.91,59.68-45.91,114.052C310.767,258.608,329.548,300.941,349.858,332.68z"/>
        </g>
    </svg>`,
}

const create_data_button = (data, cb) => {
    const is_mobile = /Mobi|Android/i.test(navigator.userAgent)

    const button = create_element_from_Html(`
        <div class="data-picker-button ${datas.indexOf(data) === INITIAL_TEST_DATA_INDEX ? 'selected' : ''}">
            ${icons[data.type]}
            <div class="data-picker-button-tooltip">${data.title}</div>
        </div>
    `)
    button.addEventListener('click', () => {
        ([...button.parentElement.children]).forEach(c => c.classList.remove('selected'))
        button.classList.add('selected')
        data.resolver().then(cb)
    })

    let should_show_tooltip = false
    button.addEventListener('mousemove', () => {
        should_show_tooltip = !is_mobile
        setTimeout(() => {
            should_show_tooltip && button.querySelector('.data-picker-button-tooltip').classList.add('visible')
        }, 100)
    })
    button.addEventListener('mouseleave', () => {
        should_show_tooltip = false
        button.querySelector('.data-picker-button-tooltip').classList.remove('visible')
    })
    return button
}

export const create_data_picker = (el, cb) => {
    el.append(
        ...datas.map(d => create_data_button(d, cb))
    )
}