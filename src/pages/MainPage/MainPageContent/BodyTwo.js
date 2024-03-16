import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import goodluck from './goodluck.jpg';
import rrp from './rrp.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BodyTwo() {
  return (
    <Box sx={{ width: '80%',height:"100%" }} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12}>
          <Typography style={{"padding-left": "35rem","padding-top": "6rem"}}>
                <h1>New Arrivals</h1>
            </Typography>
        </Grid>
        <Grid xs={12} style={{"padding-left": "17rem"}}>
          <Typography><p>Discover The latest Arrivals In Unlisted Shares and Elevate YOUR Investment Portfolio with Unlisted Zone Today.</p></Typography>
        </Grid>
        <div style={{"display":"flex",padding: "5em 0em 5em 16em" }}>
        <Grid xs={6} spacing={2} sx={{width:400}} >
          <Item style={{"display":"flex","border": "1px solid lightgrey"}}><img src={rrp} alt='good'/>
          <Typography style={{"font-size": "large"}}>
            <p>RRP S4E Innovation Unlisted<br/> Shares Price <br/>&#8377;300 <br/>(+0) (0%) 6M</p>
          </Typography>
          </Item>
          
        </Grid>
        <Grid xs={6} spacing={2} sx={{width:400}} >
          <Item style={{"display":"flex","border": "1px solid lightgrey"}}><img src={goodluck} alt='rapid'/>
          <Typography style={{"font-size": "large"}}>
          <p>Good Luck Defence And<br/> Aerospace Unlisted... <br/>&#8377;325<br/>(+0) (0%) 6M</p></Typography></Item>
        </Grid>
        </div>
      </Grid>
    </Box>
  );
}
