import { createBracket } from '../bracketry.min.js'
import data from '../test_data/unfinished-tennis-doubles.js'
import { add_options_manager } from '../options-manager/options-manager.mjs'
import { OPTIONS } from '../options-manager/options_meta.mjs'
import { options_extra_meta } from '../options-manager/options_extra_meta.mjs'
import { escapeHtml } from '../utils.mjs'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

const options = {
    getNationalityHTML: p => {
        let url = ''
        if (p.team_id) {
            url = `./football_flags/${p.team_id}.png`
        } else {
            url = `https://flagcdn.com/16x12/${p.nationality?.toLowerCase()}.png`
        }
        return `<img style="width: 16px; margin-right: 5px;" src="${url}">`
    },
    getEntryStatusHTML: es => {
        if (es === 'none') {
            return ''
        }
        return `<div style="
            width: 23px;
            font-size: 12px;
            text-align: center;">${es || ''}</div>`
    },
    verticalScrollMode: 'mixed'
}

const bracket = createBracket(
    data,
    document.querySelector('.common-bracket-wrapper'),
    options
)

const options_manager = add_options_manager(
    document.querySelector('.options-manager-opener'),
    bracket
)

const get_option_type_label = (type) => {
    if (type === 'function_or_null') return 'function or null'
    if (type === 'multiline_string' || type === 'select') return 'string'
    if (type === 'pixels') return 'number'
    return type
}

const get_options_group = ([options_group_name, options_of_group], i) => {
    let html = ''

    if (i > 0) {
        html += `<div style="grid-column: 1/-1">
            <div class="option-group-title" id="${options_group_name.toLowerCase().replace(/_/g, '-')}">
                ${options_group_name.toLowerCase().replace(/_/g, ' ')}
                
                ${options_group_name === 'BORDERS_OPTIONS'
                    ? `(<a href="../fonts-colors-sizes#borders">see diagram</a>)`
                    : ''}

                ${options_group_name === 'FONTS_OPTIONS'
                    ? `(<a href="../fonts-colors-sizes#fonts">see diagram</a>)`
                    : ''}
            </div>
        </div>`
    }

    html += Object.entries(options_of_group).map(([name, meta]) => {
        const extra = options_extra_meta[name]
        return `
            <div id=${name} class="name-cell">${name}</div>
            <div class="summary-cell">${escapeHtml(extra?.title) || ''}</div>
            <div class="type-cell">${get_option_type_label(meta.type)}</div>
            <div class="default-value-cell">${meta.default_value}</div>
            <div class="explanation-cell">${
                    escapeHtml(extra?.explanation || '')
                }${
                    extra.image === true ? `<img src="./${name}.png">` : ''
                }${
                    extra?.more_link ? `<a class="more-link" href=${extra.more_link}>${
                        extra.more_link_text || 'More'
                    }</a>` : ''
                }</div>
        `
    }).join('\n')

    return html
}

const options_html = `
            <div class="option-group-title">General options</div>
            <div class="options-table">
                <div>Name</div>
                <div>Essence</div>
                <div>Type</div>
                <div>Default</div>
                <div>Explanation</div>
                ${Object.entries(OPTIONS).map(get_options_group).join('')}
            </div>
        `

document.querySelector('.list-of-options').innerHTML = options_html


adjust_options_on_resize(bracket, options_manager)
