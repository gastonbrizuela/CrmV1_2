import React from 'react'
import './FilterLine.css'

const FilterLine = ({filterName})=>{
    console.log('hola')
    return(<div className='filter-line-conteiner'>
        <input type='checkbox'></input>
        <i className="far fa-calendar-minus"></i>
        {filterName}
        </div>)
}

export default FilterLine