import React, { Component } from 'react';
import { Routes, Route, Link, useParams, useNavigate, Outlet } from 'react-router-dom';

export default function DynamicRouting() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/items" element={<Items/>}>
                    <Route path=":id" element={<ManageItem/>}/>
                </Route>
                {/**Route Ranking == Most specific always wins 
                 * v5 -- all matched were displayed
                */}
                <Route path="/items/add" element={<AddItem/>}/>
            </Routes>

        </div>
    )
}
const ManageItem = () =>{
    const {id} = useParams()
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return(
        <div>
            <h1>Manage Item : {id}</h1>
            <button onClick={goBack}>Go Back</button>
        </div>
    )
}

const Header = () => (
    <header>
        <h1>React routing</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/items">Items</Link>
            </li>
        </ul>
    </header>
)

const Home = () => (
    <div><h1>Home Component</h1></div>
)

const Items = () => {
    let itemArray = [
        {
            id: 1,
            name: "Item1"
        },
        {
            id: 2,
            name: "Item2"
        },
        {
            id: 3,
            name: "Item3"
        },
        {
            id: 4,
            name: "Item4"
        },
        {
            id: 5,
            name: "Item5"
        }
    ]
    return (
    
    <div>
        <h1>Items Component</h1>

        <ul>
            {
                itemArray.map(item => {
                    return (
                        <li>
                            <Link to={`${item.id}`}>{item.name}</Link>
                        </li>
                    )
                })
            }
            <li>
                <Link to="add">Add an Item</Link>
            </li>
        </ul>

        <Outlet/>

    </div>)
}

const AddItem = () => (
    <div><h1>Add Item</h1></div>
)