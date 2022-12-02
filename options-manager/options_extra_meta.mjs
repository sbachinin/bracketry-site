export const options_extra_meta = {

    verticalScrollMode: {
        title: `Vertical scroll mode`,
        explanation: `Possible values:
    
    - "native": matches are scrolled in a "native browser way" which can be mousewheel / keys / touchmove or whatever;
    
    - "buttons": two buttons appear before and after the matches.
        Clicking these buttons will scroll the content by a number of pixels defined by options.syntheticScrollAmount.
        Buttons will be positioned according to options.scrollButtonsPosition.
    
    - "mixed": buttons AND mousewheel. BUT NOT other native ways of scrolling like keyboard keys or touchmove. Thus in "mixed" scroll mode on MOBILE devices you get ONLY one way of scrolling the matches (clicking the buttons).

With options.fullscreen set to true verticalScrollMode will always be "mixed".

This option cannot be updated, i.e. it will be ignored when passed to applyNewOptions method.`,

        disable_if: options => options.fullscreen === true,
        more_link: '../scroll-modes'
    },

    scrollButtonsPosition: {
        title: `Vertical scroll buttons position`,
        explanation: `Applied only when options.verticalScrollMode is "buttons" or "mixed". Or when options.fullscreen is true (because buttons are always there if it's fullscreen).
Possible values:
    - "gutters": above and below the matches, squeezing the matches' container.
    - "overMatches": above and below the matches, not squeezing the matches' container but put on top of it`,
        disable_if: options => options.verticalScrollMode !== 'buttons'
            && options.verticalScrollMode !== 'mixed'
            && options.fullscreen !== true,
        more_link: '../adjust-scroll-buttons#position'
    },

    scrollButtonArrowSize: {
        title: `Size of a default scroll arrow`
    },

    syntheticScrollAmount: {
        title: `Synthetic scroll amount on button clicks`,
        explanation: `Applied to vertical scroll when it's triggered by buttons (i.e. when options.verticalScrollMode === "buttons")
This amount is a number of pixels covered by this "synthetic scroll" per one button click`
    },

    width: {
        title: `Playoffs' total width`,
        explanation: ``
    },

    height: {
        title: `Playoffs' total height`,
        explanation: `This option may help when you want to display fullscreen playoffs (options.fullscreen === true). In such case it's a good idea to set width and height options to something like "90%". It will ensure nice paddings at the edges of viewport.

In most other cases a default value of "100%" will be the most adequate choice. But make sure to set explicit width and height on your wrapper element in which you install playoffs. This will prevent height from jumping after playoffs' installation.`,
        more_link: '../create-playoffs#problem-of-height'
    },

    fullscreen: {
        title: `Should playoffs be rendered in a fullscreen popup?`,
        explanation: `If you set this option to true, it makes sense to render playoffs to the document.body (second argument of createPlayoffs).

Setting width and height options will also make sense. Otherwise playoffs may take the entire viewport without nice paddings around.

Use rootBgColor and fullscreenBgColor to get an opaque background for your fullscreen playoffs.
        
"fullscreen" option is not updatable, i.e. it will be ignored when passed to applyNewOptions.`,
        more_link: '../fullscreen'
    },

    fullscreenBgColor: {
        title: `Fullscreen background color`,
        explanation: `This color will be applied in fullscreen mode, i.e. when "fullscreen" option is set to true.
"rootBgColor" will be painted on top of it.
So fullscreenBgColor will be either:
    a) painted across the entire viewport IF "rootBgColor" is "transparent" OR
    b) painted only on the edges of the viewport IF "rootBgColor" is opaque`
    },

    rootBorderColor: {
        title: 'Root border color',
        explanation: `Border color to be inherited by all border-related options with an "" (empty string) value`
    },

    wrapperBorderColor: {
        title: `Border around the main playoffs wrapper`,
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
        disable_if: options => options.verticalScrollMode === 'native' || options.scrollButtonsPosition !== 'gutters'
    },

    hoveredMatchBorderColor: {
        title: 'Hovered match border color (applied when options.onMatchClick is provided)',
        explanation: `When this options is set to "" (empty string), "rootBorderColor" option will be used instead`
    },

    navGutterBorderColor: {
        title: 'Navigation gutter border color',
        explanation: `Applied only when navButtonsPosition is "gutters" or "overTitles" or "beforeTitles".
When this options is set to "" (empty string), "rootBorderColor" option will be used instead`,
        disable_if: options => options.navButtonsPosition !== 'gutters'
            && options.navButtonsPosition !== 'overTitles'
            && options.navButtonsPosition !== 'beforeTitles'
    },

    rootBgColor: {
        title: 'Root background color',
    },

    mainVerticalPadding: {
        title: `Main vertical padding`,
        explanation: `It's a padding before the first match and after the last match of the base round`,
        more_link: '../fonts-colors-sizes#sizes'
    },

    visibleRoundsCount: {
        title: `How many rounds to display`,
        explanation: `Provide 0 for "automatic" width.
Automatic means a natural width of a widest match (if not adjusted by "displayWholeRounds" option).
Fractional is possible.
This options may be useful if you want to make playoffs "responsive", i.e. to respond to changing viewport size. On mobile screen it makes sense to set visibleRoundsCount to 1`,
        more_link: `../rounds-count`
    },

    displayWholeRounds: {
        title: `Display a whole number of rounds`,
        explanation: `When set to true, rounds are slightly stretched in order to hide the partly visible round on the right.
Mind that in some cases rounds (and matches too) can become TOO wide. To prevent this use matchMaxWidth option.

displayWholeRounds is not applied if "visibleRoundsCount" option is set to something other than 0.`,
        more_link: `../rounds-count`
    },

    useClassicalLayout: {
        title: 'Use classical layout',
        explanation: `When set to true, it instructs playoffs to preserve the original vertical margins between matches when navigating to later rounds.

(By default playoffs tries to be smart and display matches in the most condensed way. For that it reduces the rounds' height by 2 on each next navigation step (i.e. on each click on the right button).

Thus the base round (the leftmost visible one) always attains the smallest possible height.
Margins between matches of a base round are defined by options.matchMinVerticalGap).

useClassicalLayout might be useful if you want to render playoffs with 'auto' (full) height.
In such case you should set NO height on your wrapper element and { useClassicalLayout: true }.`
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
For instance, if you want to make team titles behave like links`
    },

    getRoundTitleElement: {
        title: 'Round title Element getter',
        explanation: `Here you can provide your own round title element.
getRoundTitleElement will be called with:
    1) data of a round which is being rendered,
    2) index of a round which is being rendered (0-based).

