import axios from 'axios';
import React, { useRef, useState } from 'react';
import { render } from 'react-dom'
import InputApp from '../../components/Input/InputApp'
import EmailEditor from 'react-email-editor';
import './TemplateGenerator.css'
import PrincipalTitle from '../../components/PrincipalTitle/PrincipalTitle';

const TemplateGenerator = (props) => {
  const [form, setForm] =useState({nametemplate:''})
  const emailEditorRef = useRef(null);
  const paramInput = {key:'nametemplate', name:'Nombre del template',type:'text  '}
  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
  })
  }
  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log(design)
      const templatejs = jsonTemplate(html)
      console.log('exportHtml', html);
      axios.post(`http://100.100.100.15:5000/template`, templatejs)
      .then(response =>{
        console.log(response)
      })
      .catch(e =>{
        console.log(e)
      })
    });
  };

  const jsonTemplate =(html) =>{
    const templatejs = {
      Html : html,
      nombre: form.nametemplate,
    }
    return templatejs
  }

  const onLoad = () => {
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  return (
    <div className='conteiner-tample-generator'>
    <PrincipalTitle title='Generador de template'></PrincipalTitle>
    <div className='form-template-generator'>
      <EmailEditor
        ref={emailEditorRef}
        onLoad={onLoad}
      />
      
        <div className='input-d-conteiner'>
          <InputApp data={paramInput}  handleChange = {handleChange} form = {form} key={paramInput.key}></InputApp>
        </div>
        <div>
          <button onClick={exportHtml}>Guardar Template</button>
        </div>
      </div>
      </div>
  );
};


export default TemplateGenerator;