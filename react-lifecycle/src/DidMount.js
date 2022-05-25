import React from 'react'

class DidMount extends React.Component{
    constructor(props){
        super(props)
        this.state = {favColor: "beige"}        
    }

    componentDidMount(){
        //let result = await fetch("https://google.com/stockprice/vividedge")
        setTimeout(() => {
            this.setState({favColor: "yellow"})
        }, 2000)
    }

    render(){
        return(
            <h1>Fav Colur is : {this.state.favColor}</h1>
        )
    }
}

export default DidMount