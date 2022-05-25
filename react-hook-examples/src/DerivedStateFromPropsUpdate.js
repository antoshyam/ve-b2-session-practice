import React,{useState, useEffect} from 'react'

export default function DerivedStateFromPropsUpdate(props){

    const [favColor, setFavColor] = useState("beige")

    useEffect(() => {
        setFavColor(props.color ? props.color : favColor)
    }, [props.color])

    const changeColor = () => {
        console.log("Changin color")
        setFavColor("green")
    }

    return(
        <React.Fragment>
            <h1>Fav Colur is : {favColor}</h1>
            <button onClick={changeColor}>Change Colour</button>
        </React.Fragment>
        
    )
}