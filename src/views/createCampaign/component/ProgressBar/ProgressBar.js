import React from "react";
import './ProgressBar.css'

const ProgressBar =({stepSelect})=>{
    const listBarSteps = [
        {step:1,name:'1-Definicion'},
        {step:2,name:'2-Filtro'},
        {step:3,name:'3-Programacion'},
        {step:4, name:'4-Template'},
        {step:5,name:'5-Resumen'}
        
    ]

    const renderSpet = (stepoption)=>{
        if (stepoption.step <= stepSelect){
            return(<li className='progress-bar-li-select' key={stepoption.name} >{stepoption.name}</li>)
        }else{
            return(<li className='progress-bar-li' key= {stepoption.name} >{stepoption.name}</li>)
        }
        
    }
    return(<div className='progress-bar-conteiner'>
                <ul>
                    {listBarSteps.map(renderSpet)}
                </ul>
            </div>)
}

export default ProgressBar;