import data from './test_data/finished-singles-2021.js'

export const start_mock_full_data_updates = (applyFullDataUpdate) => {
    if (true) return
    let counter = 0

    setInterval(() => {
        counter += 1
        Promise.resolve(data).then(data => {
            data.matches = data.matches.map(m => {
                return {
                    ...m,
                    sides: m.sides.map(s => {
                        return {
                            ...s,
                            score: s.score.map(ss => {
                                return { ...ss, main_score: (parseInt(ss.main_score) || 0) + counter + '' }
                            })
                        }
                    })
                }
            })
            applyFullDataUpdate(data)
        })
    }, 3000)
}
