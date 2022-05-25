import React, {useState, useEffect, useLayoutEffect} from "react";

export const DidMount = (props) => {

    const [favCol, setFavCol] = useState("beige")//returns [varName, () => {}]

    useEffect(() => {
        let i = 0
        while( i < 1000000000){
            i++
        }
        setFavCol("black")
    }
        ,[])

    return(
        <h1>Color is {favCol}</h1>
    )
}