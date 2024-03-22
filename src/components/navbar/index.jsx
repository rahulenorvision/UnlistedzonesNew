

import React from "react";
import './navbar.css';
import search from '../../assets/images/search.jpg';
import {Link,Outlet} from 'react-router-dom';
import aqt from '../../assets/images/aqt.png'

export default function Another(){
    return(
        <>
        <nav className='nav'>
        <div className='tophalf'>
        <a href='/'><img style={{width: "11em",padding: "1em 0em 0em 5em",margin: "1em 0em 0em 3em"}} src={aqt}alt="something"/></a>
        <div className="searchbar">
        <img className="image" src={search} alt="searching"></img>
        <input className='input' type='text' placeholder='Search...'
        />
        </div>
        <button className='buttonNav' type='button'>Search</button>
        </div>
        <div>
        <ul className = 'bottomhalf'>
        <li className='list'><a className='anc' href='/unlisted-shares'>All Unlisted Share</a></li>
            <li className='list'><a className='anc' href='/drhp'>DRHP-FILED</a></li>
             <li className='list'><a className='anc' href='/sellipo'>Become Our Partner</a></li>
            <li className='list'><a className='anc' href='/screener'>Screener</a></li>
             <li className='list'><a className='anc' href='/media-coverage'>Media Coverage</a></li>
             <li className='list'><a className='anc' href='/raisefunding'>Raise Funding</a></li>
        <li className='list'><a className='anc' href='/contactus'>Contact Us</a></li>
            <div className="anc">
            
            </div>
        </ul>
        </div>
        
    </nav>
    </>
    )
}