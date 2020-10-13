import React, { Fragment, useState } from "react";
import GenericButton from "../../../../components/GenericButton/GenericButton";
import InputApp from "../../../../components/Input/InputApp";
import Title from "../../../../components/Title/Title";
import './FilterSideBar.css'


const FilterSideBar = ({filterlist,handleChangeFilter, filterViewSelect,handleChange,form,handleChangeFilterAdd})=>{
    let listParam = []
    let selectName = ''

    const renderLi = (filter)=>{
        let className = ''
        let value = 0
        let classNameIcon = ''
        if (form[filter.code] ==1){
            className = ' li-filter-add '
            value = 0
            classNameIcon = 'fas fa-check-circle add-icon'
        }
        if (form[filter.code] ==0){
            className = ' li-filter '
            value = 1

        }
        if (filter.code == filterViewSelect){
            className += 'li-filter-selected'
            listParam = filter.listParameter
            selectName = filter.name
        }
            
        return (<Fragment>
                <div className='container-row-filter'>
                    <li className={className} key={filter.code} onClick={()=>handleChangeFilter(filter.code)}>{filter.name}</li>
                    <i class={classNameIcon}></i>
                </div>
        </Fragment>)
    }
    const renderInputs = (inputdata)=>{
        return(
        <Fragment>
        <InputApp data={inputdata}  handleChange = {handleChange} form = {form}></InputApp>
        </Fragment>
        )
    }
    return(<Fragment>
    <ul>
        {filterlist.map(renderLi)}
    </ul>
    <div className='container-param-filter'>
        <Title text={selectName}></Title>
        {listParam.map(renderInputs)}
        <div>
            <GenericButton text='Agregar' onCl = {handleChangeFilterAdd}></GenericButton>
            <GenericButton text='Eliminar'onCl = {handleChangeFilterAdd}></GenericButton>
        </div>
    </div>
    </Fragment>)
};
export default FilterSideBar