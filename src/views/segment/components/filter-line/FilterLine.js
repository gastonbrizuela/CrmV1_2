import React, { Fragment } from 'react'
import './FilterLine.css'
import InputApp from '../../../../components/Input/InputApp.js'
import {filterTriggers} from '../../../../Constant/const.js'

const FilterLine = ({filter ,data, handleChange, form,key})=>{
    const renderOptions = (option)=>{
        return(<option value={option} key={`${data.key}${option}`}>{option}</option>)
        }
    const renderDetail =()=>{
        if (form[data.name]===1){
            return (filter['listParameter'].map(renderDetailInput))
            
        }
    }
    const renderDetailInput = (filt)=>{
        if (data.type === 'select'){
            return(<Fragment>
                    <select className='input-material' key={`${filt.key}select`} name= {filt.key} onChange= {handleChange} value= {form[filt.key]}>
                    {filt.options.map(renderOptions)}
                    </select>
                    <label className='label-material' key ={`${filt.key}label`}>{filt.name}</label>
                    </Fragment>)
        }
        return (<div>
            {filt.name}
            <input
            type={filt.type}
            required
            placeholder= {filt.name}
            name= {filt.key} 
            key = {filt.key}
            onChange = {handleChange}  
            value= {form[filt.key]}>
            </input></div>)
    }

    return(<div className='filter-line-conteiner'>
        <input
        type={data.type}
        required
        placeholder= {data.name}
        name= {data.key} 
        key = {data.key}  
        onChange= {handleChange}
        value= {form[data.key]}
        checked={form[data.key]}>
        </input>
        &nbsp;
        <i className="far fa-calendar-minus"></i>
        &nbsp;
        {filter.name}
        {renderDetail()}
        </div>)
}

export default FilterLine