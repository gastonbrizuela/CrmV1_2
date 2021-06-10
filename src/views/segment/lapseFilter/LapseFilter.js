import React from "react";
import InputApp from "../../../components/Input/InputApp.js";
import {listInputLapse} from '../../../Constant/const.js'
import './LapseFilter.css'

const LapseFilter = ({handleChange,form})=>{
    const renderInputs = (inp)=>{
        return (<InputApp data={inp}  handleChange = {handleChange} form = {form}></InputApp>)
    }
    return (
        <div className='lapse-filter'>
            <div className = 'lapse-filter-inputs'>
            {listInputLapse.map(renderInputs)}
            </div>
        </div>
    )
}

export default LapseFilter