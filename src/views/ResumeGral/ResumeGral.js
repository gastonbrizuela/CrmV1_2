import React, { Fragment, useEffect, useState } from "react";
import LabelDescription from "../createCampaign/component/Resume/Component/LabelDescription/LabelDescription";
import Title from "../../components/Title/Title";
import {optionsValueAppWeb ,filterTriggers,listInput,filterlist ,programationType} from '../../Constant/const'
import axios from 'axios'
import './ResumenGral.css'
import Card from '../../components/Card/Card'
import TitleCard from '../../components/TitleCard/TitleCard'

const ResumeGral = ({match})=>{
    const [camp,setCam] =useState({})
    console.log(match)
    useEffect(()=>{
        console.log('llega antes del if')
            async function fetchData(){
                let url = `http://localhost:5000${match.match.url}`
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
        if (input.key === 'Content'){
            return ''
        }
            return(<div className='input-description-con'>
            <LabelDescription label={input.name} description={camp[input.key]}></LabelDescription>
            </div>)
        }
    const renderFilter = (input)=>{
        if (camp[input.code]==1){
            return(<Fragment><div className='container-card-filter'>
                        <h3>{input.name}</h3>
                        {input.listParameter.map(renderDefinition)}
                    </div>
                    </Fragment>)
            
        }
    }
    const renderTemplate = ()=>{
        return (<iframe className ='tample-preview' id='15' name = {15} sandbox="allow-same-origin" srcDoc={camp['Content']}></iframe>)
     }
    const renderReturn = ()=>{
        if (typeof(camp) != "undefined"){
            return(<Fragment> <div className='resume-container-gral'>
            <div className='resume-datail-content-gral'>
                    <Card header ={<TitleCard text = 'Definicion'></TitleCard>}>{listInput.map(renderDefinition)}</Card>
                    <Card header ={<TitleCard text = 'Programacion'></TitleCard>}>{listProgramation.map(renderDefinition)}</Card>
                    <Card header ={<TitleCard text = 'Filtros'></TitleCard>}>{listFilter.map(renderFilter)}</Card>
                    <Card header ={<TitleCard text = 'Template'></TitleCard>}>{renderTemplate()}</Card>
                </div>
                </div>
                </Fragment>
            )}
    }
    return(renderReturn())
        }



    
export default ResumeGral