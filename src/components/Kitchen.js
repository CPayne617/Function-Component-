import React from 'react'
import Oven from './Oven'
import Sink from './Sink'

export default function Kitchen() {
    
    return (
        <div>
            <span className = 'oven'><Oven /></span>
            <span className = 'sink'><Sink /></span>
            kitchen
            
            
        </div>
    )
}
