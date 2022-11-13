import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/unfinished-tennis-doubles.js'
import { add_options_manager } from '../options-manager/options-manager.mjs'
import { OPTIONS } from '../options-manager/options_meta.mjs'
import { options_extra_meta } from '../options-manager/options_extra_meta.mjs'
import { escapeHtml } from '../utils.mjs'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

const playoffs = createPlayoffs(
    data,
    document.querySelector('.common-playoffs-wrapper'),
)

const options_manager = add_options_manager(
    document.querySelector('.options-manager-opener'),
    playoffs
)

const get_option_type_label = (type) => {
    if (type === 'function_or_null') return 'function or null'
    if (type === 'multiline_string') return 'string'
    if (type === 'pixels') return 'number'
    return type
}

const options_html = `
            <div class="option-group-title">General options</div>
            <table>
                <thead>
                    <tr>
                        <th align="left">Name</th>
                        <th align="left">Essence</th>
                        <th align="left">Type</th>
                        <th align="left">Default</th>
                        <th align="left">Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    ${Object.entries(OPTIONS).map(([options_group_name, options_of_group], i) => {

    return `<tr><td colspan=10>

                                        ${i === 0
            ? ''
            : `<div class="option-group-title">
                                                ${options_group_name.toLowerCase().replace(/_/g, ' ')}
                                            </div>`
        }
                                        
                                        </td></tr>` +
        Object.entries(options_of_group).map(([name, meta]) => `
                                <tr id=${name}>
                                    <td align="left">${name}</td>
                                    <td align="left" class="td-essence">${escapeHtml(options_extra_meta[name]?.title) || ''}</td>
                                    <td align="left">${get_option_type_label(meta.type)}</td>
                                    <td align="left">${meta.default_value}</td>
                                    <td align="left" class="td-explanation">${options_extra_meta[name]?.explanation || ''}</td>
                                </tr>
                            `).join('\n')
}).join('')}
                </tbbody>
            </table>
        `

document.querySelector('.list-of-options').innerHTML = options_html


adjust_options_on_resize(playoffs, options_manager)
