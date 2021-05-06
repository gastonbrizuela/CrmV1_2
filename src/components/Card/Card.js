import React from 'react';
import './Card.css'
const Card = ({children, header})=>{
    return(
        <div className='card-container'>
            <div className='card-header'>
                <div className='title-card'>
                    {header}
                </div>
            </div>                
            <div className= 'card-content'>
                {children}
            </div>

        </div>
    )
}

export default Card