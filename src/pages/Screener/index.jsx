import React, { useState } from "react";
import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/navbar/index.jsx";
// import Sidebar from "../../components/sidebar/index.jsx";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import Button  from '../../components/button/button';
import { Button } from '../../components/button/button';
import {Link, useNavigate} from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import i1 from '../../assets/images/i1.jpeg';
import main from '../../assets/images/main.png';
import b1 from '../../assets/images/b1.webp';
import Container from '@mui/material/Container';
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

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
 
const Unlisted = () =>{
   
    // const Element = Scroll.Element;
    // const [isOpen, setIsOpen] = useState(false);
    
    // const toggle = () => {
    //     setIsOpen(!isOpen)
    const navigate = useNavigate()
    const [hover, setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover)
    }
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
                          
                                 <ButtonWrapper >
                                    <Link to='/price' style={{textDecoration: 'none'}}>
                                        <Button 
                                            onClick= {()=>{navigate('/price')}}
                                            onMouseEnter={onHover}
                                            onMouseLeave={onHover}
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact={true}
                                            offset={-80}
                                            primary={1}
                                            dark={0}
                                            dark2={0}
                                        >
                                            Register Here{hover ? <ArrowForward /> : <ArrowRight/>}
                                        </Button>
                                    </Link>
                                </ButtonWrapper><br/><br/>
  
</Container> <br/> <br/>
<Container fixed >
  <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} columns={16}>
        <Grid item xs={5.3}>
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
             Live From Space
           </Typography>
         <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
           </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
  
         </Box>
    </Box>
      <CardMedia
       component="img"
       sx={{ width: 151 }}
        img src={i1}  alt='i1'
       
      />
   </Card>
        </Grid>
        <Grid item xs={5.3}>
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
             Live From Space
           </Typography>
         <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
           </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
  
         </Box>
    </Box>
      <CardMedia
       component="img"
       sx={{ width: 151 }}
        img src={i1}  alt='i1'
       
      />
   </Card>
        </Grid>
        <Grid item xs={5.3}>
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
             Live From Space
           </Typography>
         <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
           </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
  
         </Box>
    </Box>
      <CardMedia
       component="img"
       sx={{ width: 151 }}
        img src={i1}  alt='i1'
       
      />
   </Card>
        </Grid>
      </Grid><br/>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={5.3}>
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
             Live From Space
           </Typography>
         <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
           </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
  
         </Box>
    </Box>
      <CardMedia
       component="img"
       sx={{ width: 151 }}
        img src={i1}  alt='i1'
       
      />
   </Card>
        </Grid>
        <Grid item xs={5.3}>
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
             Live From Space
           </Typography>
         <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
           </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
  
         </Box>
    </Box>
      <CardMedia
       component="img"
       sx={{ width: 151 }}
        img src={i1}  alt='i1'
       
      />
   </Card>
        </Grid>
        <Grid item xs={5.3}>
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
             Live From Space
           </Typography>
         <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
           </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
  
         </Box>
    </Box>
      <CardMedia
       component="img"
       sx={{ width: 151 }}
        img src={i1}  alt='i1'
       
      />
   </Card>
        </Grid>
      </Grid> <br/>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={5.3}>
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
             Live From Space
           </Typography>
         <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
           </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
  
         </Box>
    </Box>
      <CardMedia
       component="img"
       sx={{ width: 151 }}
        img src={i1}  alt='i1'
       
      />
   </Card>
        </Grid>
        <Grid item xs={5.3}>
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
             Live From Space
           </Typography>
         <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
           </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
  
         </Box>
    </Box>
      <CardMedia
       component="img"
       sx={{ width: 151 }}
        img src={i1}  alt='i1'
       
      />
   </Card>
        </Grid>
        <Grid item xs={5.3}>
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
             Live From Space
           </Typography>
         <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
           </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
  
         </Box>
    </Box>
      <CardMedia
       component="img"
       sx={{ width: 151 }}
        img src={i1}  alt='i1'
       
      />
   </Card>
        </Grid>
      </Grid> <br/><br/><br/>
      <ButtonWrapper >
                                    <Link to='/price' style={{textDecoration: 'none'}}>
                                        <Button 
                                            onClick= {()=>{navigate('/price')}}
                                            onMouseEnter={onHover}
                                            onMouseLeave={onHover}
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact={true}
                                            offset={-80}
                                            primary={1}
                                            dark={0}
                                            dark2={0}
                                        >
                                            Load More{hover ? <ArrowForward /> : <ArrowRight/>}
                                        </Button>
                                    </Link>
                                </ButtonWrapper><br/><br/>
    </Box>
    </Container>
    <br/><br/>

    <Container fixed>
    <div>
        <h1 style={{textAlign:"center"}}> Frequently Asked Questions</h1>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Header</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </Container><br/>
    <br/><br/><br/>
   <br/>
    
                <Footer />
              
            </div>         
        </>
    )
}

export default Unlisted;