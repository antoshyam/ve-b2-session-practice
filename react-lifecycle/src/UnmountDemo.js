import React, { Component } from 'react'

class Container extends Component {

    constructor(props) {
        super(props)
        this.state = { show: true }
        this.hideChildBounded = this.hideChild.bind(this)
    }

    hideChild() {
        this.setState({ show: false })
    }

    render() {
        let myChild;

        if (this.state.show) {
            myChild = <Child />
        }
        return (
            <div>
                <span>This is from Parent</span>
                {myChild}
                <button onClick={this.hideChildBounded}>Hide Child</button>
            </div>

        )
    }

}

class Child extends Component {

    componentWillUnmount(){
        alert("The child is beoing unmounted.")
    }

    render() {
        return (
            <h1>Hello World!!</h1>
        )
    }
}

export default Container