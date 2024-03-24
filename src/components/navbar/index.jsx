

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

        <ul className = 'bottomhalf'>
        <li className='list'><a className='anc' href='/'>Home</a></li>
        <li className='list'><a className='anc' href='/unlisted-shares'>Unlisted Share</a></li>
            {/* <li className='list'><a className='anc' href='/drhp'>DRHP-FILED</a></li> */}
             <li className='list'><a className='anc' href='/sellipo'>Business Opportunities</a></li>
            {/* <li className='list'><a className='anc' href='/screener'>Screener</a></li> */}
             <li className='list'><a className='anc' href='/media-coverage'>Insights</a></li>
             {/* <li className='list'><a className='anc' href='/raisefunding'>Raise Funding</a></li> */}
        <li className='list'><a className='anc' href='/contactus'>Contact Us</a></li>
        </ul>
       
        </div>
  
        
    </nav>
    </>
    )
}