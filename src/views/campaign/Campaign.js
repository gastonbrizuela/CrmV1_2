import React, { Fragment } from 'react'
import Tables from './component/Tables'
import Card from  '../../components/Card/Card'
import TitleCard from '../../components/TitleCard/TitleCard'
import './Campaign.css'

const Campaign =()=>{
    return(<Fragment>
            <div className = 'view-campaign-container'>
                <div className = 'campaign-container'>
                    <Card header ={<TitleCard text = 'Unico Envio'></TitleCard>}>
                        <Tables typeSend = {0}></Tables>
                    </Card>
                    <Card header ={<TitleCard text = 'Automatizada'></TitleCard>}>
                        <Tables typeSend = {1}></Tables>
                    </Card>
                </div>
            </div>
            </Fragment>)
}
export default Campaign