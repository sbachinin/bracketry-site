import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/finished-singles-2021.js'

const modal = document.querySelector('.modal')
modal.addEventListener('click', (e) => {
    if (!e.target.closest('.modal-content')) {
        modal.classList.add('hidden')
    }
})

const options = {
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

const playoffs = createPlayoffs(
    data,
    document.querySelector('.wr1'),
    {
        onMatchClick: match => {
            const name1 = data.contestants[match.sides[0].contestantId].players[0].title
            const name2 = data.contestants[match.sides[1].contestantId].players[0].title

            modal.querySelector('.modal-content').innerHTML = `...Some details of the match between ${name1} and ${name2}`
            modal.classList.remove('hidden')
        },

        ...options
    }
)



const playoffs2 = createPlayoffs(
    data,
    document.querySelector('.wr2'),
    {
        onMatchSideClick: (match, sideIndex) => {
            const contestant = data.contestants[match.sides[sideIndex]?.contestantId]
            if (contestant !== undefined) {
                window.open(
                    `http://google.com/search?q=${contestant.players[0].title}`,
                    '_blank'
                ).focus()
            }
        },

        ...options
    }
)
