import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import artical1 from '../../assets/images/artical1.png';



export default function KnowledgeCenter(){
    return(
        <>
        <Typography variant='h3' sx={{margin:"2rem 0rem 1rem 23rem"}}>Knowledge Center</Typography>
        <Typography variant='p' sx={{margin:"0rem 0rem 0rem 6rem"}}>"Empower Your Investments: Read Our In-Depth Articles for Comprehensive Insights on Buying, Selling, and Managing Risks in the Unlisted Market."</Typography>
        <Box sx={{margin:"5rem 0rem 2rem 28rem"}}>
            <img src={artical1} alt="artical1" style={{height:"20rem"}} />
        </Box>
        </>
    )
}