import React from 'react'
import DerivedStateFromProps from './DerivedStateFromProps'
import DerivedStateFromPropsUpdate from './DerivedStateFromPropsUpdate'
import DidMount from './DidMount'
import SbouldComponentUpdate from './SbouldComponentUpdate'
import SnapshotDemo from './SnapshotDemo'
import UnmountDemo from './UnmountDemo'

class App extends React.Component{
    render(){
        return(
            //<DerivedStateFromProps color="Red"/>
            //<DidMount/>
            //<DerivedStateFromPropsUpdate color="Grey"/>
            //<SbouldComponentUpdate/>
            //<SnapshotDemo/>
            <UnmountDemo/>
        )
    }
}

export default App