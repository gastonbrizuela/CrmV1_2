import React from 'react'
import './NavBar.css'
const NavBar = ()=>{
    return(
            <header className='container-nav-bar'>
                <h2 className='title-nav-bar'>CRM Millanel</h2>
                <nav>
                    <ul className='nav-items'>
                        <li>@usuario</li>
                        <li>
                                <i className="fas fa-sign-out-alt" ></i>  
                        </li>
                    </ul>
                </nav>
            </header>
    )
}
export default NavBar