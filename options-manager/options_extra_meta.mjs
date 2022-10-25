import { BUTTONS_POSITIONS } from './options_meta.mjs'

export const options_extra_meta = {

    verticalScrollMode: {
        title: `Vertical scroll mode`,
        explanation: `` // TODO
    },

    scrollButtonsPosition: {
        title: `Vertical scroll buttons position`,
        explanation: `Applied when options.verticalScrollMode is "buttons" or "mixed". Or when options.fullscreen is true (because buttons are always there if it's fullscreen).
Possible values:
    - "gutters": above and below the matches, squeezing the matches' container.
    - "overMatches": above and below the matches, not squeezing the matches' container but put on top of it`,
        disable_if: options => options.verticalScrollMode !== 'buttons'
            && options.verticalScrollMode !== 'mixed'
            && fullscreen !== true
    },

    defaultScrollIconSize: {
        title: `Default vertical scroll icon size`
    },

    syntheticScrollAmount: {
        title: `Synthetic scroll amount on button clicks`,
        explanation: `Applied to vertical scroll when it's triggered by buttons (i.e., when options.verticalScrollMode === "buttons")
This amount is a number of pixels covered by this "synthetic scroll" per one button click`
    },

    width: {
        title: `Playoffs' total width`,
        explanation: ``
    },

    height: {
        title: `Playoffs' total height`,
        explanation: `In most cases the default value of "100%" will be the most adequate choice.
Your wrapper in such case should have explicit width and height. This will prevent height from jumping after playoffs' installation`
    },

    fullscreen: {
        title: `Should playoffs be rendered in a fullscreen popup?`,
        explanation: `If you set this option to true, it makes sense to render playoffs to the document.body (second argument of createPlayoffs).

Setting width and height options will also make sense. Otherwise playoffs will take the entire viewport.

Use rootBgColor and fullscreenBgColor to get an opaque background for your fullscreen playoffs.
        
"fullscreen" option is not updatable, i.e. it will be ignored when passed to applyNewOptions.`
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

    roundTitlesBorderBottomColor: {
        title: 'Round titles bottom border-color',
        explanation: `When this options is set to "" (empty string), "rootBorderColor" option will be used instead`
    },

    scrollGutterBorderColor: {
        title: `Scroll gutter border color`,
        explanation: `Applied when options.verticalScrollMode === "buttons" AND options.scrollButtonsPosition === "gutters".
When this options is set to "" (empty string), "rootBorderColor" option will be used instead`,
        disable_if: options => options.verticalScrollMode !== 'buttons'
            || options.scrollButtonsPosition !== 'gutters'
    },

    hoveredMatchBorderColor: {
        title: 'Hovered match border color (applied when options.onMatchClick is provided)',
        explanation: `When this options is set to "" (empty string), "rootBorderColor" option will be used instead`
    },

    navigationGutterBorderColor: {
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
        explanation: `It's a padding before the first match and after the last match of the base round`
    },

    visibleRoundsCount: {
        title: `How many rounds to display`,
        explanation: `Provide 0 for "automatic" width.
Automatic means a natural width of a widest match (if not adjusted by "displayWholeRounds" option).
Fractional is possible.
This options may be useful if you want to make playoffs "responsive", i.e. to respond to changing viewport size. On mobile screen it makes sense to set visibleRoundsCount to 1`,
    },

    displayWholeRounds: {
        title: `Display a whole number of rounds`,
        explanation: `When set to true, rounds are slightly stretched in order to hide the partly visible round on the right.
Not applied if "visibleRoundsCount" option is set to something other than 0`
    },

    useClassicalLayout: {
        title: 'Use classical layout',
        explanation: `When set to true, it instructs playoffs to preserve the original vertical margins between matches when navigating to later rounds.

(By default playoffs tries to be smart and display matches in the most condensed way. For that it reduces the rounds' height by 2 on each next navigation step (i.e. on each click on the right button).

Thus the base round (the leftmost visible one) always attains the smallest possible height.
Margins between matches of a base round are defined by options.matchMinVerticalGap).

useClassicalLayout might be useful if you want to render playoffs with 'auto' (full) height.
In such case you should set NO height on your wrapper element and set { useClassicalLayout: true }.`
    },

    showScrollbar: {
        title: 'Should show scrollbar',
        explanation: ``
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

Whatever you return from this function will be injected in the round titles bar.`
    },

    roundTitlesHeight: {
        title: 'Round titles height',
        explanation: ``
    },

    roundTitleColor: {
        title: 'Round title color',
        explanation: ``
    },

    resetScrollOnNavigation: {
        title: 'Reset vertical scroll on navigation?',
        explanation: ``
    },

    navButtonsPosition: {
        title: 'Navigation (switch rounds) buttons position',
        explanation: Object.entries(BUTTONS_POSITIONS).map(
            ([pos_name, pos_title]) => `<span style="text-decoration: underline;">${pos_name}</span>: ${pos_title}`
        ).join('<br />')
    },

    navButtonsTopDistance: {
        title: `Navigation buttons' distance from top`,
        explanation: `Takes effect only when navButtonsPosition is set to "overMatches".
Can be specified in any CSS units`,
        disable_if: options => options.navButtonsPosition !== 'overMatches'
    },

    defaultNavigationIconSize: {
        title: 'Default navigation arrow size',
        explanation: ``
    },
    navigationSvgColor: {
        title: 'Navigation buttons svg color',
        explanation: ``
    },

    leftNavigationButtonHTML: {
        title: 'Inner HTML of LEFT navigation button',
        explanation: `Can be a normal HTML string (<svg> / <img> / whatever) or just a text`
    },
    rightNavigationButtonHTML: {
        title: 'Inner HTML of RIGHT navigation button (<svg> / <img> / whatever)',
        explanation: `Can be a normal HTML string (<svg> / <img> / whatever) or just a text`
    },
    
    scrollUpButtonHTML: {
        title: 'Inner HTML of UP scroll button (<svg> / <img> / whatever)',
        explanation: `Can be a normal HTML string (<svg> / <img> / whatever) or just a text`
    },
    scrollDownButtonHTML: {
        title: 'Inner HTML of DOWN scroll button (<svg> / <img> / whatever)',
        explanation: `Can be a normal HTML string (<svg> / <img> / whatever) or just a text`
    },
    
    connectionLinesWidth: {
        title: 'Connection lines width',
        explanation: ``
    },
    connectionLinesColor: {
        title: 'Connection lines color',
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
    3) all data with which createPlayoffs() were called`
    },

    getNationalityHTML: {
        title: 'Nationality HTML getter',
        explanation: ``
    },

    getEntryStatusHTML: {
        title: 'Entry status HTML getter',
        explanation: ``
    },

    getPlayerTitleHTML: {
        title: 'Player title HTML getter',
        explanation: ``
    },

    getScoresHTML: {
        title: 'Side scores HTML getter',
        explanation: ``
    },

    matchMaxWidth: {
        title: 'Maximum match width',
        explanation: `Specifying smaller width here will help Playoffs draw a greater number of rounds within a given width`
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

    liveMatchBackgroundColor: {
        title: 'Live match background color',
        explanation: ``
    },

    distanceBetweenScorePairs: {
        title: 'Distance between scores (e.g. between sets in tennis)',
        explanation: ``
    },

    matchStatusBackgroundColor: {
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
        <br /><br />
        Example:
        <div class="code">{
onMatchClick: (match) => {
    location.href = \`/matches/\${match.id}\`
}
}
</div>
<br />
If you provide this function, contestant's match history will not be highlighted when you click a match's side`
    },

    onMatchSideClick: {
        title: 'What happens when a user clicks a side of a match',
        explanation: `Your function will be called with
    1) data of a contestant which was clicked,
    2) this contestant's id,
    3) data of a match within which a side was clicked
        
<div class="code">{
    onMatchSideClick: (contestant, contestantId, match) => {
        location.href = \`/teams/\${contestantId}\`
    }
}
</div>
    
If you provide this function, it will discard the default behaviour: contestant's match history will not be highlighted when you click a match's side`
    }
}
