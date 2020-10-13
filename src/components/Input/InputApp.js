import React, { Fragment } from 'react';
import "./InputApp.css"

const InputApp=({data,handleChange,form})=>{

    const renderInput = ()=>{
        if (data.type == 'select'){
            return(<Fragment>
                    <select className='input-material' key={data.key} name= {data.key} onChange= {handleChange} value= {form[data.key]}>
                    {data.options.map(renderOptions)}
                    </select>
                    <label className='label-material'>{data.name}</label>
                    </Fragment>)
        }else{
        return(
        <Fragment>
        <input className='input-material'
        label= 'chau'
        type={data.type}
        required
        placeholder= {data.name}
        name= {data.key} 
        key = {data.key}  
        onChange= {handleChange}
        value= {form[data.key]}>
        </input>
        <label  className='label-material'>{data.name}</label>
        </Fragment>)
        }
    }
    const renderOptions = (option)=>{
    return(<option value={option}>{option}</option>)
    }

    return(
        <Fragment>
            <div className='content-input'>
            {renderInput()}
            </div>
        </Fragment>
    )
}

export default InputApp