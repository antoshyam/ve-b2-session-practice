import React from "react";
import { subject } from "./service";

export default class Subscriber extends React.Component {
    constructor(props) {
        super(props)
        this.state = { message: "Waiting for update..." }
    }

    componentDidMount() {
        this.subscription = subject.subscribe(msg => {
            this.setState({ message: "Producer said :" + msg })
        })
    }

    render() {
        return (
            <>
                <h1>I am a subscriber. I can be anywhere on the DOM.</h1>
                <h3>{this.state.message}</h3>
            </>
        )
    }
}