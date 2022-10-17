import * as elements from './elements.mjs'

export const get_options_group_heading = (group_name, is_expanded, toggle_group_expand) => {
    const text = group_name
        .split('_')
        .filter(word => word !== 'OPTIONS')
        .map(word => word[0].toUpperCase() + word.slice(-word.length + 1).toLowerCase())
        .join(' ')

    const el = elements.options_group_heading(text, group_name, is_expanded)

    el.addEventListener('click', () => toggle_group_expand(group_name))

    return el
}