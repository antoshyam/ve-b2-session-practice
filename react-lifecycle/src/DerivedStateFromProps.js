import React from 'react'

class DerivedStateFromProps extends React.Component{
    constructor(props){
        super(props)
        this.state = {favColor: "beige"}        
    }

    static getDerivedStateFromProps(props, state){
        return {favColor: props.color ? props.color : state.favColor}
    }

    render(){
        return(
            <h1>Fav Colur is : {this.state.favColor}</h1>
        )
    }
}

export default DerivedStateFromProps