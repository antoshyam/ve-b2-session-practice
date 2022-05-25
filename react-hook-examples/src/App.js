import React from 'react'
import { ConstructorDemo } from './ConstructorDemo'
import DerivedStateFromProps from './DerivedStateFromProps'
import DerivedStateFromPropsUpdate from './DerivedStateFromPropsUpdate'
import { DidMount } from './DidMount'
import UnmountDemo from './UnmountDemo'

class App extends React.Component{
    render(){
        return(
            //<ConstructorDemo/>
            //<DidMount/>
            //<DerivedStateFromProps color="Black"/>
            //<DerivedStateFromPropsUpdate color="Black"/>
            <UnmountDemo/>
        )
    }
}

export default App