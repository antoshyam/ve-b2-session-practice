import React, {useState} from "react";

export const ConstructorDemo = (props) => {

    const [favCol, setFavCol] = useState("beige")//this.state={favCol : 'beige'}
    //setFavCol()//
    return(
        <h1>Color is {favCol}</h1>
    )
}