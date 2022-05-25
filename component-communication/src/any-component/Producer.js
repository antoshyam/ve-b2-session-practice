import React, {Component} from 'react'
import { subject } from './service'

export default class Producer extends React.Component{
    sendMsg(){//Not using this
        subject.next("Hello Subscribers..!!")
    }

    render(){
        return(
            <div>
                <h1>I am a Producer, I will notify if you have subscribed.</h1>
                <button onClick={this.sendMsg}>Notify</button>
            </div>
        )
    }
}