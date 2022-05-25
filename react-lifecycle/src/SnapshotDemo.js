import React from 'react'

class SnapshotDemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {favColor: "beige"}        
    }


    getSnapshotBeforeUpdate = (prevProps, prevState)=> {
        
        document.getElementById("div1").innerHTML = 
            "Before Update fav was :: " + prevState.favColor

        return "my snapshot"
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        document.getElementById("div2").innerHTML = 
            "After Update fav is " + this.state.favColor + " sanpshot value was :: " + snapshot
    }

    

    render(){
        return(
            <React.Fragment>
                <h1>Fav Colur is : {this.state.favColor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </React.Fragment>
        )
    }
}

export default SnapshotDemo