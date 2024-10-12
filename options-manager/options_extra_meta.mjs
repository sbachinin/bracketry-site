const scroll_buttons_are_hidden = options => {
    return (
        options.verticalScrollMode !== 'buttons'
        && options.verticalScrollMode !== 'mixed'
    )
}

export const options_extra_meta = {

    verticalScrollMode: {
        title: `Vertical scroll mode`,
        explanation: `Possible values:
    
    - "native": matches are scrolled in a "native browser way"
    
    - "buttons": two buttons appear before and after the matches. They scroll the content by a number of pixels defined by options.buttonScrollAmount.
    
    - "mixed": buttons AND mousewheel. BUT NOT other native ways of scrolling like keyboard keys or touchmove.`,

        disable_if: options => {
            return options.verticalScrollMode // disable anyway because it's not updatable
        },
        more_link: 'scroll-modes'
    },

    scrollButtonsPosition: {
        title: `Vertical scroll buttons position`,
        explanation: `Applied only when options.verticalScrollMode is "buttons" or "mixed".
Possible values:
    - "gutters": above and below the matches, squeezing the matches' container.
    - "overMatches": above and below the matches, not squeezing the matches' container but put on top of it`,
        disable_if: o => { if (scroll_buttons_are_hidden(o)) return '' },
        more_link: 'adjust-scroll-buttons#position'
    },

    scrollButtonArrowSize: {
        title: `Size of a default scroll arrow`,
        disable_if: o => { if (scroll_buttons_are_hidden(o)) return 0 }
    },

    buttonScrollAmount: {
        title: `Scroll amount on button clicks`,
        explanation: `Applied to vertical scroll when it's triggered by buttons clicks (when options.verticalScrollMode === "buttons" or "mixed")
This amount is a number of pixels covered by this "synthetic scroll" per one button click`,
        disable_if: o => { if (scroll_buttons_are_hidden(o)) return 0 }
    },

    scrollButtonSvgColor: {
        title: 'Color of the default scroll arrow',
        explanation: ``,
        disable_if: o => { if (scroll_buttons_are_hidden(o)) return '' }
    },

    scrollUpButtonHTML: {
        title: 'Inner HTML of UP scroll button (<svg> / <img> / whatever)',
        explanation: `This HTML string must be wrapped in a tag (<svg> / <img> / <div> / any).`,
        more_link: 'adjust-scroll-buttons#icons',
        disable_if: o => { if (scroll_buttons_are_hidden(o)) return '' }
    },
    scrollDownButtonHTML: {
        title: 'Inner HTML of DOWN scroll button (<svg> / <img> / whatever)',
        explanation: `This HTML string must be wrapped in a tag (<svg> / <img> / <div> / any).`,
        more_link: 'adjust-scroll-buttons#icons',
        disable_if: o => { if (scroll_buttons_are_hidden(o)) return '' }
    },

    scrollButtonPadding: {
        title: 'Padding around the default scroll arrow',
        explanation: 'This value will be assigned as "padding" CSS property so it accepts all possible variations of such property: "10px", "0 10px", "0 10px 0 0" etc',
        disable_if: o => { if (scroll_buttons_are_hidden(o)) return 0 }
    },

    width: {
        title: `Bracket's total width`,
        explanation: `Default value of "max-content" means that the root Bracketry element will take as much width as necessary for the actual content BUT not more than the width of your wrapper element.
Example usage: set this to "100%" if you want the content to stretch to the full width of your wrapper element (in case the content is narrow).`
    },

    height: {
        title: `Bracket's total height`,
        explanation: `In most other cases a default value of "100%" will be the most adequate choice. But make sure to set explicit width and height on your wrapper element in which you install bracketry. This will prevent height from jumping after bracket's installation.`,
        more_link: 'create-bracket#problem-of-height'
    },

    rootBorderColor: {
        title: 'Root border color',
        explanation: `Border color to be inherited by all border-related options with an "" (empty string) value`
    },

    wrapperBorderColor: {
        title: `Border around the main bracket wrapper`,
        explanation: `Basically it's the same as setting border on your wrapper element.
Default "" (empty string) value means that the "rootBorderColor" option will be used for this border`,
    },

    liveMatchBorderColor: {
        title: 'Live match border color',
        explanation: `When this options is set to "" (empty string), "rootBorderColor" option will be used instead`
    },

    roundTitlesBorderColor: {
        title: 'Round titles bottom border-color',
        explanation: `When this options is set to "" (empty string), "rootBorderColor" option will be used instead`
    },

    scrollGutterBorderColor: {
        title: `Scroll gutter border color`,
        explanation: `Applied when options.verticalScrollMode === "buttons" AND options.scrollButtonsPosition === "gutters".
When this options is set to "" (empty string), "rootBorderColor" option will be used instead`,
        disable_if: options => {
            if (
                options.verticalScrollMode === 'native'
                || options.scrollButtonsPosition !== 'gutters'
            ) {
                return ''
            }
        }
    },

    hoveredMatchBorderColor: {
        title: 'Hovered match border color',
        explanation: `This color is applied only when options.onMatchClick is provided.
When this option is set to "" (empty string), "rootBorderColor" option will be used instead`,
        disable_if: o => {
            if (typeof o.onMatchClick !== 'function') {
                return ''
            }
        }
    },

    navGutterBorderColor: {
        title: 'Navigation gutter border color',
        explanation: `Applied only when navButtonsPosition is "gutters" or "overTitles" or "beforeTitles".
When this options is set to "" (empty string), "rootBorderColor" option will be used instead`,
        disable_if: options => {
            if (options.navButtonsPosition !== 'gutters'
                && options.navButtonsPosition !== 'overTitles'
                && options.navButtonsPosition !== 'beforeTitles') {
                return ''
            }
        }
    },

    rootBgColor: {
        title: 'Root background color',
    },

    mainVerticalPadding: {
        title: `Main vertical padding`,
        explanation: `It's a padding before the first match and after the last match of the base round`,
        image: true
    },

    visibleRoundsCount: {
        title: `How many rounds to display`,
        explanation: `Provide 0 for "automatic" width (but it's a default anyway).
Automatic means a natural width of a widest match (if not adjusted by "displayWholeRounds" option).
This options may be useful if you want to make bracket "responsive", i.e. to respond to changing viewport size. On mobile screen it makes sense to set visibleRoundsCount to 1.
Fractional visibleRoundsCount is possible (but do you need it? 🚽)`,
        more_link: `rounds-count`
    },

    displayWholeRounds: {
        title: `Display a whole number of rounds`,
        explanation: `When set to true, rounds are slightly stretched in order to hide the partly visible round on the right.
Mind that in some cases rounds (and matches too) can become TOO wide. To prevent this use matchMaxWidth option.

displayWholeRounds is not applied if "visibleRoundsCount" option is set to something other than 0.`,
        disable_if: o => {
            if (o.visibleRoundsCount > 0) {
                return true
            }
        },
        more_link: `rounds-count`
    },

    useClassicalLayout: {
        title: 'Use classical layout',
        explanation: `When set to true, it instructs bracketry to preserve the original vertical margins between matches when navigating between rounds.`,
        more_link: `options#useClassicalLayout-more`
    },

    showScrollbar: {
        title: 'Should show scrollbar',
        explanation: `Set this to false to remove scrollbar`
    },

    scrollbarWidth: {
        title: 'Scrollbar width',
        explanation: ``
    },

    scrollbarColor: {
        title: 'Scrollbar color',
        explanation: ``
    },

    disableHighlight: {
        title: `Don't highlight contestant history on click`,
        explanation: `Might be useful if you have different plans for clicks.
For instance, if you want to make team titles behave like links (perhaps using "getPlayerTitleHTML" option).

disableHighlight is automatically set to true if you provide "onMatchClick" or "onMatchSideCLick" options`,
        disable_if: o => {
            if (typeof o.onMatchClick === 'function' || typeof o.onMatchSideClick === 'function') {
                return true
            }
        }
    },

    getRoundTitleElement: {
        title: 'Round title Element getter',
        explanation: `Here you can provide your own round title element.

getRoundTitleElement will be called with:
    1) data of a round which is being rendered,
    2) index of a round which is being rendered (0-based).

Whatever you return from this function will be injected into the round titles bar.`,
        more_link: 'inject-markup#getRoundTitleElement'
    },

    roundTitlesVerticalPadding: {
        title: `Round titles' vertical padding`,
        explanation: ``,
        image: true
    },

    roundTitleColor: {
        title: 'Round title color',
        explanation: ``
    },

    resetScrollOnNavigation: {
        title: 'Reset vertical scroll on navigation?',
        explanation: `With this option set to true, scroll position will be reset to 0 every time a user navigates to previous/next round`
    },

    navButtonsPosition: {
        title: 'Navigation (switch rounds) buttons position',
        explanation: `"overMatches": left and right (on top of matches)
"gutters": left and right (in the gutters)
"beforeTitles": header (before round titles)
"overTitles": header (on top of round titles)
"hidden": hidden`,
        more_link: 'adjust-nav-buttons#position'
    },

    navButtonsTopDistance: {
        title: `Navigation buttons' distance from top`,
        explanation: `Takes effect only when navButtonsPosition is set to "overMatches".
Can be specified in any CSS units`,
        disable_if: o => {
            if (o.navButtonsPosition !== 'overMatches') {
                return ''
            }
        },
        image: true
    },

    navButtonArrowSize: {
        title: 'Size of the default navigation arrow',
        explanation: ``,
        disable_if: o => {
            if (o.navButtonsPosition === 'hidden') {
                return 0
            }
        }
    },
    navButtonSvgColor: {
        title: 'Color of the default navigation arrow',
        explanation: ``,
        disable_if: o => {
            if (o.navButtonsPosition === 'hidden') {
                return ''
            }
        }
    },

    leftNavButtonHTML: {
        title: 'Inner HTML of LEFT navigation button',
        explanation: `This HTML string must be wrapped in a tag (<svg> / <img> / <div> / any).`,
        more_link: 'adjust-nav-buttons#icons',
        disable_if: o => {
            if (o.navButtonsPosition === 'hidden') {
                return ''
            }
        }
    },
    rightNavButtonHTML: {
        title: 'Inner HTML of RIGHT navigation button (<svg> / <img> / whatever)',
        explanation: `This HTML string must be wrapped in a tag (<svg> / <img> / <div> / any).`,
        more_link: 'adjust-nav-buttons#icons',
        disable_if: o => {
            if (o.navButtonsPosition === 'hidden') {
                return ''
            }
        }
    },

    navButtonPadding: {
        title: 'Padding around the default navigation arrow',
        explanation: 'This value will be assigned as "padding" CSS property so it accepts all possible variations of such property: "10px", "0 10px", "0 10px 0 0" etc',
        disable_if: o => {
            if (o.navButtonsPosition === 'hidden') {
                return 0
            }
        }
    },


    connectionLinesWidth: {
        title: 'Connection lines width',
        explanation: ``
    },
    connectionLinesColor: {
        title: 'Regular connection lines color',
        explanation: ``
    },
    highlightedConnectionLinesColor: {
        title: 'Highlighted connection lines color',
        explanation: ``
    },
    getMatchElement: {
        title: 'Match Element getter',
        explanation: `Here you can provide your own match element which will be injected in place of the built-in match markup.

getMatchElement will be called with 3 args:
    1) round index (0-based),
    2) match order (index of a match within a round) (0-based)

If you want to prevent a given match from being rendered, return null from getMatchElement()`,
        more_link: 'inject-markup#getMatchElement'
    },

    getNationalityHTML: {
        title: 'Nationality HTML getter',
        explanation: `A string (hopefully containing HTML code) returned from getNationalityHTML will be injected into the nationality column (second column) of a match.

getNationalityHTML will be called with:
    1) "player" - an object containing data of a Player whose nationality is being rendered
    2) "context" - an object that tells you where (for which player etc) nationality is rendered. Contains these properties:
        - roundIndex
        - matchOrder
        - contestantId
        - playerIndex`,
        more_link: 'inject-markup#getNationalityHTML'

    },

    getEntryStatusHTML: {
        title: 'Entry status HTML getter',
        explanation: `A string (hopefully containing HTML code) returned from getEntryStatusHTML will be injected into the corresponding (leftmost) column of a match.

getEntryStatusHTML will be called with:
        1) "entryStatus" - a string containing an entryStatus of a Contestant which is being rendered
        2) "context" - an object that tells you where (for which player etc) entry status is rendered. Contains these properties:
            - roundIndex
            - matchOrder
            - contestantId`,
        more_link: 'inject-markup#getEntryStatusHTML'

    },

    getPlayerTitleHTML: {
        title: 'Player title HTML getter',
        explanation: `A string (hopefully containing HTML code) returned from getPlayerTitleHTML will be injected into the corresponding column of a match.
        
getPlayerTitleHTML will be called with:
        1) "player" - an object containing data of a Player whose title is being rendered
        2) "context" - an object with properties:
            - roundIndex
            - matchOrder
            - contestantId
            - playerIndex`,
        more_link: 'inject-markup#getPlayerTitleHTML'

    },

    getScoresHTML: {
        title: 'Side scores HTML getter',
        explanation: `A string returned from getScoresHTML will be injected into the "scores" section of match layout.

getScoresHTML is called for each side of a match separately. The output string is used to render scores of a single side, not both sides.

getScoresHTML is called with:
        1) "side" - data of a Side of a match
        2) "match" - data of a Match which contains a Side whose score is being rendered`
    },

    getMatchTopHTML: {
        title: 'Match top HTML getter',
        explanation: `A string returned from getMatchTopHTML will be rendered above a match`,
        more_link: 'inject-markup#getMatchTopHTML'
    },

    getMatchBottomHTML: {
        title: 'Match bottom HTML getter',
        explanation: `A string returned from getMatchBottomHTML will be rendered underneath a match`,
        more_link: 'inject-markup#getMatchBottomHTML'
    },



    matchMaxWidth: {
        title: 'Maximum match width',
        explanation: `Only pixels here.
A reasonable matchMaxWidth may help for example if you use visibleRoundsCount or displayWholeRounds options - in such cases there is a risk of getting overly wide matches on certain screens.`,
        image: true
    },

    matchMinVerticalGap: {
        title: 'Minimal vertical distance between matches',
        explanation: `Minimal distance means a distance between matches of the leftmost visible round when the visible height isn't enough to contain all matches of this round`,
        image: true,
        more_link: 'options#useClassicalLayout-more'
    },

    matchHorMargin: {
        title: `Matches' horizontal margins`,
        explanation: ``,
        image: true
    },

    matchAxisMargin: {
        title: `Vertical distance between match axis and each side of a match`,
        explanation: ``,
        image: true
    },

    oneSidePlayersGap: {
        title: 'Vertical distance between players of one side of a match (e.g. of tennis doubles)',
        explanation: ``,
        image: true
    },

    liveMatchBgColor: {
        title: 'Live match background color',
        explanation: `Better provide a semi-transparent color because it's painted on top of the connection line. Therefore connection line will disappear behind the live background if the latter is opaque.`,
        more_link: 'live-match',
        more_link_text: 'More about live matches'
    },

    distanceBetweenScorePairs: {
        title: 'Distance between scores (e.g. between sets in tennis)',
        explanation: ``,
        image: true
    },

    matchStatusBgColor: {
        title: 'Background color of a match status badge',
        explanation: ``,
        image: true
    },

    rootFontFamily: {
        title: 'Root font-family (applied to blocks with an "inherit" font-family)',
        explanation: ``
    },

    roundTitlesFontFamily: {
        title: 'Round titles font-family',
        explanation: ``
    },

    roundTitlesFontSize: {
        title: 'Round titles font-size',
        explanation: ``
    },



    matchTextColor: {
        title: 'Match text color',
        explanation: ``
    },
    matchFontSize: {
        title: 'Match font-size',
        explanation: ``
    },

    playerTitleFontFamily: {
        title: 'Player title font family',
        explanation: ``
    },


    highlightedPlayerTitleColor: {
        title: 'Highlighted player title color',
        explanation: `This color is applied to a players' titles when
    1) contestant is under cursor
    2) contestant's match history is highlighted`
    },

    scoreFontFamily: {
        title: 'Score font-family',
        explanation: ``
    },

    onMatchClick: {
        title: 'What happens when a user clicks a match',
        explanation: `Here you can provide a function that will be called when user clicks on a match.`,
        more_link: `click-handlers#onMatchClick`
    },

    onMatchSideClick: {
        title: 'What happens when a user clicks a side of a match',
        explanation: `Here you can provide a function that will be called when user clicks on a side of a match.`,
        more_link: `click-handlers#onMatchSideClick`
    }
}
