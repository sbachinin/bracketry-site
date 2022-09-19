import { iso3_to_iso2 } from './country_codes_iso3_to_iso2.mjs'

const prepare_single_player = (all_data, player_id) => {
    const player_meta = all_data.players.find(player => player.uuid === player_id)
    const code = iso3_to_iso2[player_meta.nationality.code] || player_meta.nationality.code
    return {
        title: player_meta.short_name,
        nationality: code,
        flag_url: `https://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`,
    }
}

const get_contestants = all_data => {
    const contestants = {}

    all_data.matches.forEach(match => {
        match.teams.forEach(side => {
            if (side === null) return

            if (!contestants[side.team_id]) {
                const contestant_orig_meta = all_data.teams
                    .find(team_meta => team_meta.uuid === side.team_id)

                contestants[side.team_id] = {
                    entryStatus: contestant_orig_meta.seed ? String(contestant_orig_meta.seed) : contestant_orig_meta.entryStatus?.abbr,
                    players: contestant_orig_meta.players
                        .map(player_id => prepare_single_player(all_data, player_id))
                }
            }
        })
    })

    return contestants
}

const get_sides_data = (match_teams) => {
    return match_teams.filter(Boolean).map(team => {
        return {
            contestantId: team.team_id,
            scores: team.score === undefined ? [] : team.score
                .filter(score => score.game !== '')
                .map(score => ({
                    mainScore: score.game,
                    subscore: score.subscore && Number(score.subscore),
                    isWinner: score.winner
                })),
            current_score: team.point,
            isServing: team.isServing,
            isWinner: team.status === 'Winner'
        }
    })
}


export const prepareMockData = orig_data => {
    const contestants = get_contestants(orig_data)
    return Promise.resolve({
        rounds: orig_data.rounds.map(
            round => ({ name: round.name })
        ),

        matches: orig_data.matches.map((match) => ({
            id: match.match_id,
            sides: get_sides_data(match.teams),
            order: match.order - 1,
            isLive: match.matchStatus !== null && match.matchStatus.name === 'Live',
            matchStatus: match.matchStatus?.name || '05.04.2020'
        })).filter(m => m.sides.find(Boolean)),

        contestants
    })
}