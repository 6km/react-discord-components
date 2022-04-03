import React from 'react'

import { ServersList } from 'react-discord-components'
import 'react-discord-components/dist/index.css'

const App = () => {
    return <ServersList servers={[
        {
            name: "test"
        }
    ]} />
}

export default App
