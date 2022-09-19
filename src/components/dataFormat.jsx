import React from 'react';
import Journeydata from './dataParkage';
import DataCol from './column';
const Data = () => {
const journeys=Journeydata.map(journey=>{
   return <DataCol key={journey.title} {...journey}/>
})
    return journeys
}

export default Data;