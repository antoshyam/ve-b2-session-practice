import React,{useState, useEffect} from 'react'

export function DerivedStateFromProps(props){

    const [favColor, setFavColor] = useState("beige")

    useEffect(() => {
        setFavColor(props.color ? props.color : favColor)
    }, [props.color])

    return(
        <h1>Fav Colur is : {favColor}</h1>
    )
}

export default DerivedStateFromProps