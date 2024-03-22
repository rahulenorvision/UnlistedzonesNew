import React, { useState } from "react";
import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/navbar/index.jsx";
// import Sidebar from "../../components/sidebar/index.jsx";

// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import main from '../../assets/images/main.png';
import {
 Img, ButtonWrapper,  ArrowForward,
  ArrowRight,} from '../../components/herosection/elements.jsx'

// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
 
const Offmarket = () =>{
   
    // const Element = Scroll.Element;
    // const [isOpen, setIsOpen] = useState(false);
    
    // const toggle = () => {
    //     setIsOpen(!isOpen)
   
    // }
    return(
        <> 
            <div>
                <Navbar/> <br/>

                <Container fixed style={{ textAlign:"center"}}> <br/>
  <h1>Unlisted Share Price List</h1>
  <p> You Can Easily Find a Unlisted Shares Price List In India</p>
  
                                <Img src={main} alt={''} style={{ alignItems: "center", width:"50%",height:"50%"}}/>
          
                                 <br/><br/><br/><br/>
                          
                              
  
</Container> <br/> <br/>
 
    <br/>
    
                <Footer />
              
            </div>         
        </>
    )
}

export default Offmarket;