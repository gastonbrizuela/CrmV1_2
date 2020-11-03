import React, { Fragment, useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Tables.css'

const Tables = ({typeSend})=>{
    const [listCamp, setListCamp] = useState([])

    useEffect(()=>{
      axios.get('http://localhost:5000/api')
      .then(res=>{
        setListCamp(res.data)
      })
      .catch(err=>{
          console.log(err)
      })
    },[])

    const renderCampaign =(camp,index) =>{
        console.log()
        if (camp.TypeSend == typeSend){
            return(
                <tr key={index} className='tr-table-campaign'>
                    <td>{camp.internalId}</td>
                    <td>{camp.Name}</td>
                    <td><Link to={`/campaign/${camp.internalId}`}>ver mas</Link></td>
                    <td>{camp.Status}</td>
                    <td><i className='fas fa-share'></i></td>
                    <td>ver+</td>
                    <td>ver+</td>
                </tr>
            )
        }

    }
    return (<Fragment>
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
            </Fragment>
    );
};

export default Tables

