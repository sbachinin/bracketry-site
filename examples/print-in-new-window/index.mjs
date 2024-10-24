import { createBracket } from '../../bracketry.min.js'
import data from '../../test_data/finished-singles-2021.js'

createBracket(
    data,
    document.querySelector('.common-bracket-wrapper'),
    {
        getNationalityHTML: p => `<div style="
        width: 28px;
        text-align: center;
        font-size: 14px;
        background: #f0f0f0;">${p.nationality}</div>`,
        getEntryStatusHTML: es => `<div style="
        width: 24px;
        font-size: 14px;
        text-align: center;">${es || ''}</div>`,
        verticalScrollMode: 'mixed'
    }
)



// PRINT-RELATED CODE BELOW:

const printStyles = `
    html,
    body {
        height: max-content;
        max-width: max-content;
        width: max-content;
        margin: 0;
        padding: 0;
    }

    html {
        overflow-x: scroll;
    }

    .bracket-root {
        height: max-content !important;
    }

    .matches-positioner, .round-titles-wrapper {
        width: auto !important;
    }

    .navigation-button, .scroll-button, .scrollbar-parent {
        display: none !important;
    }

    @media print {
        .noprint {
            display: none;
        }
    }
`


function printBracket(selector, title, extraStyles) {
    let printWindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');

    printWindow.document.write(`<html><head><title>${title}</title>`);

    printWindow.document.write(`
        <style>
            ${printStyles}
            ${document.head.querySelector('#root-permanent-styles').textContent}
            ${extraStyles}
        </style>
    `);

    printWindow.document.write('</head><body >');
    printWindow.document.write('<p class="noprint">Here you can add instruction for a user about how to adjust print settings. (This will not be printed)</p>')
    printWindow.document.write(document.querySelector(selector).outerHTML);
    printWindow.document.write('</body></html>');

    printWindow.document.close(); // necessary for IE >= 10
    printWindow.focus(); // necessary for IE >= 10*/

    // printWindow.print();
    // printWindow.close();

    return true;
}

document.querySelector('#print').addEventListener('click', () => {
    printBracket('.bracket-root', 'Some title')
})