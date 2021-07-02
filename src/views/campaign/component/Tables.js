import React, { Fragment, useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Tables.css'
import {optionsValueAppWeb} from '../../../Constant/const'
const Tables = ({typeSend})=>{
    const apiURl = process.env.REACT_APP_API_URL
    const [listCamp, setListCamp] = useState([])
    const [reloadCampaign, setReloadCampaig] = useState(0)
    useEffect(()=>{
      axios.get(`${apiURl}/campaign`)
      .then(res=>{
        setListCamp(res.data)
        setReloadCampaig(0)
      })
      .catch(err=>{
          console.log(err)
      })
    },[reloadCampaign])

    const deleteCampaign = (id)=>{
        axios.delete(`${apiURl}/campaign/${id}`)
        .then(setReloadCampaig(1))
        .catch(err=>{
            console.log(err)
        })
    }

    const renderCampaign =(camp,index) =>{
        if (camp.TypeSend == typeSend){
            return(
                <tr key={index} className='tr-table-campaign'>
                    <td>{camp.internalId}</td>
                    <td>{camp.Name}</td>
                    <td><Link to={`/campaign/${camp.internalId}`}>ver mas</Link></td>
                    <td>{optionsValueAppWeb['Status'][camp.Status]}</td>
                    <td><i className='fas fa-share'></i></td>
                    <td>ver+</td>
                    <td><i className="fas fa-trash-alt" onClick ={()=>{deleteCampaign(camp.internalId)}}></i></td>
                </tr>
            )
        }

    }
    return (<Fragment>
            <div className = 'content-table-detail'>
            <table className = "content-table">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Detalle.Status</th>
                        <th>Estado</th>
                        <th>Envios</th>
                        <th>Reportes</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                {listCamp.map(renderCampaign)}
                </tbody>
            </table>
            </div>
            </Fragment>
    );
};

export default Tables

