import React from 'react'

class DerivedStateFromPropsUpdate extends React.Component{
    constructor(props){
        super(props)
        this.state = {favColor: "beige"}        
    }

    static getDerivedStateFromProps(props, state){
        console.log("Deriving state")
        return {favColor: props.color ? props.color : state.favColor}
    }

    changeColor = () => {
        console.log("Changin color")
        this.setState({favColor: "green"})
    }

    render(){
        return(
            <React.Fragment>
                <h1>Fav Colur is : {this.state.favColor}</h1>
                <button onClick={this.changeColor}>Change Colour</button>
            </React.Fragment>
            
        )
    }
}

export default DerivedStateFromPropsUpdate