import React from "react";
import GenericButton from "../../../../components/GenericButton/GenericButton";
import './ButtonProgressbar.css'

const ButtonsProgressBar = ({handleChangeStep,step})=>{
    let textBtn = "Siguiente"
    if (step===5){
        textBtn = "Finalizar"
    }
    return (<div className ='buttons-progress-bar-container' >
            <div className='generic-button-conteiner'><GenericButton text='Anterior' onCl = {()=>handleChangeStep('menos')}></GenericButton></div>
            <div className='generic-button-conteiner'><GenericButton text={textBtn} onCl = {()=>handleChangeStep('mas')}></GenericButton></div>
            </div>
    )
}

export default ButtonsProgressBar