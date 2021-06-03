import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import Card from '../../components/Card/Card'
import GenericButton from '../../components/GenericButton/GenericButton'
import TitleCard from '../../components/TitleCard/TitleCard'
import './CreateTemplate.css'

const CreateTemplate = ({handleChange, setSteptSelect})=>{
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
      const addContent = (templateHtml)=>{
        handleChange({'target':{'name':'Content','value':templateHtml}})
        setSteptSelect(5)

      }

      
      return (<div className='content-card-template'>
                  <Card header={<TitleCard text = {template.Nombre}></TitleCard>}>
                      <Fragment>
                      <div className='content-template'>
                          <div style ={mystyle}>
                              <div className='button-container-template'>
                                <div><GenericButton text='Aceptar' onCl = {()=>addContent(template.Html)}>Aceptar</GenericButton></div>
                                <div><GenericButton text='Preview'>Preview</GenericButton></div>
                              </div>
                          </div>
                      </div>
                      </Fragment>
                  </Card>
              </div>
              )
  }
  return (
          <div className='edit-template'>
          {listTemplate.map(renderTemplate)}
          </div>)
}

export default CreateTemplate 