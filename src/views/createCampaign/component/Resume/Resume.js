import React, { Fragment, useEffect, useState } from "react";
import {optionsValueAppWeb ,filterTriggers,listInput,filterlist ,programationType} from '../../../../Constant/const'
import axios from 'axios'
import LabelDescription from "./Component/LabelDescription/LabelDescription";
import Title from "../../../../components/Title/Title";
import './Resume.css'
const Resume = ({form,match})=>{
    const [camp,setCam] =useState(form)
    console.log(match)
    useEffect(()=>{
        console.log('llega antes del if')
        if (typeof(camp) == "undefined"){
            async function fetchData(){
                let url = `http://192.168.0.7:5000${match.url}`
                console.log(url)
                axios.get(url)
               .then(res=>{
                   console.log('hola')
                   genOptionValues(res.data[0])
                   })
               .catch(err=>{
                   console.log(err)
                })
            }
            fetchData();
       }
    },[])

    const genOptionValues = (campres)=>{
        let returnfor = campres
        let listOtionsValueOpenOrange = Object.entries(optionsValueAppWeb)
        listOtionsValueOpenOrange.map((element)=>{
            returnfor[element[0]] = element[1][returnfor[element[0]]]
        })
        setCam(returnfor)
        }

    let listProgramation = [];
    let listFilter = [];
    if (typeof(camp) != "undefined"){
        if (camp.TypeSend=='Unico envio'){
            listProgramation =  programationType[1]
            listFilter = filterlist
            }
        if (camp.TypeSend=='Automatizada'){
            listProgramation = programationType[2][camp.TypeProgrammSend]
            listFilter = filterTriggers
            }

    }

    const renderDefinition =(input)=>{
            return(<div className='input-description-con'>
            <LabelDescription label={input.name} description={camp[input.key]}></LabelDescription>
            </div>)
        }
    const renderFilter = (input)=>{
        if (camp[input.code]==1){
            return(<div className='container-card-filter'>
                        <h3>{input.name}</h3>
                        <hr></hr>
                        {input.listParameter.map(renderDefinition)}    
                         </div>)
            
        }
    }
    const renderReturn = ()=>{
        if (typeof(camp) != "undefined"){
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
            )}else{
                return(<Fragment><h1>hola</h1></Fragment>
                )
            }
    }
    return(renderReturn())
        }



    
export default Resume