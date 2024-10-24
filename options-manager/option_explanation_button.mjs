import { create_element_from_Html, escapeHtml } from '../utils.mjs'
import { options_extra_meta } from './options_extra_meta.mjs'

export const option_explanation_button = (option_name) => {
    const extra = options_extra_meta[option_name]
    const el = create_element_from_Html(`
        <div class="option-explanation-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"/></svg>
        </div>
    `)
    el.addEventListener('click', () => {
        const tooltip = document.querySelector('#option-input-tooltip')
        tooltip.style.display = 'block'
        tooltip.querySelector('div').innerHTML = escapeHtml(extra.explanation)
            + (extra.image === true ? `<img src="options/${option_name}.png">` : '')
            + (
                extra?.more_link
                    ? `<a class="more-link" href=${extra.more_link}>${extra.more_link_text || 'More'}</a>`
                    : '')
    })
    return el
}