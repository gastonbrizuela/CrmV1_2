import React, { Fragment, useState } from "react";
import GenericButton from "../../../../components/GenericButton/GenericButton";

const ButtonsProgressBar = ({handleChangeStep,step})=>{
    let textBtn = "Siguiente"
    if (step==4){
        textBtn = "Finalizar"
    }
    return (<div className ='buttons-progress-bar-container' >
            <GenericButton text='Anterior' onCl = {()=>handleChangeStep('menos')}></GenericButton>
            <GenericButton text={textBtn} onCl = {()=>handleChangeStep('mas')}></GenericButton>
            </div>
    )
}

export default ButtonsProgressBar