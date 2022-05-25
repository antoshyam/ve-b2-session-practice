import React from 'react'

export default class ForwardingRefs extends React.Component{
    constructor(props){
        super(props)
        this.countRef = React.createRef()// Ref Object -- 
    }

    render(){
        return(
            <>
                <Counter ref={this.countRef}/>
            
                <button onClick={() => {
                    let countElement = this.countRef.current// HTML Paragraph element
                    if(isNaN(countElement.innerHTML)){
                        countElement.innerHTML = 1
                    }else{
                        countElement.innerHTML = new Number(countElement.innerHTML) + 1
                    }
                }}>Count by Ref</button>
            </>
        )
    }
}

const Counter = React.forwardRef(
    (props, ref) => {
        class Counter extends React.Component {
            render() {
                return (
                    <div>
                        Count: <p ref={ref}></p>
                    </div>
                )
            }
        }

        return <Counter/>
    }
)