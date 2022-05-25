import React from 'react'

class SbouldComponentUpdate extends React.Component{
    constructor(props){
        super(props)
        this.state = {favColor: "beige"}        
    }

    shouldComponentUpdate(props, state){
        //Some business logic
        return true
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

export default SbouldComponentUpdate