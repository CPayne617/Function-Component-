import React from 'react'
import Bedroom from './Bedroom'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bath from './Bath'

const FloorPlan = () => {
const Bedrooms = {bedNum1: 'bedroom1', bedNum2: 'bedroom2', bedNum3: 'bedNum3'}
const Baths = {bathNum1: 'FullBath', bathNum2: 'HalfBath'}
    // const bedroom = props.plans.bedroom
    return (
        <div className = 'floorPlan'>

            <span className = 'Bedroom1'><Bedroom Bedrooms = {Bedrooms.bedNum1} /></span>
            <Kitchen />
            <LivingRoom />
            <span className = 'Bedroom2'><Bedroom Bedrooms = {Bedrooms.bedNum2} /></span>
            <span className = 'Bedroom3'><Bedroom Bedrooms = {Bedrooms.bedNum3} /></span>
            <Bath Baths = {Baths.bathNum1} />
            <Bath Baths = {Baths.bathNum2} />

            
           
        </div>
    )
}
export default FloorPlan