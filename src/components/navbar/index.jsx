

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
        <Link to='/'><img style={{width: "11em",padding: "1em 0em 0em 5em",margin: "1em 0em 0em 3em"}} src={aqt}alt="something"/></Link>

        <ul className = 'bottomhalf'>
        <li className='list'><Link className='anc' to='/'>Home</Link></li>
        <li className='list'><Link className='anc' to='/unlisted-shares'>Unlisted Share</Link></li>
            {/* <li className='list'><a className='anc' href='/drhp'>DRHP-FILED</a></li> */}
             <li className='list'><Link className='anc' to='/sellipo'>Business Opportunities</Link></li>
            {/* <li className='list'><a className='anc' href='/screener'>Screener</a></li> */}
             <li className='list'><Link className='anc' to='/media-coverage'>Insights</Link></li>
             {/* <li className='list'><a className='anc' href='/raisefunding'>Raise Funding</a></li> */}
        <li className='list'><Link className='anc' to='/contactus'>Contact Us</Link></li>
        </ul>
       
        </div>
  
        
    </nav>
    </>
    )
}