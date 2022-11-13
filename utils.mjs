export function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

export const throttle_with_trailing = (callback, delay) => {
    var ready = true,
        args = null;

    return function throttled() {
        var context = this;

        if (ready) {
            ready = false;

            setTimeout(function() {
                ready = true;

                if (args) {
                    throttled.apply(context);
                }
            }, delay);

            if (args) {
                callback.apply(this, args);
                args = null;
            } else {
                callback.apply(this, arguments);
            }
        } else {
            args = arguments;
        }
    };
}


export const escapeHtml = (unsafe) => {
    if (typeof unsafe !== 'string') return unsafe
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }