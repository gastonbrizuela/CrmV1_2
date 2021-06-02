import React from "react";
import './GenericButton.css'
const GenericButton = ({children, onCl,text})=>{
return(<button className='generic-btn' onClick={onCl} value={children}>{children}</button>)
}

export default GenericButton