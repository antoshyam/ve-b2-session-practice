import React from 'react'
import Enhancer from './Enhancer'
import SimpleForm from './SimpleForm'

class App extends React.Component{
    render(){
        let EnhancedForm = Enhancer(SimpleForm)
        return (
            <EnhancedForm/>
        )

    }
}

export default App