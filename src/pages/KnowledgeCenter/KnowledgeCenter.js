import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import artical1 from '../../assets/images/artical1.png';
import artical from '../MediaCoverage/artical.png';
import Gridrow from '../MediaCoverage/Gridrow';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/Footer/Footer';



export default function KnowledgeCenter(){
    return(
        <>
        <Navbar/>
        <Typography variant='h3' sx={{margin:"2rem 0rem 1rem 23rem"}}>Knowledge Center</Typography>
        <Typography variant='p' sx={{margin:"0rem 0rem 0rem 6rem"}}>"Empower Your Investments: Read Our In-Depth Articles for Comprehensive Insights on Buying, Selling, and Managing Risks in the Unlisted Market."</Typography>
        <Box sx={{margin:"5rem 0rem 2rem 28rem"}}>
            <img src={artical1} alt="artical1" style={{height:"20rem"}} />
        </Box>
        <div className="mediacover1">
            <div className="mediacover11">
                <p>Featured-Money Control, Business Standard, Financial Express, Live Mint, Ken and Inc 42</p>
                <h1>
                    Welcome To Unlistedzone India!
                </h1>
                <p>"Building Trust Through Expertise: Our Founder are regularly featured in media,offering credible insights on unlisted and pre-IPO shares for confident investing." </p>
            </div>
            <img src={artical} alt='articalimage'/>
        </div>
        <Gridrow/>
        <Footer/>
        </>
    )
}