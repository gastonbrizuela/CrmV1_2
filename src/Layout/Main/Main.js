import React, { Fragment } from 'react'
import NavBar from './Components/NavBar/NavBar'
import SideBar from './Components/SideBar/SideBar'
import './Main.css'

const Main = ({children,match})=>{

    return (<Fragment><NavBar></NavBar>
    <div className='principal-loyout'>
                <SideBar match= {match}></SideBar>

                <div className='content-main'>
                    
                    {children}
                </div>
                
            </div>
            </Fragment>
            
    )
}

export default Main