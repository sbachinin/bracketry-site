export const is_object = variable => {
    return typeof variable === 'object'
        && !Array.isArray(variable)
        && variable !== null
}

export const create_element_from_Html = htmlString => {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstElementChild;
}

export const insert_styles = (root_id, styles_id, styles) => {
    document.head.insertAdjacentHTML(
        'beforeend',
        `<style id='${root_id}-${styles_id}'>${styles}</style>`
    )
}

export const escape_Html = unsafe => {
    return String(unsafe)
        ?.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


export const get_n_things = (n, cb) => {
    return Array.from(Array(n)).map((_, i) => cb(i))
}