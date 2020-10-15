import React, { Fragment} from "react";
import {filterTriggers,listInput,filterlist ,programationType} from '../../../../Constant/const'
import LabelDescription from "./Component/LabelDescription/LabelDescription";
import Title from "../../../../components/Title/Title";
import './Resume.css'
const Resume = ({form})=>{

    console.log(form)

    let listProgramation = [];
    let listFilter = [];
    if (form.TypeSend==='Unico envio'){
            listProgramation =  programationType[1]
            listFilter = filterlist
            }
    if (form.TypeSend==='Automatizada'){
            listProgramation = programationType[2][form.TypeProgrammSend]
            listFilter = filterTriggers
            }

    

    const renderDefinition =(input)=>{
            return(<div className='input-description-con' key={input.key}>
            <LabelDescription label={input.name} description={form[input.key]}></LabelDescription>
            </div>)
        }
    const renderFilter = (input)=>{
        if (form[input.code]===1){
            return(<div className='container-card-filter'>
                        <h3>{input.name}</h3>
                        <hr></hr>
                        {input.listParameter.map(renderDefinition)}    
                         </div>)
        }
    }
    const renderReturn = ()=>{

            return(<Fragment>
                    <div className='resume-container'>
                    <div className='resume-datail-content'>
                        <Title text='Definicion'></Title>
                        {listInput.map(renderDefinition)}
                    </div>
                    <div className='resume-datail-content'>
                        <Title text='Programacion'></Title>
                        {listProgramation.map(renderDefinition)}
                    </div>
                    <div className='resume-datail-content'>
                        <Title text='Filtros'></Title>
                        {listFilter.map(renderFilter)}
                    </div>
                    </div>
                </Fragment>
            )
    }

    return(renderReturn())
        }



    
export default Resume