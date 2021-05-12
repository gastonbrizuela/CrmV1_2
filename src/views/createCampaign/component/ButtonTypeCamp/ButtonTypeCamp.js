import React from 'react'
import TitleCard from '../../../../components/TitleCard/TitleCard'
import './ButtonTypeCamp.css'

const ButtonTypeCamp = ()=>{

    return (<div className = 'button-type-container'>
            <div className='side-detail-container-button-type'>
                <div className='side-detail-button-type'>
                    <div className='icon-conteriner-campaign-button-type mail'><i className="fas fa-desktop"></i></div>
                    <div>
                        <TitleCard text='Mail'></TitleCard>
                    </div>
                </div>
                <div className='side-detail-button-type'>
                    <div className='icon-conteriner-campaign-button-type sms' ><i className="fas fa-sms"></i></div>
                    <div>
                        <TitleCard text='Sms'></TitleCard>
                    </div>
                </div>
                <div className='side-detail-button-type'>
                    <div className='icon-conteriner-campaign-button-type app'><i className="fas fa-mobile-alt"></i></div>
                    <div>
                        <TitleCard text='App'></TitleCard>
                    </div>
                </div>
            </div>
            </div>
            )
}

export default ButtonTypeCamp