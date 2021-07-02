import React from 'react'
import GenericButton from '../../../../components/GenericButton/GenericButton'
import './TableSegment.css'
import { Link } from "react-router-dom";

const TableSegment =({listCust})=>{
    const JsonPrueba = [{Perfil:'-',Name:'Gaston', LastName:'Brizuela', sex:'Masculino',ChargeDate:'2021-01-05', email:'gastonbrizuela@gmail.com'}]
    const titles =  ['Perfil','Nombre','Apellido','Genero','Fecha de alta','Email']
    const renderTH = (text)=>{
        return(<th>{text}</th>)
    }
    const renderTD = (customer)=>{
            return(<tr>
            <td><Link to= {`/customer/${customer.Code}`} ><GenericButton><i className="fas fa-user"></i></GenericButton></Link></td>
            <td>{customer['NameOne']}</td>
            <td>{customer['LastNameTwo']}</td>
            <td>{customer['Sex']}</td>
            <td>{customer['ChargeDate']}</td>
            <td>{customer['Email']}</td>
            </tr>)
          }
    

    return(<div className='table-conteiner'>
            <table>
                <tr>
                    {titles.map(tit => renderTH(tit))}
                </tr>
                {listCust.map(cust =>renderTD(cust))}
                
            </table>
            </div>)
}

export default TableSegment