import { OPTIONS } from './options_meta.mjs'
import { get_all_options_names } from './options-meta-getter.mjs'
import { insertAfter } from '../utils.mjs'
import { create_element_from_Html } from '../utils.mjs'

export const add_options_search = (
    options_manager_wrapper,
    toggle_group_expand
) => {

    const search_input = document.createElement('input')
    search_input.className = 'search-input'
    search_input.placeholder = 'search'

    let found_names = []
    let selected_find_i = -1
    search_input.addEventListener('input', e => {
        selected_find_i = -1
        options_manager_wrapper.querySelector('.found-names')?.remove()
        if (e.target.value.length < 3) return
        found_names = get_all_options_names().filter(n => n.toLowerCase().match(e.target.value.toLowerCase()))
        const found_el = create_element_from_Html(
            `<div class='found-names'>
                ${found_names.map(n => `<div class='found-name'>${n}</div>`).join('')}
            </div>`
        )
        insertAfter(found_el, e.target)
    })


    const go_to_option = (option_name) => {
        const group_name = Object.keys(OPTIONS)
            .find(group_name => {
                return Object.keys(OPTIONS[group_name])
                    .includes(option_name)
            })
        toggle_group_expand(group_name, true)
        options_manager_wrapper.querySelectorAll(`.single-option-wrapper`)
            .forEach(o => {
                if (o.getAttribute('option-name') === option_name) {
                    o.classList.add('selected')
                    o.scrollIntoView()
                    options_manager_wrapper.querySelector('.found-names')?.remove()
                    search_input.value = ''
                    search_input.blur()
                    o.querySelector('input, textarea, select')?.focus()
                } else {
                    o.classList.remove('selected')
                }
            })
    }
    

    window.addEventListener('keydown', (e) => {
        if (search_input !== document.activeElement) return
        if (e.key === 'ArrowUp') {
            e.preventDefault()
            if (selected_find_i > 0) {
                selected_find_i += -1
            } else {
                selected_find_i = found_names.length - 1
            }
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault()
            if (selected_find_i < found_names.length - 1) {
                selected_find_i += 1
            } else {
                selected_find_i = 0
            }
        }
        if (e.key === 'Enter') {
            go_to_option(found_names[selected_find_i])
        }
        options_manager_wrapper.querySelectorAll('.found-name').forEach((el, i) => {
            if (i === selected_find_i) {
                el.classList.add('selected')
            } else {
                el.classList.remove('selected')
            }
        })
    })

    options_manager_wrapper.addEventListener('click', e => {
        if (e.target.classList.contains('found-name')) {
            go_to_option(e.target.textContent)
        }
    })

    options_manager_wrapper.prepend(search_input)
}