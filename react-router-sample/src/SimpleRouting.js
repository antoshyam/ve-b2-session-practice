import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'


export default function SimpleRouting(){

    return(
        <div>
            <h1>Simple Routing</h1>


            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='dashboard'element={<Dashboard/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>
            </Routes>


        </div>
    )
}

function Layout(){
    return(
        <div>

            <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/123">Dashboard</Link>
                        </li>
                    </ul>

            </nav>

            <hr/>

            <Outlet/>

        </div>
    )
}

function Home(){
    return(
        <div>
            <h2>Home</h2>
        </div>
    )
}

function About(){
    return(
        <div>
            <h2>About</h2>
        </div>
    )
}

function Dashboard(){
    return(
        <div>
            <h2>Dashboard</h2>
        </div>
    )
}

function NoMatch(){
    return(
        <div>
            <h2>Not match found!</h2>
            <p>
                <Link to="/">Go To Home</Link>
            </p>
        </div>
    )
}