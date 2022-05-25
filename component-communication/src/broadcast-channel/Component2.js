import React from 'react'

export default class Component2 extends React.Component{
    constructor(props){
        super(props)
        this.channel = new BroadcastChannel("any_connect")
        this.state = {message: "Waiting for message..."}

        this.channel.onmessage = msg => {
            if(msg.data.to == 'C2'){
                this.setState({message: msg.data.text})
            }
        }

        this.sendMsg = this.sendMsg.bind(this)
    }

    sendMsg(){
        this.channel.postMessage({to: 'C1', text: 'Hi C1! I am C2'})
    }

    render(){
        return(
            <div>
                <h1>I am Component2</h1>
                <h3>Component1 says : {this.state.message}</h3>
                <button onClick={this.sendMsg}>Create Broadcast</button>
            </div>
        )
    }
}