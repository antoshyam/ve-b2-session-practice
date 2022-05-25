import React, {useContext} from "react";

const MyContext = React.createContext()

export default function WithContext(){
    let someValue = "With Context value from hook"
    return (
        <MyContext.Provider value={someValue}>
            <FirstComponent/>
        </MyContext.Provider>
    )
}


const FirstComponent = (props) => {
    return (
        <div>
            <h3>I am First</h3>
            <SecondComponent/>
        </div>
    )
}

const SecondComponent = (props) => {
    return (
        <div>
            <h3>I am Second</h3>
            <ThirdComponent/>
        </div>
    )
}

const ThirdComponent = (props) => {
    return (
        <div>
            <h3>I am First</h3>
            <ComponentNeedingProps/>
        </div>
    )
}



//Using context consumer
// const ComponentNeedingProps = (props) => {
//     return (
//         //Calls the function within jsx with the context value as a parameter.
//         <MyContext.Consumer>
//             {
//                 (myContextValue) => {
//                     return(
//                         <h3>Here is the value :: {myContextValue}</h3>
//                     )
//                 }
//             }
//         </MyContext.Consumer>
//     )
// }

//Using context hook.
const ComponentNeedingProps = (props) => {
    const myContextValue = useContext(MyContext)
    return (
        <h3>Here is the value :: {myContextValue}</h3>
    )
}



