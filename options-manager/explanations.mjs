import { BUTTONS_POSITIONS } from '../node_modules/easy-playoffs/lib/constants.mjs'

export const explanations = {
    getRoundTitleElement: `Here you can provide your own round title element.
getRoundTitleElement will be called with 1 argument which is a round index (0-based).
Whatever you return from this function will be injected in the round titles bar.
`,
    navButtonsPosition: Object.entries(BUTTONS_POSITIONS).map(
        ([pos_name, pos_title]) => `<span style="text-decoration: underline;">${pos_name}</span>: ${pos_title}`
    ).join('<br />'),

    navigationButtonsTopDistance: `navigationButtonsTopDistance option takes effect only when navButtonsPosition is set to 'overMatches'`,

    navigationGutterBorderColor: `navigationGutterBorderColor options is applied only when navButtonsPosition is 'gutters' or 'overTitles' or 'beforeTitles'`,

    leftNavigationButtonBackground: `leftNavigationButtonBackground options is applied if navButtonsPosition is 'gutters' or 'overMatches'`,

    rightNavigationButtonBackground: `rightNavigationButtonBackground options is applied if navButtonsPosition is 'gutters' or 'overMatches'`,

    getMatchElement: `Here you can provide your own match element which will be injected in place of the built-in match markup.
getMatchElement will be called with 3 args:
    1) round index (0-based),
    2) match order (index of a match within a round) (0-based)
    3) all data with which createPlayoffs() were called
`,

    matchMaxWidth: `Specifying smaller width here will help easy-playoffs draw a greater number of rounds within a given width`,

    matchMinVerticalGap: `Minimal distance means a distance between matches of the leftmost visible round when the visible height isn't enough to contain all matches of this round`,

    matchHorMargin: `Note that in "mobile" (1-round) layout this option will take no effect. Instead a margin of 1.5% will be used`,

    highlightedPlayerTitleColor: `This color is applied to a players' titles when
    <br />
    1) contestant is under cursor
    <br />
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

    useClassicalLayout: `
        ...from readme
    `
}