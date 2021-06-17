import React, { useEffect, useState } from 'react'
import './Segment.css'
import GenericButton from '../../components/GenericButton/GenericButton.js'
import {filterTriggers,optionsValueOpenOrange} from '../../Constant/const'
import FilterLine from './components/filter-line/FilterLine'
import PrincipalTitle from '../../components/PrincipalTitle/PrincipalTitle'
import { Fragment } from 'react'
import TableSegment from './components/table-segment/TableSegment'
import axios from 'axios'
import InputApp from '../../components/Input/InputApp'
import LapseFilter from './lapseFilter/LapseFilter'
const Segment =() =>{
    const createContentForm= ()=>{
        var contentForm = {};
        filterTriggers.forEach((filter)=>{
            filter.listParameter.forEach((param)=>{
                if (param.type==='date'){
                    var hoy = new Date();
                    var dd = hoy.getDate();
                    var mm = hoy.getMonth()+1;
                    var yyyy = hoy.getFullYear();
                    hoy = '1990'+'-'+'09'+'-'+'15';
                    contentForm[param.key]= hoy
                }else if (param.type=== 'select'){
                    contentForm[param.key]= param.options[0]
                }else if (param.type=== 'number'){
                    contentForm[param.key]= 0
                }else{
                    contentForm[param.key]='';
                }
                
            });
        })
        filterTriggers.forEach ((filter)=>{
            contentForm[filter.code]=0;
            filter.listParameter.forEach((param)=>{
                if (param.type==='date'){
                    var hoy = new Date();
                    var dd = hoy.getDate();
                    var mm = hoy.getMonth()+1;
                    var yyyy = hoy.getFullYear();
                    hoy = '1990'+'-'+'09'+'-'+'15';
                    contentForm[param.key]= hoy
                } else if (param.type=== 'select'){
                    contentForm[param.key]= param.options[0]
                }else if (param.type=== 'number'){
                    contentForm[param.key]= 0
                }else{
                    contentForm[param.key]='';
                }
                
            });
        }
        )
        contentForm['Name'] = ''

        return contentForm
    }
    const contentFormFinish = createContentForm()
    const [form, setForm ] = useState(contentFormFinish)
    const [segmentSelected, setSegmentSelected] = useState({})
    const [pageTable,setPageTable] = useState(1)
    const [listCustomer, setListCustomer] = useState([{}])
    const [dicSegement, setDicSegment] = useState({})
    const [listSegment, setListSegment] = useState([])
    const renderFilterLine = (filter)=>{
        let datainp
        datainp =  {key:filter.code,name:filter.code,type:'checkbox'}
        return(<FilterLine filter ={filter} data = {datainp}  handleChange ={handleChange} form={form} key= {filter.code} FilterLine/>)
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/segment`)
        .then(res =>{
            let dicNameSegment = {}
            res.data.forEach((seg)=>{
                dicNameSegment[seg.internalId] = seg.Name
            })
            setDicSegment(dicNameSegment)
            console.log(dicSegement)
            setListSegment(Object.values(dicNameSegment))
            console.log('listsegment')
            console.log(listSegment)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    const handleChange = e => {
        let result = e.target.value
        if (e.target.type === 'checkbox'){
            result = 0
            if (e.target.checked){
                result = 1
            }
        }

        setForm({
            ...form,
            [e.target.name]: result
        })}
    const handleSave = ()=>{
        alert('Funciona el boton handlesave')
        console.log('Funciona correctamente el handle')
        let returnfor = form
        let listOtionsValueOpenOrange = Object.entries(optionsValueOpenOrange)
        listOtionsValueOpenOrange.forEach((element)=>{
            returnfor[element[0]] = element[1][returnfor[element[0]]]
        })
        axios.post('http://localhost:5000/segment', returnfor)
        .then(response => {
            if(response.request.status ===200){
                alert('se guardo correctamente')
            }
        }).catch(e => {
            console.log(e);
        });
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

      const handleSearch =()=>{
          alert('se selecciona el boton de busqueda nuevo')
          axios.get(`http://localhost:5000/customer/filter`,form)
          .then(res=>{
              console.log(res.data)
          })
          .catch(err=>{
              console.log(err)
          })
      }

      const renderInputsSegment =() =>{
            console.log('listSegment')
            console.log(listSegment)
            const data = {key:'segment-selected-new',name:'',type:'select', options: listSegment}
            return <InputApp data={data}  handleChange = {handleChangeSegment} form = {segmentSelected} ></InputApp>
      }

      const handleChangeSegment = e => {
        setSegmentSelected({
            ...segmentSelected,
            [e.target.name]: e.target.value
        })
    }

    return (<Fragment>
            <PrincipalTitle title='Segmentos' ></PrincipalTitle>
            <div className = 'segment-conteiner'>
                    <div className = 'side-bar-segment-container'>
                        <div className= 'segment-list'>
                        {renderInputsSegment()}
                        </div>
                        <div><button></button></div>
                        <div className = 'hr-segment'>
                            <hr></hr>
                        </div>
                        <div className='name-segment'>
                            <InputApp data={{type:'text',name:'Nombre',key:'Name'}}  handleChange = {handleChange} form = {form} key={'Name'}></InputApp>
                        </div>
                        <div className='segment-button-save'><GenericButton onCl={handleSave}><i class="far fa-save"></i></GenericButton></div>
                        <div className='segment-filter-side'>{filterTriggers.map(filteritem=>renderFilterLine(filteritem))}</div>
                    </div>
                    <div className = 'customer-detail-conteiner'>
                        <div className='search-container'>
                            <input className='search-segment' id ='search-segment' type = 'text' placeholder='Nombre Apellido Email Dni' ></input>
                            <LapseFilter handleChange = {handleChange} form = {form}></LapseFilter>
                            <div className='button-search-container'><GenericButton onCl={()=>handleSearch()}><i className="fas fa-search"></i></GenericButton></div>
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
