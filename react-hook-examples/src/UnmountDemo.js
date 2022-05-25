import React, {useEffect, Component } from 'react'

class UnmountDemo extends Component {

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

const Child = () =>{

    function cleanUp(){
        alert("The child is beoing unmounted from clean up.")
    }

    useEffect(() => {
        console.log('Side effect logic')

        return cleanUp
    })

    return (
        <h1>Hello World!!</h1>
    )
}

export default UnmountDemo