import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


ReactDOM.render(
    <BrowserRouter>{/**Provides Routing context for entire application. */}
        <App/>
    </BrowserRouter>
    ,//React.createElement(App,{props}, {children})
    document.getElementById("root")
)