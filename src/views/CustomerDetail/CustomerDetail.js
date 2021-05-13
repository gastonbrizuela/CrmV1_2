import React, { useState ,useEffect} from 'react'
import CardSegment from './components/cardSegment/CardSegment'
import Card from '../../components/Card/Card.js'
import './CustomerDetail.css'
import { Fragment } from 'react'
import PrincipalTitle from '../../components/PrincipalTitle/PrincipalTitle'
import axios from 'axios'

const CustomerDetail = ({match})=>{
    const dicPrueba = {dataCustomer:{ Name: '-',
                        Code: '-',
                        Email: '-',
                        Phone: '-',
                        Mobile: '-',
                        NameOne: '-',
                        LastNameTwo: '-',
                        Birthdate: '-',
                        Sex: '-'
    },
    dataCards:
    [{ticketPromedio:['Ticket Promedio', '-'],precioPromedio:['Precio Promedio por producto', '-']},
    {ticketPromedio:['Revenue Total', '-'],precioPromedio:['Margen Total', '-'],ultimaCompra: ['Cantidad De Tickets', '-']},
    {ticketPromedio:['Renueve (12 Meses)', '-'],precioPromedio:['Margen (12 Meses)', '-'],ultimaCompra: ['Cantidad de tickets (12 Meses)', 'Hace un año']}
    ]}
    const dicParameterCustomer = {
                        Code: 'Documento',
                        Email: 'Email',
                        Phone: 'Telefono',
                        Mobile: 'Celular',
                        NameOne: 'Nombre',
                        LastNameTwo: 'Apellido',
                        Birthdate: 'Fecha de nacimiento',
                        Sex: 'Genero'
    }

    const dicpruebadetail = {
                        ticketPromedio:['Ticket Promedio', 723],
                        precioPromedio:['Precio Promedio por producto', 206],
                       

    }

    const [customer,setCustomer] =useState(dicPrueba)
    
    useEffect(()=>{
        let sourse = axios.CancelToken.source();
            async function fetchData(){
                let url = `http://localhost:5000${match.match.url}`
                axios.get(url,{cancelToken:sourse.token})
               .then(res=>{
                   console.log(res.data)
                   setCustomer(res.data)
                   })
               .catch(err=>{
                   console.log(err)
                })
            }
            fetchData();
            return()=>{
                console.log('desmontando componente')
                sourse.cancel()
            }
       
    },[])

    const listKeys = Object.keys(dicPrueba['dataCustomer'])
    const renderDl = (key)=>{
        console.log(key)
        if (key ==='Name'){
            return
        }
        var value = customer['dataCustomer'][key]
        if (value===null){
            value = 'Sin Dato'
        }
        return (
                <dl>
                    <dt>
                        {dicParameterCustomer[key]}:
                    </dt>
                    <dd>
                        {value}
                    </dd>
                </dl>
        )
    }
    const renderTopCard =(info)=>{
        return (<CardSegment dic= {info}></CardSegment>)

    }
    return(<Fragment>
    <PrincipalTitle title='Perfil 360º'>P</PrincipalTitle>
    <div className= 'customer-detail-conteiner-'>
                <div className='side-detail-customer-conteiner'>
                    <div className = 'side-detail-customer-header'>
                        <div className='side-detail-customer-title'>
                        <h3><i className="fas fa-user"></i> {customer.Name}</h3></div>
                    </div>
                    <div className= 'side-detail-customer-resume'>
                        {listKeys.map((key)=>renderDl(key))}
                    </div>
                </div>
                <div className='content-customer-detail-'>
                    <div className='top-customer-detail'>
                        {customer.dataCards.map(rowInfo =>renderTopCard(rowInfo))}
                    </div>
                    <div className='center-customer-detail'>
                        <Card header='Segmento'>
                            <ul>
                                <li>Todos los clientes</li>
                                <li>Clientes fidelizados</li>
                                <li>7.Top</li>
                                <li>Activo</li>
                            </ul>
                        </Card>
                        <Card header='ultimos Productos'>                            
                            <ul>
                                <li>Todos los clientes</li>
                                <li>Clientes fidelizados</li>
                                <li>7.Top</li>
                                <li>Activo</li>
                            </ul></Card>
                    </div>
                </div>

            </div>
            </Fragment>)
}

export default CustomerDetail 