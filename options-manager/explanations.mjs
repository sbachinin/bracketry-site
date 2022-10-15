import { BUTTONS_POSITIONS } from './options_meta.mjs'

export const explanations = {
    mainBorderColor: `Border around entire playoffs. (Basically it's the same as setting border on your wrapper element)`,

    mainVerticalPadding: `It's a padding before the first match and after the last match of the base round`,

    visibleRoundsCount: `Provide 0 for "automatic" width.
Automatic means a natural width of a widest match (if not adjusted by "displayWholeRounds" option).
Fractional is possible.
This options may be useful if you want to make playoffs "responsive", i.e. to respond to changing viewport size. On mobile screen it makes sense to set visibleRoundsCount to 1`,

    displayWholeRounds: `When set to true, rounds are slightly stretched in order to hide the partly visible round on the right.
Not applied if "visibleRoundsCount" option is set to something other than 0`,

    useClassicalLayout: `When set to true, it instructs playoffs to preserve the original vertical margins between matches when navigating to later rounds.

(By default playoffs tries to be smart and display matches in the most condensed way. For that it reduces the rounds' height by 2 on each next navigation step (i.e. on each click on the right button).

Thus the base round (the leftmost visible one) always attains the smallest possible height.
Margins between matches of a base round are defined by options.matchMinVerticalGap).

useClassicalLayout might be useful if you want to render playoffs with 'auto' (full) height.
In such case you should set NO height on your wrapper element and set { useClassicalLayout: true }.
`,

    disableHighlight: `Might be useful if you have different plans for clicks.
For instance, if you want to make team titles behave like links`,

    getRoundTitleElement: `Here you can provide your own round title element.
getRoundTitleElement will be called with:
1) data of a round which is being rendered,
2) index of a round which is being rendered (0-based).

Whatever you return from this function will be injected in the round titles bar.
`,
    navButtonsPosition: Object.entries(BUTTONS_POSITIONS).map(
        ([pos_name, pos_title]) => `<span style="text-decoration: underline;">${pos_name}</span>: ${pos_title}`
    ).join('<br />'),

    navigationButtonsTopDistance: `Takes effect only when navButtonsPosition is set to 'overMatches'`,

    navigationGutterBorderColor: `Applied only when navButtonsPosition is 'gutters' or 'overTitles' or 'beforeTitles'`,

    leftNavigationButtonBackground: `Aapplied if navButtonsPosition is 'gutters' or 'overMatches'`,

    rightNavigationButtonBackground: `Applied if navButtonsPosition is 'gutters' or 'overMatches'`,

    getMatchElement: `Here you can provide your own match element which will be injected in place of the built-in match markup.
getMatchElement will be called with 3 args:
    1) round index (0-based),
    2) match order (index of a match within a round) (0-based)
    3) all data with which createPlayoffs() were called
`,

    matchMaxWidth: `Specifying smaller width here will help Playoffs draw a greater number of rounds within a given width`,

    matchMinVerticalGap: `Minimal distance means a distance between matches of the leftmost visible round when the visible height isn't enough to contain all matches of this round`,

    matchHorMargin: `Note that in "mobile" (1-round) layout this option will take no effect. Instead a margin of 1.5% will be used`,

    highlightedPlayerTitleColor: `This color is applied to a players' titles when
    1) contestant is under cursor
    2) contestant's match history is highlighted`,

    onMatchClick: `
            Your function will be called with a data of a match that was clicked.
            <br /><br />
            Example:
            <div class="code">{
    onMatchClick: (match) => {
        location.href = \`/matches/\${match.id}\`
    }
}
</div>
<br />
If you provide this function, contestant's match history will not be highlighted when you click a match's side`,

    onMatchSideClick: `
            Your function will be called with
            <br />
            1) data of a contestant which was clicked,
            <br />
            2) this contestant's id,
            <br />
            3) data of a match within which a side was clicked
            <br />
            <br />
            Example:
            <div class="code">{
    onMatchSideClick: (contestant, contestantId, match) => {
        location.href = \`/teams/\${contestantId}\`
    }
}
</div>
            <br />
            <br />
            If you provide this function, it will discard the default behaviour: contestant's match history will not be highlighted when you click a match's side`,

}