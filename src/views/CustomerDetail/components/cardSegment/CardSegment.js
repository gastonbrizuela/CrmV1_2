import React, { Fragment } from 'react'
import './CardSegment.css'

const CardSegment = ({dic})=>{
    const keys = Object.keys(dic)
    const renderInfo = (key)=>{
        return(<Fragment>
        < div className='card-segment-title'>
            {dic[key][1]}
        </div>
        <div className='card-segment-description'>
        {dic[key][0]}
        </div>
        </Fragment>)
    }
    return (<div className='content-card-segment'>
                {keys.map(key=>renderInfo(key))}
            </div>)
}

export default CardSegment