Whatever you return from this function will be injected in the round titles bar.`,
        more_link: '../inject-markup#getRoundTitleElement'
    },

    roundTitlesVerticalPadding: {
        title: `Round titles' vertical padding`,
        explanation: ``
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
        more_link: '../adjust-nav-buttons#position'
    },

    navButtonsTopDistance: {
        title: `Navigation buttons' distance from top`,
        explanation: `Takes effect only when navButtonsPosition is set to "overMatches".
Can be specified in any CSS units`,
        disable_if: options => options.navButtonsPosition !== 'overMatches'
    },

    navButtonArrowSize: {
        title: 'Size of the default navigation arrow',
        explanation: ``
    },
    navButtonSvgColor: {
        title: 'Color of the default navigation arrow',
        explanation: ``
    },

    scrollButtonSvgColor: {
        title: 'Color of the default scroll arrow',
        explanation: ``
    },

    leftNavButtonHTML: {
        title: 'Inner HTML of LEFT navigation button',
        explanation: `This HTML string must be wrapped in a tag (<svg> / <img> / <div> / any).`,
        more_link: '../adjust-nav-buttons#icons'
    },
    rightNavButtonHTML: {
        title: 'Inner HTML of RIGHT navigation button (<svg> / <img> / whatever)',
        explanation: `This HTML string must be wrapped in a tag (<svg> / <img> / <div> / any).`,
        more_link: '../adjust-nav-buttons#icons'
    },

    scrollUpButtonHTML: {
        title: 'Inner HTML of UP scroll button (<svg> / <img> / whatever)',
        explanation: `This HTML string must be wrapped in a tag (<svg> / <img> / <div> / any).`,
        more_link: '../adjust-scroll-buttons#icons'
    },
    scrollDownButtonHTML: {
        title: 'Inner HTML of DOWN scroll button (<svg> / <img> / whatever)',
        explanation: `This HTML string must be wrapped in a tag (<svg> / <img> / <div> / any).`,
        more_link: '../adjust-scroll-buttons#icons'
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
        more_link: '../inject-markup#getMatchElement'
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
        more_link: '../inject-markup#getNationalityHTML'

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
        more_link: '../inject-markup#getEntryStatusHTML'

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
        more_link: '../inject-markup#getPlayerTitleHTML'

    },

    getScoresHTML: {
        title: 'Side scores HTML getter',
        explanation: `A string returned from getScoresHTML will be injected into the "scores" section of match layout.

getScoresHTML is called for each side of a match separately. The output string is used to render scores of a single side, not both sides.

getScoresHTML is called with:
        1) "side" - data of a Side of a match
        2) "match" - data of a Match which contains a Side whose score is being rendered`
    },

    matchMaxWidth: {
        title: 'Maximum match width',
        explanation: `Only pixels here.
Providing smaller width here will help Playoffs draw a greater number of rounds within a given width`
    },

    scrollButtonPadding: {
        title: 'Padding around the default scroll arrow',
        explanation: 'This value will be assigned as "padding" CSS propery so it accepts all possible variations of such property: "10px", "0 10px", "0 10px 0 0" etc'
    },

    navButtonPadding: {
        title: 'Padding around the default navigation arrow',
        explanation: 'This value will be assigned as "padding" CSS propery so it accepts all possible variations of such property: "10px", "0 10px", "0 10px 0 0" etc'
    },

    matchMinVerticalGap: {
        title: 'Minimal vertical distance between matches',
        explanation: `Minimal distance means a distance between matches of the leftmost visible round when the visible height isn't enough to contain all matches of this round`
    },

    matchHorMargin: {
        title: `Matches' horizontal margins`,
        explanation: `Note that in "mobile" (1-round) layout this option will take no effect. Instead a margin of 1.5% will be used`
    },

    matchAxisMargin: {
        title: `Vertical distance between match axis and each side of a match`,
        explanation: ``
    },

    oneSidePlayersGap: {
        title: 'Vertical distance between players of one side of a match (e.g. of tennis doubles)',
        explanation: ``
    },

    liveMatchBgColor: {
        title: 'Live match background color',
        explanation: `Better provide a semi-transparent color because it's painted on top of the connection line. Therefore connection line will disappear behind the live background if the latter is opaque.`
    },

    distanceBetweenScorePairs: {
        title: 'Distance between scores (e.g. between sets in tennis)',
        explanation: ``
    },

    matchStatusBgColor: {
        title: 'Background color of a match status badge',
        explanation: ``
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
        explanation: `Provide "inherit" to use rootFontFamily option`
    },

    onMatchClick: {
        title: 'What happens when a user clicks a match',
        explanation: `Your function will be called with a data of a match that was clicked.
Example:
    {
        onMatchClick: (match) => {
            location.href = \`/matches/\${match.id}\`
        }
    }
If you provide this function, contestant's match history will not be highlighted when you click a match's side`
    },

    onMatchSideClick: {
        title: 'What happens when a user clicks a side of a match',
        explanation: `Your function will be called with
    1) data of a match within which a side was clicked
    2) data of a contestant which was clicked,
    3) this contestant's id,
Example:
{
    onMatchSideClick: (
        match,
        contestant,
        contestantId
    ) => {
        location.href = \`/teams/\${contestantId}\`
    }
}
If you provide this function, it will discard the default behaviour: contestant's match history will not be highlighted when you click a side of a match`
    }
}
