import React from "react";
import { Link } from "react-router-dom";
import './SideBar.css'
const SideBar = ()=>{

    const ButtonsAction = [
        {name:'Campaña',classN:'fas fa-folder-open' ,key:'campaign', link:'/campaign'},
        {name:'Crear Campaña',classN:'fas fa-folder-plus', key:'createCampaign',link:'/createcamp'},
        {name:'Generar Template',classN:'fas fa-file-code', key:'TemplateGenerator',link:'/template_generator'},
        {name:'Editar Template',classN:'fas fa-edit', key:'TemplateEdit',link:'/template_edit'}
    ]
    const renderButtons =(button,index) =>{
        let classn = ''
        if (false){
            classn = 'li-side-bar-selected'
        }
        return(
            <li className={classn} key= {index}>
                <Link to= {button.link} style={{ textDecoration: 'none' }}>
                <i className={button.classN} ></i>{button.name}
                </Link>
            </li>
        )}


    return (
        <div className='container-side-bar'>
        <div className="bar">
        <div className="header-bar">
            
        </div>
        <div className="sidebar">
            <ul>
                {ButtonsAction.map(renderButtons)}
            </ul>
        </div> 
    </div>
    </div>
    );
};

export default SideBar