import { create_element_from_Html } from '../pages/utils.mjs'
import { escape_Html } from '../pages/utils.mjs'
export { create_tooltip } from './tooltip.mjs'
export { option_explanation_button } from './option_explanation_button.mjs'

export const inputs_root_wrapper = () => create_element_from_Html(
    `<div
        class="options-manager-wrapper"
        style='
            position: fixed;
            top: 0px;
            right: -1000px;
            width: 265px;
            height: 100vh;
            overflow: visible scroll;
            font-family: sans-serif;
            font-size: 14px;
            z-index: 4;
            padding-bottom: 50px;
            box-sizing: border-box;
            background: white;
            border-left: 1px solid #ccc;
            letter-spacing: 0.03em;
        '
    ></div>`
)

export const sidebar_close_button = () => {
    const button = create_element_from_Html(
        `<div
            class="sidebar-close-button"
            style='
                font-size: 35px;
                box-sizing: border-box;
                cursor: pointer;
                float: right;
                margin: 8px;
                width: 27px;
                height: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
                user-select: none;
        }
            '
        >&#215;</div>`
    )
    button.addEventListener('click', (e) => {
        e.preventDefault()
        button.parentElement.style.right = '-1000px'
    })
    return button
}


export const options_group_heading = (
    text,
    options_type_name,
    is_expanded
) => create_element_from_Html(`
    <div class="options-group-heading">
        ${text.toLowerCase()}
        <span class='${options_type_name}-arrow' style='
            transform: ${ is_expanded ? 'rotate(180deg)' : 'none' }
        '>
            V
        </span>
    </div>
`)

export const option_wrapper_el = (name, type, title) => create_element_from_Html(
    `<div class="single-option-wrapper">
        <span class="option-name">${name}</span>
            
        <div class="single-option ${type}">
            <div class="option-info">
                <span class="option-title">${escape_Html(title)}</span>
                <span class="explanation-placeholder"></span>
            </div>
            <span class="input-placeholder"></span>
        </div>
    </div>`
)

export const grouped_inputs_wrapper = (options_type_name, names_of_expanded_groups) => create_element_from_Html(`
    <div class='group-of-options ${options_type_name}' style='overflow: hidden; height: ${
        names_of_expanded_groups.includes(options_type_name)
        ? 'auto'
        : 0
    }'></div>
`)