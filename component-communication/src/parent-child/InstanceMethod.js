import React, {Component} from 'react'

export default class Parent extends Component{

    componentDidMount(){
        this.child.updateName("Anto Shyam Antony")
    }

    render(){
        return (
            <div>
                <Child ref={ref => this.child = ref}/>
            </div>
        )        
    }
}

class Child extends Component{
    constructor(props){
        super(props)
        this.state = {name: 'Anto'}
    }

    updateName(name) {
        this.setState({name})//{"name" : name}
    }

    render(){
        return(
            <h1>Hello ! {this.state.name}</h1>
        )
    }

}