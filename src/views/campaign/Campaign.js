import React, { Fragment } from 'react'
import Tables from './component/Tables'
import Card from  './component/Card/Card'
import TitleCard from './component/TitleCard/TitleCard'


const Campaign =()=>{
    return(<Fragment>
            <Card header ={<TitleCard text = 'Unico Envio'></TitleCard>}>
                <Tables></Tables>
            </Card>
            <Card header ={<TitleCard text = 'Automatizada'></TitleCard>}>
                <Tables></Tables>
            </Card>
            </Fragment>)
}
export default Campaign