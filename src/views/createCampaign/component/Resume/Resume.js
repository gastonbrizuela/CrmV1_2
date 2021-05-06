import React, { Fragment} from "react";
import {filterTriggers,listInput,filterlist ,programationType} from '../../../../Constant/const'
import LabelDescription from "./Component/LabelDescription/LabelDescription";
import Card from "../../../../components/Card/Card"
import TitleCard from "../../../../components/TitleCard/TitleCard"
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
            if (input.key === 'Content'){
                return ''
            }
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
    const renderTemplate = ()=>{
       return (<iframe className ='tample-preview' id='15' name = {15} sandbox="allow-same-origin" srcDoc={form['Content']}></iframe>)
    }
    const renderReturn = ()=>{

            return(<Fragment> <div className='resume-container'>
                    <Card header ={<TitleCard text = 'Definicion'></TitleCard>}>
                        <div>
                            {listInput.map(renderDefinition)}
                        </div>
                        </Card>
                    <Card header ={<TitleCard text = 'Programacion'></TitleCard>}>
                        <div>
                            {listProgramation.map(renderDefinition)}
                        </div>
                        </Card>   
                    <Card header ={<TitleCard text = 'Filtros'></TitleCard>}>
                        <div>
                            {listFilter.map(renderFilter)}
                        </div>
                        </Card>
                            <Card header ={<TitleCard text = 'Template'></TitleCard>}>{renderTemplate()}</Card>
                </div>
                </Fragment>
            )
    }

    return(renderReturn())
        }



    
export default Resume