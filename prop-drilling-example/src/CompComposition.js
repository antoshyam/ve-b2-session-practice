import React from "react";

export default function CompComposition() {
    let someValue = "Some Value with Cmposition"
    return <FirstComponent>
        <SecondComponent>
            <ThirdComponent>
                <ComponentNeedingProps content={someValue} />
            </ThirdComponent>
        </SecondComponent>
    </FirstComponent>
}


const FirstComponent = (props) => {
    let { children } = { ...props }
    return (
        <div>
            <h3>I am First</h3>
            {children}
        </div>
    )
}

const SecondComponent = (props) => {

    let { children } = { ...props }
    return (
        <div>
            <h3>I am Second</h3>
            {children}
        </div>
    )
}

const ThirdComponent = (props) => {

    let { children } = { ...props }
    return (
        <div>
            <h3>I am First</h3>
            {children}
        </div>
    )
}




const ComponentNeedingProps = (props) => {
    let { content } = { ...props }
    return (
        <h3>Here is the value :: {content}</h3>
    )
}



