import React, { Fragment, useState } from "react";
import Input from "../../components/Input/InputApp"
import axios from 'axios'
import { Redirect } from "react-router-dom";
import {optionsValueOpenOrange ,filterTriggers,listInput,filterlist ,programationType} from '../../Constant/const'
import Title from "../../components/Title/Title";
import ProgressBar from "./component/ProgressBar/ProgressBar";
import ButtonsProgressBar from "./component/ButtonProgressBar/ButtonsProgressbar";
import FilterSideBar from "./component/FilterSideBar/FilterSideBar";
import Resume from "./component/Resume/Resume";
import CheckButton from "./component/CheckButton/CheckButton";
import './CreateCamp.css'



const CreateCamp = ()=>{

        const createContentForm= ()=>{
        var contentForm = {};
        listInput.forEach((intp)=>{
            contentForm[intp.key]=''
            if (intp.type=== 'select'){
                contentForm[intp.key]= intp.options[0]
            }
        })
        filterlist.forEach ((filter)=>{
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
        })
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
            programationType[1].forEach((param)=>{
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
                
            })
            let listProgramationType = Object.entries(programationType[2])
            listProgramationType.forEach((filter)=>{
                filter[1].forEach((param)=>{
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
            

        return contentForm
    }
    const contentFormFinish = createContentForm()
    const [ form, setForm ] = useState(contentFormFinish)
    const [stepSelect, setSteptSelect] = useState(1)
    const [filterViewSelect, setfilterViewSelect] = useState('ChargeDate')
    const [checkSaveCamp, setCheckSaveCamp] = useState(0)

    const handleChangeSaveCamp = ()=>{
        setCheckSaveCamp(1)
    }
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleChangeFilterAdd = (e) =>{
        let result 
        if (e.target.value==='Agregar'){
            result = 1
        }
        if (e.target.value==='Eliminar'){
            result = 0
        } 
        setForm({
            ...form,
            [filterViewSelect]: result
        })
    }
    const handleChangeStep = e =>{
        if (e ==='menos'){
            if (stepSelect===1){
                return
            }
            setSteptSelect(stepSelect-1)
        }
        if (e ==='mas'){
            if (stepSelect===4){
                setSteptSelect(stepSelect+1)
                setTimeout(() => {      
                    let returnfor = form
                    let listOtionsValueOpenOrange = Object.entries(optionsValueOpenOrange)
                    listOtionsValueOpenOrange.forEach((element)=>{
                        returnfor[element[0]] = element[1][returnfor[element[0]]]
                    })
                    axios.post('http://localhost:5000/api', returnfor)
                    .then(response => {
                        console.log(response)
                        handleChangeSaveCamp()
                        setTimeout(() => {
                        setSteptSelect(6)
                        }, 3000);
                        
                    }).catch(e => {
                        console.log(e);
                    });
                }, 3000);
            }
            setSteptSelect(stepSelect+1)
        }
    }

    const handleChangeFilter = e =>{
        setfilterViewSelect(e)
    }

    const renderContend = ()=>{
        if (stepSelect === 1){
           return( <div className='card'>
            <div className='box-form'>
                <div className='container-param-filter'>
                {listInput.map(renderInputs)}
                </div>
            </div>
        </div>)
        }

        if (stepSelect===2){
            if (form.TypeSend === 'Unico envio'){
                return(<div className='card'>
                <div className='box-form-filter'>
                    <FilterSideBar  
                        filterlist = {filterlist}
                        handleChangeFilter = {handleChangeFilter}
                        filterViewSelect = {filterViewSelect} 
                        handleChange={handleChange}
                        handleChangeFilterAdd = {handleChangeFilterAdd} 
                        form={form}>
                    </FilterSideBar>
                </div>
            </div>)
            }
            if (form.TypeSend === 'Automatizada'){
                return(<div className='card'>
                <div className='box-form-filter'>
                    <FilterSideBar  
                        filterlist = {filterTriggers}
                        handleChangeFilter = {handleChangeFilter}
                        filterViewSelect = {filterViewSelect} 
                        handleChange={handleChange}
                        handleChangeFilterAdd = {handleChangeFilterAdd} 
                        form={form}>
                    </FilterSideBar>
                </div>
            </div>)
            }
        }
        if (stepSelect===3){
            let list = []
            let text = form.TypeSend + ' ' +(form.TypeProgrammSend)
            if (form.TypeSend==='Unico envio'){
                list=programationType[1]
            }
            if (form.TypeSend==='Automatizada'){
                list=programationType[2][form.TypeProgrammSend]
            }
            return(
            <div className='card'>
                <div className='box-form-filter'>
                <div className='container-param-filter'>
                    <Title text={text}></Title>
                    {list.map(renderInputs)}
                </div>
            </div>
        </div>)}
        if (stepSelect === 4){
            return( <Resume form={form}></Resume>)
        }
        if(stepSelect===5){
            return(<div className='content-check'>
            <CheckButton checkSaveCamp={checkSaveCamp} text='La Campaña se guardo correctamente'></CheckButton>
            </div>)
        }
        if(stepSelect===6){
            return(<Redirect to='/campaign'></Redirect>)
        }
    }

    const renderInputs = (inputdata)=>{
        return(
        <Input data={inputdata}  handleChange = {handleChange} form = {form} key={inputdata.key}></Input>
        )
    }



    return (
        <Fragment>
                <div className='head-progress'>
                <ProgressBar stepSelect= {stepSelect}></ProgressBar>
                <ButtonsProgressBar handleChangeStep={handleChangeStep} step = {stepSelect}></ButtonsProgressBar>
                </div>
                {renderContend()}
        </Fragment>
    );
};

export default CreateCamp