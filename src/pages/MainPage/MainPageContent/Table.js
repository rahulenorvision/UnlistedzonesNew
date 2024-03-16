import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import paytm from './paytm.jpeg';
import ags from './ags.jpeg';
import anand_rathi from './anand_rathi.jpeg';
import aptus_value_ from './aptus_value_.jpeg';
import barbeque from './barbeque.png';
import delhivery from './delhivery.png';
import nazara from './nazara.jpeg';
import suryoday_small from './suryoday_small.png';
import uti_amc from './uti_amc.jpeg';
import csb from './csb.png';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name,unlistedSharePrice ,IPOPrice,CMP,gainorloss,image,color) {
  return {name,unlistedSharePrice ,IPOPrice,CMP,gainorloss,image,color };
}
const redColor = {
    "backgroundColor": "rgba(255, 0, 0, 0.12)",
    "color": "red",height: "2em",width: "5em",
    "borderRadius": "2em", "textAlign": "center","margin": "0em 0em 0em 4em"
}
const greenColor = {
    "backgroundColor": "#00800047",
    "color" : "green",height: "2em",width: "5em",
    "borderRadius": "2em", "textAlign": "center","margin": "0em 0em 0em 4em"
}
const rows = [
  createData('Paytm', "800-3500", 2150, 401.05, -81.35,paytm,redColor),
  createData('Nazara Tech', "200-750", 550, 692.6, 25.93,nazara,greenColor),
  createData('Barbeque Nation', "510-1000", 500, 567.75, 13.55,barbeque,greenColor),
  createData('CSB', "150-210", 195, 368.65, 89.05,csb,greenColor),
  createData('AGS Transact', "225-575", 175, 78.3, -55.26,ags,redColor),
  createData('Anand Rathi Wealth Services', "350-800", 550, 3948.5, 617.91,anand_rathi,greenColor),
  createData('Aptus Value Housing Finance', "350-420", 353, 344.55, -2.39,aptus_value_,redColor),
  createData('Suryoday SFB', "175-350", 305, 171.2, -43.87,suryoday_small,redColor),
  createData('UTI AMC', "750-1100", 554, 890.7, 60.78,uti_amc,greenColor),
  createData('Delhivery', "650-900", 487, 459.05, -5.74,delhivery,redColor),
];

export default function TablePage() {
  return (
    <>
    <Box sx={{"backgroundColor":"#EEF5F9","height":"80em"}}>
    <Typography variant='h3' style={{ "marginLeft": "9em","paddingTop": "2em",    "fontWeight": "500"}}>Past IPO Performance</Typography>
    <Typography component={'p'} style={{ "marginLeft": "18em","marginTop": "1em","marginBottom": "3em"}}>Explore the Historical IPO Performance of Unlisted Shares to Inform Your Investment Strategy Today.</Typography>
    <TableContainer component={Paper} style={{ "overflow":"hidden","height": "58em",
    "width": "83em","marginLeft": "0.7em","borderRadius": "1em"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" >
        <TableHead >
          <TableRow >
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Unlisted Share Price</StyledTableCell>
            <StyledTableCell align="right">IPO Price</StyledTableCell>
            <StyledTableCell align="right">CMP</StyledTableCell>
            <StyledTableCell align="right" style={{"margin": "0em 0em 0em 4em",    "padding": "0em 7em 0em 0em","textAlign": "center"}}>Gain or Loss</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" >
                <img src={row.image} alt={row.name} style={{width:"3em",height:"3em"}}/>
                &nbsp;&nbsp;&nbsp;{row.name}
              </StyledTableCell>
              <StyledTableCell align="right">&#8377; {row.unlistedSharePrice}</StyledTableCell>
              <StyledTableCell align="right">&#8377; {row.IPOPrice}</StyledTableCell>
              <StyledTableCell align="right">&#8377; {row.CMP}</StyledTableCell>
              <StyledTableCell align="right" ><Box variant="contained"><Box variant="contained" style={row.color}>&uarr; {row.gainorloss}&#37;</Box>
                </Box></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <form style={{"display":"flex"}}>
        <select style={{"margin": "1em 0em 0em 2em",width: "3em"}}  name='PageNo.'>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
            </select>
            <label style={{"margin": "1em 0.5em 0em 1em","fontSize":"medium"}}>  Showing 1 to 10 of 15 Records</label>
            </form>
            <div style={{"margin": "-2em 0em 0em 70em",}}>
                <button style={{"backgroundColor":"lightgray","border": "0.1px solid lightgray","color":"green","height": "2.5em"
                    ,"width": "2em","borderRadius": "0.2em"}}>&larr;</button>
                <button style={{"color":"white","backgroundColor":"green","border": "0.1px solid lightgray","height": "2.5em","width": "2em",    "borderRadius": "0.2em"}}>1</button>
                <button style={{"color":"green","border": "0.1px solid lightgray","height": "2.5em","width": "2em","borderRadius": "0.2em","backgroundColor":"white"}}>2</button>
                <button style={{"color":"green","border": "0.1px solid lightgray","height": "2.5em","width": "2em","borderRadius": "0.2em","backgroundColor":"white"}}>&rarr;</button>
                </div>

         
    </TableContainer>
    </Box>
        
    </>
  );
}
