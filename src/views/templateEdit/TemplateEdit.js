import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import Card from '../../components/Card/Card'
import GenericButton from '../../components/GenericButton/GenericButton'
import PrincipalTitle from '../../components/PrincipalTitle/PrincipalTitle'
import TitleCard from '../../components/TitleCard/TitleCard'
import './TemplateEdit.css'

const TemplateEdit = ()=>{
    const [listTemplate, setListTemplate] = useState([])
    useEffect(()=>{
        Axios.get('http://localhost:5000/template')
        .then(res =>{
            setListTemplate(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    const renderTemplate = (template)=>{
        const mystyle = {
            backgroundImage:`url(http://localhost:5000/image_template/${template.IdImage}.png)`,
            backgroundColor: "DodgerBlue",
            height:"100%",
            with:"100%",
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
          };

        console.log(mystyle)
        
        return (<div className='content-card-template'>
                    <Card header={<TitleCard text = {template.Nombre}></TitleCard>}>
                        <div className='content-template'>
                            <div style ={mystyle}>
                                <div className='button-container-template'>
                                    <div className='generic-button-template'><GenericButton text='Preview'></GenericButton></div>
                                    <div className='generic-button-template'><GenericButton text='Editar'></GenericButton></div>
                                    <div className='generic-button-template'><GenericButton text='Eliminar'></GenericButton></div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                )
    }
    return (<frameElement>
            <PrincipalTitle title = 'Editor de template'></PrincipalTitle>
            <div className='edit-template'>
            {listTemplate.map(renderTemplate)}
            </div>
            </frameElement>)
}

export default TemplateEdit
