import { create_element_from_Html, escapeHtml, is_object } from '../utils.mjs'
import * as elements from './elements.mjs'
import { options_extra_meta } from './options_extra_meta.mjs'

export const get_option_input = (name, info, onchange) => {
    let input
    let update_the_value

    switch (info.type) {
        case 'number':
            input = create_element_from_Html(`<input type='number'></input>`)
            input.addEventListener('input', e => {
                onchange(name, Number(e.target.value))
            })
            update_the_value = (v) => input.value = v
            break

        case 'pixels':
            input = create_element_from_Html(`
                <div style="display:flex">
                    <input style="margin-right: 10px" type='number'></input>
                    <span class="pixels-badge">px</span>
                </div>
            `)
            input.addEventListener('input', e => {
                onchange(name, Number(e.target.value))
            })
            update_the_value = (v) => input.querySelector('input').value = v
            break

        case 'string':
            input = create_element_from_Html(`<input type='text'></input>`)
            input.addEventListener('input', e => {
                onchange(name, e.target.value)
            })
            update_the_value = (v) => input.value = escapeHtml(v)
            break

        case 'function_or_null':
            input = create_element_from_Html(
                `<i style="color: #929292">Sorry, no input</i>`
            )
            update_the_value = () => { }
            break

        case 'multiline_string':
            input = create_element_from_Html(`
                <textarea style="width: 100%; height: 100px;"></textarea>
            `)
            input.addEventListener('input', e => {
                onchange(name, e.target.value)
            })
            update_the_value = (v) => input.value = v
            break

        case 'select':
            input = create_element_from_Html(`
                <select>
                    ${info.options.map(option => {
                const v = is_object(option) ? option.value : option
                const title = is_object(option) ? option.title : option
                return `<option value="${v}">${title}</option>`
            }).join('')}
                </select>
            `)
            input.addEventListener('change', e => {
                onchange(name, e.target.value)
            })
            update_the_value = (v) => input.value = v
            break

        case 'boolean':
            input = create_element_from_Html(`<div class="checkbox">V</div>`)
            input.addEventListener('click', () => { onchange(name, !input.classList.contains('checked')) })
            update_the_value = (v) => {
                if (v === true) {
                    input.classList.add('checked')
                } else {
                    input.classList.remove('checked')
                }
            }
            break
    }


    const extra = options_extra_meta[name]
    if (!extra) throw 'no meta for an option called ' + name
    const wrapper_el = elements.option_wrapper_el(name, info.type, extra?.title)
    wrapper_el.querySelector('.input-placeholder').replaceWith(input)
    wrapper_el.querySelector('.explanation-placeholder').replaceWith(
        (extra?.explanation || extra.image || extra.more_link)
            ? elements.option_explanation_button(name)
            : ''
    )

    const update = (actual_options) => {
        const disabled_value = extra?.disable_if?.(actual_options)

        // if disable_if returns undefined, it means "don't disable and don't alter the actual value"
        // if disable-if returns non-undefined (including false), it means "disable and set the input value to this returned value"

        if (disabled_value !== undefined) {
            wrapper_el.classList.add('disabled')
            update_the_value(disabled_value)
            input.readOnly = true
        } else {
            wrapper_el.classList.remove('disabled')
            update_the_value(actual_options[name])
            input.readOnly = false
        }
    }

    return {
        el: wrapper_el,
        update
    }
}
