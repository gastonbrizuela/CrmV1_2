import React from 'react'
import './TextArea.css'

const TextArea = ({keyAtr ,form, handleChange})=>{
    return (<textarea   
                    className='text-area' 
                    name= {keyAtr} 
                    key = {keyAtr}
                    onChange= {handleChange}
                    value= {form[keyAtr]}>
            </textarea>)
}

export default TextArea