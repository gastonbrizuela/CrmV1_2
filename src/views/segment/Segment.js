import React from 'react'
import './Segment.css'
import GenericButton from '../../components/GenericButton/GenericButton.js'
import {filterlist} from '../../Constant/const'
import FilterLine from './components/filter-line/FilterLine'
const Segment =() =>{
    const renderFilterLine = (filter)=>{
        console.log(filter['name'])
        return(<FilterLine filterName ={filter['name']}></FilterLine>)
    }

    return (<div className = 'segment-conteiner'>
                    <div className = 'side-bar-segment-container'>
                        <div className='segment-button-filter'><GenericButton text='filtrar'></GenericButton></div>
                        <div className='segment-button-save'><GenericButton text='S'></GenericButton></div>
                        <div className='segment-filter-side'>{filterlist.map(filteritem=>renderFilterLine(filteritem))}</div>
                    </div>
                    <div className = 'customer-detail-conteiner'>
                        segunda barra
                    </div>
            </div>)
}

export default Segment