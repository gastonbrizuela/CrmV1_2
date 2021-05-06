import React from 'react'
import { Fragment } from 'react'
import './PrincipalTitle.css'

const PrincipalTitle = ({title})=>{
    return (<Fragment>
            <div className='princ-title'>{title}</div>
            <hr></hr>
            </Fragment>)
}

export default PrincipalTitle 