import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'


export default function UsingBroadcastChannel(){
    return (
        <div>
            <Component1/>
            <div style={{height:100 + 'px'}}>some content</div>
            <Component2/>
        </div>
    )
}