import React, { Fragment, useState } from 'react'
import Tables from './component/Tables'
import Card from  '../../components/Card/Card'
import TitleCard from '../../components/TitleCard/TitleCard'
import {optionsValueAppWeb} from '../../Constant/const'
import './Campaign.css'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PrincipalTitle from '../../components/PrincipalTitle/PrincipalTitle'


const Campaign =()=>{
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Mensajes enviados por mes'
        },
        subtitle: {
            text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
        },
        series: [{
            name: 'Population',
            data: [
                ['Enero', 500],
                ['Febrero', 598],
                ['Marzo', 450],
                ['Abril', 600],
                ['Mayo', 700],
                ['Junio', 753],
                ['Julio', 810],
                ['Agosto', 663],
                ['Septiembre', 610],
                ['Noviembre',599],
                ['Dicienbre', 650]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    }
    const [campaignSelected, setCampaignSelected] = useState(0)
    const keysTypeSend = Object.keys(optionsValueAppWeb['TypeSend'])
    const renderTable = (typeSend)=>{
        const tit = ()=>{
            return (<div className = 'type-campaign-button-container '>
                        {keysTypeSend.map(renderButtons)}
                    </div>)
        }
        return(
            <Card header ={tit()}>
                <Tables typeSend = {typeSend}></Tables>
            </Card>
        )
    }
    const handleChange = (e)=>{
        setCampaignSelected(e)
    }
    const renderButtons = (e)=>{
        console.log(e)
        let classB ='type-campaign-button'
        if (e ===campaignSelected){
            classB ='type-campaign-button selected'
        }
       return (<div className={classB} onClick ={()=>handleChange(e)}>{optionsValueAppWeb['TypeSend'][e]}</div>)
    }
    return(<Fragment>
            <div className = 'principal-title-container'>
                <PrincipalTitle title = 'Campañas'></PrincipalTitle>
            </div>
            <div className = 'view-campaign-container'>
                    <div className = 'campaign-container'>
                    {renderTable(campaignSelected)}
                    </div>
            <div className='side-detail-container'> 
                <div className='side-detail'>
                    <div className='icon-conteriner-campaign mail'><i className="fas fa-desktop"/></div>
                    <div className='titles-side-detail-container'>
                        <TitleCard text='5000'></TitleCard>
                        <TitleCard text='Mail enviados'></TitleCard>
                    </div>
                </div>
                <div className='side-detail'>
                    <div className='icon-conteriner-campaign sms' ><i className="fas fa-sms"></i></div>
                    <div className='titles-side-detail-container'>
                        <TitleCard text='0'></TitleCard>
                        <TitleCard text='Sms enviados'></TitleCard>
                    </div>
                </div>
                <div className='side-detail'>
                    <div className='icon-conteriner-campaign app'><i className="fas fa-mobile-alt"></i></div>
                    <div className='titles-side-detail-container'>
                        <TitleCard text='0'></TitleCard>
                        <TitleCard text='App enviados'></TitleCard>
                    </div>
                </div>

            </div>
            <div className='chart-conteiner'>
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
            </div>

            </Fragment>)
}
export default Campaign