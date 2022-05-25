import React from 'react'
import DynamicRouting from './DynamicRouting'
import SecureRouting from './SecureRouting'
import SimpleRouting from './SimpleRouting'

class App extends React.Component{
    render(){
        return(
            //<SimpleRouting/>
            //<DynamicRouting/>
            <SecureRouting/>
        )
    }
}

export default App