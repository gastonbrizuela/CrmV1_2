import React from 'react'
import './FilterLine.css'

const FilterLine = ({filter})=>{
    console.log('hola')
    return(<div className='filter-line-conteiner'>
        <input type='checkbox'></input>
        &nbsp;
        <i className="far fa-calendar-minus"></i>
        &nbsp;
        {filter.name}
        </div>)
}

export default FilterLine