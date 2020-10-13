import React from "react";
import './GenericButton.css'
const GenericButton = ({text, onCl})=>{
return(<button className='generic-btn' onClick={onCl} value={text} >{text}</button>)
}

export default GenericButton