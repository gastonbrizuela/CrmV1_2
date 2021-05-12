import React from "react";
import './GenericButton.css'
const GenericButton = ({children, onCl})=>{
return(<button className='generic-btn' onClick={onCl}>{children}</button>)
}

export default GenericButton