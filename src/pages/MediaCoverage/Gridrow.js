import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import taleoftwo from './taleoftwo.jpg';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item sx={{margin: "1em 0em 2em 0em"}}>
            <Box style={{display:"flex"}}>
            <Box>
        <img src={taleoftwo} alt='taleoftwoimage' style={{width: "20em",height: "15em" }}/>
        </Box>
        <Box sx={{margin: "0em 4em 1em 2em" }}>
        <Typography variant='h5' component='div' sx={{color:"black",fontWeight:600,'&:hover':{color:'green',cursor:"pointer"}}}>A Tale Of Two DRHPs: Decoding IPO-Bound Mobikwik's Business Strategy Shift <br/> From 2021 To 2024</Typography>
        <br/>
        <Typography variant='p' sx={{fontSize: "medium" }}>"Current market conditions and regulatory landscapes for fintech companies, especially in lending, have necenecessitated a more grounded approach," believes Umesh Chandra Paliwal, Cofounder and CEO of Unlistedzone. </Typography>
        <br/>
        <br/>
        <Typography variant='h6' sx={{fontWeight: 600}}>Read The Full Artical Here</Typography>
        </Box>
        </Box>
        </Item>
        <Item sx={{margin: "1em 0em 2em 0em"}}>
            <Box sx={{display:"flex"}}>
            <Box>
        <img src={taleoftwo} alt='taleoftwoimage' style={{width: "20em",height: "15em" }}/>
        </Box>
        <Box sx={{margin: "0em 4em 1em 2em" }}>
        <Typography variant='h5' component='div' sx={{color:"black",fontWeight:600,'&:hover':{color:'green',cursor:"pointer"}}}>A Tale Of Two DRHPs: Decoding IPO-Bound Mobikwik's Business Strategy Shift <br/> From 2021 To 2024</Typography>
        <Typography variant='p' sx={{margin: "2em 1em 0em 0em",fontSize: "medium" }}>"Current market conditions and regulatory landscapes for fintech companies, especially in lending, have necenecessitated a more grounded approach," believes Umesh Chandra Paliwal, Cofounder and CEO of Unlistedzone. </Typography>
        <br/>
        <br/>
        <Typography variant='h6' sx={{fontWeight: 600}}>Read The Full Artical Here</Typography>
        </Box>
        </Box>
        </Item>
        <Item sx={{margin: "1em 0em 2em 0em"}}>
            <Box style={{display:"flex"}}>
            <Box>
        <img src={taleoftwo} alt='taleoftwoimage' style={{width: "20em",height: "15em" }}/>
        </Box>
        <Box sx={{margin: "0em 4em 1em 2em" }}>
        <Typography variant='h5' component='div' sx={{color:"black",fontWeight:600,'&:hover':{color:'green',cursor:"pointer"}}}>A Tale Of Two DRHPs: Decoding IPO-Bound Mobikwik's Business Strategy Shift <br/> From 2021 To 2024</Typography>
        <Typography variant='p' sx={{margin: "2em 1em 0em 0em",fontSize: "medium" }}>"Current market conditions and regulatory landscapes for fintech companies, especially in lending, have necenecessitated a more grounded approach," believes Umesh Chandra Paliwal, Cofounder and CEO of Unlistedzone. </Typography>
        <br/>
        <br/>
        <Typography variant='h6' sx={{fontWeight: 600}}>Read The Full Artical Here</Typography>
        </Box>
        </Box>
        </Item>
        <Item sx={{margin: "1em 0em 2em 0em"}}>
            <Box style={{display:"flex"}}>
            <Box>
        <img src={taleoftwo} alt='taleoftwoimage' style={{width: "20em",height: "15em" }}/>
        </Box>
        <Box sx={{margin: "0em 4em 1em 2em" }}>
        <Typography variant='h5' component='div' sx={{color:"black",fontWeight:600,'&:hover':{color:'green',cursor:"pointer"}}}>A Tale Of Two DRHPs: Decoding IPO-Bound Mobikwik's Business Strategy Shift <br/> From 2021 To 2024</Typography>
        <Typography variant='p' sx={{margin: "2em 1em 0em 0em",fontSize: "medium" }}>"Current market conditions and regulatory landscapes for fintech companies, especially in lending, have necenecessitated a more grounded approach," believes Umesh Chandra Paliwal, Cofounder and CEO of Unlistedzone. </Typography>
        <br/>
        <br/>
        <Typography variant='h6' sx={{fontWeight: 600}}>Read The Full Artical Here</Typography>
        </Box>
        </Box>
        </Item>
        <Item sx={{margin: "1em 0em 2em 0em"}}>
            <Box style={{display:"flex"}}>
            <Box>
        <img src={taleoftwo} alt='taleoftwoimage' style={{width: "20em",height: "15em" }}/>
        </Box>
        <Box sx={{margin: "0em 4em 1em 2em" }}>
        <Typography variant='h5' component='div' sx={{color:"black",fontWeight:600,'&:hover':{color:'green',cursor:"pointer"}}}>A Tale Of Two DRHPs: Decoding IPO-Bound Mobikwik's Business Strategy Shift <br/> From 2021 To 2024</Typography>
        <Typography variant='p' sx={{margin: "2em 1em 0em 0em",fontSize: "medium" }}>"Current market conditions and regulatory landscapes for fintech companies, especially in lending, have necenecessitated a more grounded approach," believes Umesh Chandra Paliwal, Cofounder and CEO of Unlistedzone. </Typography>
        <br/>
        <br/>
        <Typography variant='h6' sx={{fontWeight: 600}}>Read The Full Artical Here</Typography>
        </Box>
        </Box>
        </Item>
        <Item sx={{margin: "1em 0em 2em 0em"}}>
            <Box style={{display:"flex"}}>
            <Box>
        <img src={taleoftwo} alt='taleoftwoimage' style={{width: "20em",height: "15em" }}/>
        </Box>
        <Box sx={{margin: "0em 4em 1em 2em" }}>
        <Typography variant='h5' component='div' sx={{color:"black",fontWeight:600,'&:hover':{color:'green',cursor:"pointer"}}}>A Tale Of Two DRHPs: Decoding IPO-Bound Mobikwik's Business Strategy Shift <br/> From 2021 To 2024</Typography>
        <Typography variant='p' sx={{margin: "2em 1em 0em 0em",fontSize: "medium" }}>"Current market conditions and regulatory landscapes for fintech companies, especially in lending, have necenecessitated a more grounded approach," believes Umesh Chandra Paliwal, Cofounder and CEO of Unlistedzone. </Typography>
        <br/>
        <br/>
        <Typography variant='h6' sx={{fontWeight: 600}}>Read The Full Artical Here</Typography>
        </Box>
        </Box>
        </Item>
        <Item sx={{margin: "1em 0em 2em 0em"}}>
            <Box style={{display:"flex"}}>
            <Box>
        <img src={taleoftwo} alt='taleoftwoimage' style={{width: "20em",height: "15em" }}/>
        </Box>
        <Box sx={{margin: "0em 4em 1em 2em" }}>
        <Typography variant='h5' component='div' sx={{color:"black",fontWeight:600,'&:hover':{color:'green',cursor:"pointer"}}}>A Tale Of Two DRHPs: Decoding IPO-Bound Mobikwik's Business Strategy Shift <br/> From 2021 To 2024</Typography>
        <Typography variant='p' sx={{margin: "2em 1em 0em 0em",fontSize: "medium" }}>"Current market conditions and regulatory landscapes for fintech companies, especially in lending, have necenecessitated a more grounded approach," believes Umesh Chandra Paliwal, Cofounder and CEO of Unlistedzone. </Typography>
        <br/>
        <br/>
        <Typography variant='h6' sx={{fontWeight: 600}}>Read The Full Artical Here</Typography>
        </Box>
        </Box>
        </Item>
        <Item sx={{margin: "1em 0em 2em 0em"}}>
            <Box style={{display:"flex"}}>
            <Box>
        <img src={taleoftwo} alt='taleoftwoimage' style={{width: "20em",height: "15em" }}/>
        </Box>
        <Box sx={{margin: "0em 4em 1em 2em" }}>
        <Typography variant='h5' component='div' sx={{color:"black",fontWeight:600,'&:hover':{color:'green',cursor:"pointer"}}}>A Tale Of Two DRHPs: Decoding IPO-Bound Mobikwik's Business Strategy Shift <br/> From 2021 To 2024</Typography>
        <Typography variant='p' sx={{margin: "2em 1em 0em 0em",fontSize: "medium" }}>"Current market conditions and regulatory landscapes for fintech companies, especially in lending, have necenecessitated a more grounded approach," believes Umesh Chandra Paliwal, Cofounder and CEO of Unlistedzone. </Typography>
        <br/>
        <br/>
        <Typography variant='h6' sx={{fontWeight: 600}}>Read The Full Artical Here</Typography>
        </Box>
        </Box>
        </Item>
      </Stack>
    </Box>
  );
}
