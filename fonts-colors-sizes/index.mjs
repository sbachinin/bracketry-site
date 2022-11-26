import { createPlayoffs } from '../easy-playoffs.min.js'
import data from '../test_data/finished-singles-2021.js'
import { add_options_manager } from '../options-manager/options-manager.mjs'
import { adjust_options_on_resize } from '../options/adjust_options_on_resize.mjs'

const playoffs = createPlayoffs(
    data,
    document.querySelector('.common-playoffs-wrapper'),
    {
        rootBgColor: "#316581",
        mainVerticalPadding: 40,
        rootBorderColor: "#c54343",
        roundTitlesVerticalPadding: 0,
        roundTitleColor: "orangered",
        defaultNavigationIconSize: 25,
        navButtonSvgColor: "#a8ff75",
        verticalScrollMode: "mixed",
        defaultScrollIconSize: 24,
        scrollbarWidth: 12,
        scrollbarColor: "#ffc107",
        roundTitlesFontFamily: "monospace",
        roundTitlesFontSize: 26,
        matchTextColor: "#14fdff",
        matchFontSize: 18,
        playerTitleFontFamily: "courier",
        highlightedPlayerTitleColor: "#2cfe4d",
        scoreFontFamily: "serif",
        connectionLinesWidth: 4,
        connectionLinesColor: "#a6d41a",
        highlightedConnectionLinesColor: "orangered",
        matchMinVerticalGap: 30,
        matchHorMargin: 10,
        matchAxisMargin: 8,
        distanceBetweenScorePairs: 8,
        matchStatusBgColor: "pink"
    }
)

const options_manager = add_options_manager(
    document.querySelector('.options-manager-opener'),
    playoffs
)

adjust_options_on_resize(playoffs, options_manager)