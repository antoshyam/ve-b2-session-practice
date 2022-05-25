import React from 'react'
import UsingObservables from './any-component/UsingObservable'
import UsingBroadcastChannel from './broadcast-channel/UsingBroadcastChannel'
import InstanceMethod from "./parent-child/InstanceMethod"

class App extends React.Component{
    render(){
        return (
            //<InstanceMethod/>
            //<UsingObservables/>
            <UsingBroadcastChannel/>
        )

    }
}

export default App