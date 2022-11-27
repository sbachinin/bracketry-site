import { create_element_from_Html } from '../utils.mjs'

export const create_tooltip = () => {
    const tooltip = create_element_from_Html(`
        <div
            id="option-input-tooltip">
            <div style="white-space: pre-wrap"></div>
        </div>
    `)
    window.addEventListener('click', (e) => {
        if (
            e.target.closest('#option-input-tooltip')
            || e.target.closest('.option-explanation-button')
        ) return
        
        tooltip.style.display = 'none'
    })
    window.addEventListener('keyup', (e) => {
        if (e.key === 'Escape' && tooltip.style.display !== 'none') {
            tooltip.style.display = 'none'
        }
    })
    document.body.append(tooltip)
    return tooltip
}
