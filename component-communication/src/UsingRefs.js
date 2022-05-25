import React from 'react'

export default class UsingRefs extends React.Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()

        this.myDiv = null
        
        this.setMyDivRef = element => {
            this.myDiv = element
        }

        this.readInput = this.readInput.bind(this)
    }

    readInput(){
        this.myDiv.innerHTML = this.inputRef.current.value
    }

    render(){
        return (
            <>
                <input ref={this.inputRef} type={"text"}/>
                <button onClick={this.readInput}>Read Input</button>
                <div ref={this.setMyDivRef}></div>
            </>
        )
    }
}