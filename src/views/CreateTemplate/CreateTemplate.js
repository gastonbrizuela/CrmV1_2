import React, { Fragment, useState } from 'react'
import TextArea from '../../components/TextArea/TextArea'
import GenericButton from '../../components/GenericButton/GenericButton'
import './CreateTemplate.css'

const CreateTemplate = ({form, keyAtr ,handleChange})=>{
    
    const [preview, setPreview] = useState('')
    const handlePreviewTemplate  = (e)=>{
      if (e.target.value ==='Preview'){
        setPreview(form['Content'])
      }
    }
    return (<Fragment>
                <div className='create-template-container'>
                    <div className = 'text-area-container'>
                        <TextArea keyAtr={keyAtr} form={form} handleChange={handleChange}></TextArea>
                    </div>
                    <div className = 'template-button-container'>
                        <GenericButton text='Preview' onCl={handlePreviewTemplate}></GenericButton>
                        <GenericButton text ='Agregar'></GenericButton>
                    </div>  
                    <div className= 'tample-preview-container'>
                  <iframe className ='tample-preview' id='15' name = {15} sandbox="allow-same-origin" srcDoc={preview}></iframe>
                </div>
                </div>

            </Fragment>)
}

export default CreateTemplate 