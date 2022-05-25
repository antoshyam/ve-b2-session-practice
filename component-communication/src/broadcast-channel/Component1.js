import React from 'react'

export default class Component1 extends React.Component{
    constructor(props){
        super(props)
        this.channel = new BroadcastChannel("any_connect")

        this.channel.onmessage = msg => {
            if(msg.data.to == 'C1'){
                //Do something.
            }
        }

        this.sendMsg = this.sendMsg.bind(this)
    }

    sendMsg(){
        this.channel.postMessage({to: 'C2', text: 'Hi C2! I am C1'})
    }

    render(){
        return(
            <div>
                <h1>I am Component1</h1>
                <button onClick={this.sendMsg}>Create Broadcast</button>
            </div>
        )
    }
}