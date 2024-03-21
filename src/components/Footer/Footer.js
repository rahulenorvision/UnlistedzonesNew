import React from 'react';
import './Footer.css'
import badge from './badge.png';
import apple from './apple.png';
import aqt from '../../assets/images/aqt.png';
import {Link} from 'react-router-dom';

export default function Footer(){
    return(
        <>
            <div className='blocks'>
            <div className='block1'><img src={aqt} alt='footer'/>
            <p>
                India's No.1 Platform for<br/> Buying and Selling Unlisted <br/> Shares.
            </p>
            <div style={{display:"flex"}}>
            <a  href='/'>
                <img className='app' src={apple} alt='apple'/></a>
            <a  href='/'>
                <img className='app' src={badge} alt='playstore'/></a>
                </div>
            </div>
            <div className='block2'>
                <h1 className='anchorfoot'>Quick Links</h1>
                <div className='anchor'>
                <a className='insideanch' href='/'>Off Market Annexure</a>
                <a className='insideanch' href='/'>SEBI Guidelines</a>
                <a className='insideanch' href='/'>Frequently Asked Questions</a>
                <Link to={`/knowledgecenter`} className='insideanch' href='/'>Knowledge Center</Link>
                <Link to={`/blog`} className='insideanch' href='/'>Blog</Link>
                <a className='insideanch' href='/'>Live Platform</a>
                </div>
            </div>
            <div className='block3' >
                <h1 className='anchorfoot'>Unlisted Zone</h1>
                <div className='anchor'>
                    <a className='insideanch' href='/'>About Us </a>
                    <a className='insideanch' href='/'>Contact Us </a>
                    <a className='insideanch' href='/'>Privacy Policy </a>
                    <a className='insideanch' href='/'>Terms Of Use </a>
                    <a className='insideanch' href='/'>Disclaimer </a>
                    <a className='insideanch' href='/'>Banking Alert </a>
                </div>
            </div>
            <div className='block4'>
                <div ></div>
                <h1 className='anchorfoot'>Our Office</h1>
                <p className='pfooter'>828,Sector 2B,<br/> Vasundhara, Delhi NCR, India<br/> 201012</p>
                <p className='pfooter'>Sec 63 H Block 73, Noida,<br/> 201301</p>
                <p className='pfooter'>sales@unlistedzone.com</p>
            </div>
        </div>
        </>
    )
}