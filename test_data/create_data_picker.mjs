import { create_element_from_Html, get_n_things } from '../utils.mjs'
import { datas, INITIAL_TEST_DATA_INDEX } from './get_some_data.mjs'

const update_dots = (dots, current_index) => {
    dots.forEach((d, i) => {
        if (i === current_index) {
            d.classList.add('selected')
        } else {
            d.classList.remove('selected')
        }
    })
}

export const create_data_picker = (el, cb) => {
    const button = create_element_from_Html(`<div class="main-button">change data</div>`)

    const dots = get_n_things(datas.length, () => {
        return create_element_from_Html(`<div class="data-picker-dot"></div>`)
    })

    let current_index = INITIAL_TEST_DATA_INDEX

    button.addEventListener('click', () => {
        current_index++
        if (current_index >= datas.length) current_index = 0
        update_dots(dots, current_index)
        datas[current_index].resolver().then(cb)
    })

    el.append(button)

    update_dots(dots, current_index)
    el.append(...dots)
}