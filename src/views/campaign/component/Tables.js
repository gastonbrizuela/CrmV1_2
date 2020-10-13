import React, { Fragment, useState,useEffect } from "react";
import Title from '../../../components/Title/Title'
import axios from "axios";
import { Link } from "react-router-dom";
import './Tables.css'

const Tables = ()=>{
    const [listCamp, setListCamp] = useState([])

    useEffect(()=>{
      axios.get('http://192.168.0.7:5000/api')
      .then(res=>{
        setListCamp(res.data)
      })
      .catch(err=>{
          console.log(err)
      })
    },[])

    const renderCampaign =(camp,index) =>{
        return(
            <tr key={index}>
                <td>{camp.internalId}</td>
                <td>{camp.Name}</td>
                <td><Link to={`/main/campaign/${camp.internalId}`}>ver mas</Link></td>
                <td></td>
                <td><i className='fas fa-share'></i></td>
                <td>ver+</td>
                <td>ver+</td>
            </tr>
        )
    }
    return (<Fragment>
            <Title text='Campañas'></Title>
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

