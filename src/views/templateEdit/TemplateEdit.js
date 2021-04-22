import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
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
        console.log(`http://localhost:5000/image_template/${template.IdImage}.png`)
        return (<div className='content-card'>
                    <Card>
                        <div className = 'content-card-template'>
                            <img src={`http://localhost:5000/image_template/${template.IdImage}.png`}></img>
                        </div>
                    </Card>
                </div>
                )
    }
    return (<frameElement>
            <div className='edit-template'>
            {listTemplate.map(renderTemplate)}
            </div>
            </frameElement>)
}

export default TemplateEdit