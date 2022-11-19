import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/finished-singles-2021.js'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

const playoffs1 = createPlayoffs(
    data,
    document.querySelector('.common-playoffs-wrapper.first'),
    {
        rootBgColor: '#fff'
    }
)

document.querySelector('.buttons.first .button-prev').addEventListener('click', () => {
    playoffs1.moveToPreviousRound()
})

document.querySelector('.buttons.first .button-next').addEventListener('click', () => {
    playoffs1.moveToNextRound()
})

adjust_options_on_resize(playoffs1)








const playoffs2 = createPlayoffs(
    data,
    document.querySelector('.common-playoffs-wrapper.second'),
    {
        rootBgColor: '#fff'
    }
)

document.querySelector('.buttons.second .button-prev').addEventListener('click', () => {
    playoffs2.moveToPreviousRound()
})

document.querySelector('.buttons.second .button-next').addEventListener('click', () => {
    playoffs2.moveToNextRound()
})

document.querySelector('.buttons.second .button-first').addEventListener('click', () => {
    playoffs2.setBaseRoundIndex(0)
})

document.querySelector('.buttons.second .button-last').addEventListener('click', () => {
    playoffs2.moveToLastRound()
})

data.rounds.forEach((r, i) => {
    document.querySelector(`.buttons.second .button-${i}`).addEventListener('click', () => {
        playoffs2.setBaseRoundIndex(i)
    })
})

adjust_options_on_resize(playoffs2)




















const playoffs3 = createPlayoffs(
    data,
    document.querySelector('.common-playoffs-wrapper.third'),
    {
        rootBgColor: '#fff',
        navButtonsPosition: 'hidden'
    }
)

const prev_b = document.querySelector('.buttons.third .button-prev'),
    next_b = document.querySelector('.buttons.third .button-next'),
    first_b = document.querySelector('.buttons.third .button-first'),
    last_b = document.querySelector('.buttons.third .button-last'),
    num_bs = document.querySelectorAll('.buttons.third > .num-button')

const update_buttons = () => {
    const {
        lastRoundIsFullyVisible: lrv,
        allRoundsAreVisible: arv,
        baseRoundIndex: bri
    } = playoffs3.getNavigationState()

    num_bs.forEach((b, i) => {
        if (i === bri) {
            b.classList.add('selected')
        } else {
            b.classList.remove('selected')
        }
        if (lrv && i > bri) {
            b.classList.add('disabled')
        } else {
            b.classList.remove('disabled')
        }
    })

    if (bri === 0) {
        prev_b.classList.add('disabled')
        first_b.classList.add('disabled')
        
    } else {
        prev_b.classList.remove('disabled')
        first_b.classList.remove('disabled')
    }

    if (lrv) {
        next_b.classList.add('disabled')
        last_b.classList.add('disabled')
    } else {
        next_b.classList.remove('disabled')
        last_b.classList.remove('disabled')
    }
}

update_buttons()

prev_b.addEventListener('click', () => {
    playoffs3.moveToPreviousRound()
    update_buttons()
})

next_b.addEventListener('click', () => {
    playoffs3.moveToNextRound()
    update_buttons()
})

first_b.addEventListener('click', () => {
    playoffs3.setBaseRoundIndex(0)
    update_buttons()
})

last_b.addEventListener('click', () => {
    playoffs3.moveToLastRound()
    update_buttons()
})

data.rounds.forEach((r, i) => {
    document.querySelector(`.buttons.third .button-${i}`).addEventListener('click', () => {
        playoffs3.setBaseRoundIndex(i)
        update_buttons()
    })
})

adjust_options_on_resize(playoffs3)