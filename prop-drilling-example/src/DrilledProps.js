import React from "react";

export default function DrilledProps(){
    let someValue = "Some Value"
    return <FirstComponent content={someValue}/>
}


const FirstComponent = (props) => {

    let {content} = {...props}
    return (
        <div>
            <h3>I am First</h3>
            <SecondComponent content={content}/>
        </div>
    )
}

const SecondComponent = (props) => {

    let {content} = {...props}
    return (
        <div>
            <h3>I am Second</h3>
            <ThirdComponent content={content}/>
        </div>
    )
}

const ThirdComponent = (props) => {

    let {content} = {...props}
    return (
        <div>
            <h3>I am First</h3>
            <ComponentNeedingProps content={content}/>
        </div>
    )
}




const ComponentNeedingProps = (props) => {
    let {content} = {...props}
    return (
            <h3>Here is the value :: {content}</h3>
    )
}



