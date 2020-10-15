import React, { Fragment } from "react";
import './CheckButton.css'

const CheckButton = ({checkSaveCamp,text})=>{
    let className = ''
    let classNameicon = ''
    if (checkSaveCamp===1){
        className = 'check-icon-label-save'
        classNameicon = 'check-icon-save'
    }
    else{
        className = 'check-icon-label'
        classNameicon = 'check-icon'
    }
    const renderText = ()=>{
        if (checkSaveCamp===1) {

            return(<label className='text-check'><b>{text}</b></label>)
        }else{
            return(<label className='text-check'><b>Guardando...</b></label>)
        }

    }
    return(<Fragment>
    <label className={className}>
        <div className={classNameicon}>
        </div>
    </label>
    {renderText()}
    </Fragment>)
}

export default CheckButton