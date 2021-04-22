import axios from 'axios';
import React, { useRef } from 'react';
import { render } from 'react-dom'

import EmailEditor from 'react-email-editor';

const TemplateGenerator = (props) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log(design)
      const templatejs = jsonTemplate(html)
      console.log('exportHtml', html);
      axios.post(`http://localhost:5000/template`, templatejs)
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
      nombre: 'gaston',
    }
    return templatejs
  }

  const onLoad = () => {
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  return (
    <div>
      <EmailEditor
        ref={emailEditorRef}
        onLoad={onLoad}
      />
      <div>
        <button onClick={exportHtml}>Guardar Template</button>
      </div>
    </div>
  );
};


export default TemplateGenerator;