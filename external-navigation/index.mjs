import { createBracket } from '../bracketry.min.js'
import data from '../test_data/finished-singles-2021.js'

const bracket1 = createBracket(
    data,
    document.querySelector('.common-bracket-wrapper.first'),
    {
        rootBgColor: '#fff',
        navButtonsPosition: 'hidden',
        verticalScrollMode: 'mixed',
        displayWholeRounds: true
    }
)

document.querySelector('.buttons.first .button-prev').addEventListener('click', () => {
    bracket1.moveToPreviousRound()
})

document.querySelector('.buttons.first .button-next').addEventListener('click', () => {
    bracket1.moveToNextRound()
})









const bracket2 = createBracket(
    data,
    document.querySelector('.common-bracket-wrapper.second'),
    {
        rootBgColor: '#fff',
        navButtonsPosition: 'hidden',
        verticalScrollMode: 'mixed',
        displayWholeRounds: true
    }
)

document.querySelector('.buttons.second .button-prev').addEventListener('click', () => {
    bracket2.moveToPreviousRound()
})

document.querySelector('.buttons.second .button-next').addEventListener('click', () => {
    bracket2.moveToNextRound()
})

document.querySelector('.buttons.second .button-first').addEventListener('click', () => {
    bracket2.setBaseRoundIndex(0)
})

document.querySelector('.buttons.second .button-last').addEventListener('click', () => {
    bracket2.moveToLastRound()
})

const mbri2 = bracket2.getNavigationState().maxBaseRoundIndex
const numbersWrapper2 = document.querySelector(`.buttons.second .number-buttons`)
Array.from(Array(mbri2 + 1)).forEach((r, i) => {
    const buttonEl = document.createElement('div')
    buttonEl.className = 'button-' + i
    buttonEl.innerText = i
    buttonEl.addEventListener('click', () => {
        bracket2.setBaseRoundIndex(i)
    })
    numbersWrapper2.append(buttonEl)
})





















const bracket3 = createBracket(
    data,
    document.querySelector('.common-bracket-wrapper.third'),
    {
        rootBgColor: '#fff',
        navButtonsPosition: 'hidden',
        verticalScrollMode: 'mixed',
        displayWholeRounds: true
    }
)


const mbri3 = bracket3.getNavigationState().maxBaseRoundIndex
const numbersWrapper3 = document.querySelector(`.buttons.third .number-buttons`)
Array.from(Array(mbri3 + 1)).forEach((r, i) => {
    const buttonEl = document.createElement('div')
    buttonEl.className = 'button-' + i
    buttonEl.innerText = i
    buttonEl.addEventListener('click', () => {
        bracket3.setBaseRoundIndex(i)
        update_buttons()
    })
    numbersWrapper3.append(buttonEl)
})

const prev_b = document.querySelector('.buttons.third .button-prev'),
    next_b = document.querySelector('.buttons.third .button-next'),
    first_b = document.querySelector('.buttons.third .button-first'),
    last_b = document.querySelector('.buttons.third .button-last'),
    num_bs = document.querySelectorAll('.buttons.third > .number-buttons > div')

const update_buttons = () => {
    const {
        lastRoundIsFullyVisible: lrv,
        baseRoundIndex: bri
    } = bracket3.getNavigationState()

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
    bracket3.moveToPreviousRound()
    update_buttons()
})

next_b.addEventListener('click', () => {
    bracket3.moveToNextRound()
    update_buttons()
})

first_b.addEventListener('click', () => {
    bracket3.setBaseRoundIndex(0)
    update_buttons()
})

last_b.addEventListener('click', () => {
    bracket3.moveToLastRound()
    update_buttons()
})
