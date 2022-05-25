import React from 'react'
import Producer from './Producer'
import Subscriber from './Subscriber'

export default function UsingObservables(){
    return (
        <div>
            <Subscriber/>
            <div style={{height:100 + 'px'}}>some content</div>
            <Producer/>
        </div>
    )
}