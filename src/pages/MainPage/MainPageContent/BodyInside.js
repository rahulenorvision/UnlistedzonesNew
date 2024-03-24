import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import refresh from './refresh.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BodyInside() {
  return (
    <Box sx={{ width: '100%',height:"100vh" }} style={{'backgroundColor':"#EEF5F9","overflow":"hidden"}}>
        <Typography>
            <h1 style={{"padding-top": "100px","margin-left": "350px"}}>Top Sectors In Unlisted Market</h1>
            <p style={{"margin-left": "280px","margin-bottom": "65px"}}>Discover and Nagivate The Leading Sectors That Are Shaping The Unlisted Market Landscape Today.</p>
        </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{marginLeft: "10rem" }}>
        <Grid xs={2} style={{width:150,height:150}} spacing={10} >
            <Item>
          <Box sx={{width:100,height:150,}}>
            <img src={refresh} style={{height:80}}/>
            <p>Agriculture</p>
            <p>3</p>
          </Box>
          </Item>
        </Grid>
        <Grid xs={2} style={{width:150,height:150}} spacing={10}>
          <Item><Box sx={{width:100,height:150}}>
            <img src={refresh} style={{height:80}}/>
            <p>Agriculture</p>
            <p>3</p>
          </Box></Item>
        </Grid>
        <Grid xs={2} spacing={10} style={{width:150,height:150}}>
          <Item><Box sx={{width:100,height:150}}>
            <img src={refresh} style={{height:80}}/>
            <p>Agriculture</p>
            <p>3</p>
          </Box></Item>
        </Grid>
        <Grid xs={2} spacing={10} style={{width:150,height:150}}>
          <Item><Box sx={{width:100,height:150}}>
            <img src={refresh} style={{height:80}}/>
            <p>Agriculture</p>
            <p>3</p>
          </Box></Item>
        </Grid>
        <Grid xs={2} spacing={10} style={{width:150,height:150}}>
          <Item><Box sx={{width:100,height:150}}>
            <img src={refresh} style={{height:80}}/>
            <p>Agriculture</p>
            <p>3</p>
          </Box></Item>
        </Grid>
        <Grid xs={2} spacing={10} style={{width:150,height:150}}>
          <Item><Box sx={{width:100,height:150}}>
            <img src={refresh} style={{height:80}}/>
            <p>Agriculture</p>
            <p>3</p>
          </Box></Item>
        </Grid>
      </Grid>
      {/* <Button variant="outlined" style={{"margin-left": "500px","color": "#14213D","border":"1px solid  #14213D","width":"200px",
    "height": "40px", "margin-top": "100px","border-radius":"9px","font-size":"large"}}>View More</Button> */}

    </Box>
  );
}