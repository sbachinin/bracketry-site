import { createPlayoffs } from 'easy-playoffs'

import { insert_styles } from './pages/utils.mjs'
import { get_some_data } from './test_data/get_some_data.mjs'
import { create_data_picker } from './test_data/create_data_picker.mjs'
import { examples_common_styles } from './pages/examples_common_styles.mjs'
import { footer } from './pages/html_partials.mjs'

insert_styles('', 'common-styles', examples_common_styles)

document.body.innerHTML += footer

const default_playoffs_wrapper = document.querySelector('.default-playoffs')

get_some_data().then(data => {
    let playoffs = createPlayoffs(data, default_playoffs_wrapper, {})

    create_data_picker(
        document.querySelector('.default-playoffs-data-picker'),
        (new_data) => {
            playoffs = createPlayoffs(new_data, default_playoffs_wrapper, playoffs.getUserOptions())
        }
    )
})