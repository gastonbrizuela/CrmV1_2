import React, { useEffect, useState } from 'react'
import './Segment.css'
import GenericButton from '../../components/GenericButton/GenericButton.js'
import {filterlist} from '../../Constant/const'
import FilterLine from './components/filter-line/FilterLine'
import PrincipalTitle from '../../components/PrincipalTitle/PrincipalTitle'
import { Fragment } from 'react'
import TableSegment from './components/table-segment/TableSegment'
import axios from 'axios'
const Segment =() =>{
    const [pageTable,setPageTable] =useState(1)
    const [listCustomer, setListCustomer] = useState([{}])
    const renderFilterLine = (filter)=>{
        return(<FilterLine filterName ={filter['name']}></FilterLine>)
    }
    useEffect(()=>{
        axios.get(`http://localhost:5000/customer?page=${pageTable}}&limit=10`)
        .then(res=>{
        setListCustomer(res.data)
        console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
      },[pageTable])
    return (<Fragment>
            <PrincipalTitle title='Segmentos' ></PrincipalTitle>
            <div className = 'segment-conteiner'>
                    <div className = 'side-bar-segment-container'>
                        <div className='segment-button-filter'><GenericButton>Filtrar</GenericButton></div>
                        <div className='segment-button-save'><GenericButton><i class="far fa-save"></i></GenericButton></div>
                        <div className='segment-filter-side'>{filterlist.map(filteritem=>renderFilterLine(filteritem))}</div>
                    </div>
                    <div className = 'customer-detail-conteiner'>
                        <div className='search-container'>
                            <input className='search-segment' id ='search-segment' type = 'text' placeholder='Nombre Apellido Email Dni' ></input>
                            <div className='button-search-container'><GenericButton><i className="fas fa-search"></i></GenericButton></div>
                            
                        </div>
                        <div className='table-conteiner'>
                            <TableSegment listCust = {listCustomer}></TableSegment>
                        <div className='botton-table'>
                        <div className='page-controller-conteiner'>
                            <div className='button-segment-pagetable'>
                            <GenericButton onCl={()=>setPageTable(pageTable-1)}><i class="fas fa-chevron-left"></i></GenericButton>
                            </div>
                            <div>{pageTable}</div>
                            <div className= 'button-segment-pagetable'>
                            <GenericButton onCl={()=>setPageTable(pageTable+1)}><i class="fas fa-chevron-right"></i></GenericButton>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
            </div>
            </Fragment>)
}

export default Segment