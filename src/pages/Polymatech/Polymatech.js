import React from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import i3 from '../../assets/images/i3.jpeg';
import './Polymatech.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Input } from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import JoditEditor, { Jodit } from 'jodit-react';
import Navbar from '../../components/navbar/index';
import Footer from "../../components/Footer/Footer";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Chart } from "react-google-charts";
import Data from './Poly.json';
import Poly1 from './Poly1.json';
import Poly2 from './Poly2.json';


const Chartdata = [
  ['Day','Prices'],
  ['',475],
  ['',525],
  ['',500],
  ['',550],
  ['',490],
  ['',600],
  ['',675],
  ['',600],
  ['',500],
  ['',530],
  ['',525],
  ['',775],
  ['',700],
  ['',675],
  ['',545],
  ['',565],
  ['',750],
  ['',590],
  ['',510],
  ['',850],
  ['',500],
  ['',490],
  ['',500],
  ['',550],
  ['',650],
  ['',850],
  ['',900],
  ['',1200],
  ['',1000],
  ['',850],
  ['',500],
  ['',650],
  ['',550],
  ['',550],
  ['',550],
  ['',550],
   ['',550],
]


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? "#06b11c" : '#308fe8',
  },
}));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
  const columns = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
  ];

function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
  ];
  
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
  }));
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'white'
        : 'white',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  const config ={
    buttons:["bold","italic","underline","paragraph","superscript","subscript","spellcheck","link","symbols","undo","redo","preview"]
  }

export default function Polymatech(){
    const [age, setAge] = React.useState('');
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange1 = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
      };
    return(
        <>
        <Navbar/>
        <Box sx={{display: "flex",justifyContent: "center",padding:" 2em 0em 0em 0em"}}>
        <Typography variant='p' sx={{cursor:"pointer"}}>Home</Typography><ArrowRightIcon /><Typography variant='p' sx={{cursor:"pointer"}}>Shares</Typography><ArrowRightIcon /><Typography variant='p' sx={{color:"darkgray"}}>Polymatech Unlisted Shares</Typography>
        </Box>

        <Box sx={{display: "flex",padding: "3em 0em 0em 1em"}}>
        <img src={i3} alt="polymatech unlisted"/>
        <Typography variant='p' sx={{margin: "0.5em 0em 0em 1em"}}>Polymatech Unlisted Shares</Typography>
        </Box>
        <Box sx={{display:"flex"}}>
            <Box sx={{width:"55rem"}}>
            <Chart
        chartType="LineChart"
        data={Chartdata}
        width="100%"
        height="95%"
        />
            </Box>
        <Card sx={{ width: "25rem",height:"25rem",border:"1px solid darkgray",borderRadius:"10px",margin:"0rem 1rem 1rem 1rem" }}>
        <CardContent>
            <Box sx={{display:"flex"}}>
          <Typography gutterBottom variant="h6" component="div">
            Buy
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Sell
          </Typography>
          </Box>
          <hr/>
          <Box>
          <Typography variant="p" sx={{fontWeight: 600}}>
            Polymatech Unlisted Shares <br/> &#8377;895
          </Typography>
          </Box>
          <Box sx={{margin:"1rem 0rem 2rem 1rem"}}>
          <Typography variant="body2" >
           Quantity :
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{   width: "20rem",height:"0.5rem"}}/></Box>
          <br/>
          <Box sx={{margin:"1rem 0rem 2rem 1rem"}}>
          <Typography variant="body2" >
           Message :
          </Typography>
          <TextField id="outlined-basic" label="Message" variant="outlined" sx={{   width: "20rem",height:"2rem"}}/></Box>
          <Button variant="contained" color="success" sx={{width: "20rem",backgroundColor: "green",    margin:"1rem 0rem 0rem 0.8rem" }}>Buy</Button>
        </CardContent>
    </Card>
    </Box>
    <Box sx={{display:"flex"}}>
        <Card sx={{ width: "25rem",height:"25rem",border:"1px solid darkgray",borderRadius:"10px",margin:"0rem 1rem 1rem 1rem"  }}>
        <CardContent>
          <Box>
          <Typography variant="p" sx={{fontWeight: 600}}>
            Create Alert
          </Typography>
          </Box>
          <Box sx={{margin:"1rem 0rem 2rem 1rem"}}>
          <Typography variant="body2" sx={{fontWeight: 600}} >
           Target Price :
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{   width: "20rem",height:"0.5rem"}}/></Box>
          <br/>
          <Box sx={{margin:"1rem 0rem 2rem 1rem"}}>
          <Typography variant="body2"  sx={{fontWeight: 600}} >
           Your Email :
          </Typography>
          <TextField id="outlined-basic" label="Message" variant="outlined" sx={{   width: "20rem",height:"2rem"}}/></Box>
          <Button variant="contained" color="success" sx={{width: "20rem",backgroundColor: "green",    margin:"1rem 0rem 0rem 0.8rem",padding:"0.5rem 2rem 0.5rem 1rem"}}>Create Alert</Button>
        </CardContent>
    </Card>
    <Box sx={{width:"50rem",margin:"1rem 1rem 1rem 1rem"}}><Typography>Graph Will Be Created Which Is Why This Space Is Empty.Graph Will Be Created Which Is Why This.Graph Will Be Created Which Is Why This Space Is Empty.Graph Will Be Created Which Is Why This.Graph Will Be Created Which Is Why This Space Is Empty.Graph Will Be Created Which Is Why This  </Typography></Box>
    </Box>
    <Typography variant="h6" sx={{margin:"1rem 1rem 1rem 1rem"}}>About Polymatech Unlisted Shares</Typography>
    <Box sx={{width: "45rem",display:"flex",margin:"1rem 1rem 1rem 1rem"}}>
        <Typography variant="p">1.  Introduction: Polymatech Unlisted Share is an Indian company that was incorporated in 2007 as a subsidiary of Polymatech Company Ltd, Japan. However, in 2018, it was completely acquired by Mr. Eswara Rao Nandam and his wife, Mrs. Uma Nandam, Chennai-based entrepreneurs. Mr. Eswara Rao Nandam, an alumnus of BITS Pilani, is a key promoter in the company. PEL specializes in manufacturing LED semiconductor chips and has a production facility in the SIPCOT Hi-Tech SEZ in Oragadam Kancheepuram, Tamil Nadu. The company aims to become a world leader in the manufacturing of Elastometer parts.</Typography> </Box>
        <Box sx={{width: "45rem",display:"flex",margin:"1rem 1rem 1rem 1rem"}}>
        <Typography variant="p">1.  Introduction: Polymatech Unlisted Share is an Indian company that was incorporated in 2007 as a subsidiary of Polymatech Company Ltd, Japan. However, in 2018, it was completely acquired by Mr. Eswara Rao Nandam and his wife, Mrs. Uma Nandam, Chennai-based entrepreneurs. Mr. Eswara Rao Nandam, an alumnus of BITS Pilani, is a key promoter in the company. PEL specializes in manufacturing LED semiconductor chips and has a production facility in the SIPCOT Hi-Tech SEZ in Oragadam Kancheepuram, Tamil Nadu. The company aims to become a world leader in the manufacturing of Elastometer parts.</Typography> </Box>
        <Box sx={{width: "45rem",display:"flex",margin:"1rem 1rem 1rem 1rem"}}>
        <Typography variant="p">1.  Introduction: Polymatech Unlisted Share is an Indian company that was incorporated in 2007 as a subsidiary of Polymatech Company Ltd, Japan. However, in 2018, it was completely acquired by Mr. Eswara Rao Nandam and his wife, Mrs. Uma Nandam, Chennai-based entrepreneurs. Mr. Eswara Rao Nandam, an alumnus of BITS Pilani, is a key promoter in the company. PEL specializes in manufacturing LED semiconductor chips and has a production facility in the SIPCOT Hi-Tech SEZ in Oragadam Kancheepuram, Tamil Nadu. The company aims to become a world leader in the manufacturing of Elastometer parts.</Typography> </Box>
        <Box sx={{width: "45rem",display:"flex",margin:"1rem 1rem 1rem 1rem"}}>
        <Typography variant="p">1.  Introduction: Polymatech Unlisted Share is an Indian company that was incorporated in 2007 as a subsidiary of Polymatech Company Ltd, Japan. However, in 2018, it was completely acquired by Mr. Eswara Rao Nandam and his wife, Mrs. Uma Nandam, Chennai-based entrepreneurs. Mr. Eswara Rao Nandam, an alumnus of BITS Pilani, is a key promoter in the company. PEL specializes in manufacturing LED semiconductor chips and has a production facility in the SIPCOT Hi-Tech SEZ in Oragadam Kancheepuram, Tamil Nadu. The company aims to become a world leader in the manufacturing of Elastometer parts.</Typography> </Box>
        <Box sx={{width: "45rem",display:"flex",margin:"1rem 1rem 1rem 1rem"}}>
        <Typography variant="p">1.  Introduction: Polymatech Unlisted Share is an Indian company that was incorporated in 2007 as a subsidiary of Polymatech Company Ltd, Japan. However, in 2018, it was completely acquired by Mr. Eswara Rao Nandam and his wife, Mrs. Uma Nandam, Chennai-based entrepreneurs. Mr. Eswara Rao Nandam, an alumnus of BITS Pilani, is a key promoter in the company. PEL specializes in manufacturing LED semiconductor chips and has a production facility in the SIPCOT Hi-Tech SEZ in Oragadam Kancheepuram, Tamil Nadu. The company aims to become a world leader in the manufacturing of Elastometer parts.</Typography> </Box>
        <Box sx={{width: "45rem",display:"flex",margin:"1rem 1rem 1rem 1rem"}}>
        <Typography variant="p">1.  Introduction: Polymatech Unlisted Share is an Indian company that was incorporated in 2007 as a subsidiary of Polymatech Company Ltd, Japan. However, in 2018, it was completely acquired by Mr. Eswara Rao Nandam and his wife, Mrs. Uma Nandam, Chennai-based entrepreneurs. Mr. Eswara Rao Nandam, an alumnus of BITS Pilani, is a key promoter in the company. PEL specializes in manufacturing LED semiconductor chips and has a production facility in the SIPCOT Hi-Tech SEZ in Oragadam Kancheepuram, Tamil Nadu. The company aims to become a world leader in the manufacturing of Elastometer parts.</Typography> </Box>
       
       <Typography variant='h5' sx={{fontWeight:"bold",margin:"1rem 1rem 1rem 1rem"}}>Fundamentals</Typography>
       <Box sx={{display:"flex",margin:"1rem 1rem 1rem 1rem"}}>
        <Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 0rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 0rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 0rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 0rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 0rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 0rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 0rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 0rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            </Box>
            <Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 3rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 3rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 3rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 3rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 3rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 3rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 3rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            <Box sx={{display:"flex",margin:"0rem 0rem 0.5rem 3rem"}}><Typography>Polymatch Unlisted</Typography>
            <Typography sx={{margin:"0rem 0rem 0rem 3rem",fontWeight:"bolder"}}>&#8377;895</Typography></Box>
            </Box>
       </Box>
       <hr style={{width:"50rem",margin:"0rem 0rem 1rem 1rem"}}/>
        <Box sx={{ width:"55rem",height:"70rem",backgroundColor:"aliceblue",margin:"2rem 2rem 2rem 1rem",position:"relative",borderRadius:"15px" }}>
            <Typography sx={{padding:"1rem 0rem 0rem 2rem",fontWeight: 600}}>P &amp; L Statement</Typography>
        <TableContainer component={Paper} sx={{ width:"50rem",height:"45rem",margin:"1rem 2rem 2rem 2rem" }} >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 600}}>P &amp; L Statement</TableCell>
            <TableCell align="right" sx={{fontWeight: 600}}>2021</TableCell>
            <TableCell align="right" sx={{fontWeight: 600}}>2022</TableCell>
            <TableCell align="right" sx={{fontWeight: 600}}>2023</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.year1}</TableCell>
              <TableCell align="right">{row.year2}</TableCell>
              <TableCell align="right">{row.year3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TableContainer component={Paper} sx={{ width:"50rem",height:"15rem",margin:"1rem 2rem 2rem 2rem" }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 600}}>Financial Ratios</TableCell>
            <TableCell align="right" sx={{fontWeight: 600}}>2021</TableCell>
            <TableCell align="right" sx={{fontWeight: 600}}>2022</TableCell>
            <TableCell align="right" sx={{fontWeight: 600}}>2023</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Poly1.map((column) => (
            <TableRow
              key={column.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {column.name}
              </TableCell>
              <TableCell align="right">{column.year1}</TableCell>
              <TableCell align="right">{column.year2}</TableCell>
              <TableCell align="right">{column.year3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
        <Box sx={{margin:"0rem 0rem 1rem 1rem",width:"50rem",border:"1px solid darkgray",borderRadius: "15px"}}>
        <Box sx={{margin:"0rem 1rem 0rem 1rem",display:"flex"}}>
          <Box variant='h5' sx={{padding:"0.5rem 5rem 1rem 5rem"}}>2021</Box>
          <Box variant='h5' sx={{padding:"0.5rem 9rem 1rem 9rem"}}>2022</Box>
          <Box variant='h5' sx={{padding:"0.5rem 7rem 1rem 7rem"}}>2023</Box>
        </Box>
        <Box sx={{margin:"1rem 1rem 1rem 1rem"}}><Typography>Eswara Rao Nandan</Typography>
        <BorderLinearProgress variant="determinate" value={50} />
        </Box>
        <Box sx={{margin:"1rem 1rem 1rem 1rem"}}><Typography>Uma Rao Nandan</Typography>
        <BorderLinearProgress variant="determinate" value={20} />
        </Box>
        <Box sx={{margin:"1rem 1rem 1rem 1rem"}}><Typography>Rao Nandan</Typography>
        <BorderLinearProgress variant="determinate" value={20} />
        </Box>
        <Box sx={{margin:"1rem 1rem 1rem 1rem"}}><Typography>Company</Typography>
        <BorderLinearProgress variant="determinate" value={10} />
        </Box>
        </Box>

        <hr style={{width:"50rem",margin:"0rem 0rem 1rem 1rem"}}/>
        <Typography sx={{fontSize:"x-large",fontWeight: 600,margin:"1rem 0rem 1rem 2rem"}}>Events</Typography>
        <Box sx={{ width: '60%',margin:"1rem 1rem 2rem 1rem" }}>
      <Stack>
        <Item>
           <Box sx={{display:"flex"}}>
            <Typography sx={{fontWeight: 600,padding:"0rem 0rem 0rem 5rem"}}>Name</Typography>
           <Typography sx={{fontWeight: 600,padding:"0rem 5rem 0rem 25rem"}}>Date</Typography>
           <Typography sx={{fontWeight: 600}}>Details</Typography>
           </Box>
           <hr />
           <Box sx={{display:"flex"}}>
            <Box sx={{display:"flex",flexDirection:"column"}}>
            <Typography variant="p" sx={{padding:"0em 4em 0em 0em",fontWeight: 600}}>DRHP Filed</Typography>
            <Typography variant="p" sx={{fontSize:"small"}}>Polymatech Has Filed DRHP on 29.09.23</Typography>
            </Box>
            <Typography sx={{padding:"0rem 3rem 0rem 16rem"}}>29/09/2023</Typography>
            <Typography>Upload File</Typography>
           </Box>
           <hr/>
            </Item>
            
      </Stack>
    </Box>
    <hr style={{width:"50rem",margin:"0rem 0rem 1rem 1rem"}}/>
    <Typography sx={{fontSize:"x-large",fontWeight: 600,margin:"1rem 0rem 1rem 2rem"}}>Promoters Or Management</Typography>

    <TableContainer component={Paper} sx={{ width:"50rem",height:"10rem",margin:"1rem 2rem 2rem 2rem" }}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 600}}>Name</TableCell>
            <TableCell align="center" sx={{fontWeight: 600}}>Designation</TableCell>
            <TableCell align="center" sx={{fontWeight: 600}}>Experience</TableCell>
            <TableCell align="center" sx={{fontWeight: 600}}>Linkedin Profile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">Eswara Rao Nandan
              </TableCell>
              <TableCell align="center">MD</TableCell>
              <TableCell align="center">30+</TableCell>
              <TableCell align="center">Linkedin Anchor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Eswara Rao Nandan
              </TableCell>
              <TableCell align="center">MD</TableCell>
              <TableCell align="center">30+</TableCell>
              <TableCell align="center">Linkedin Anchor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Eswara Rao Nandan
              </TableCell>
              <TableCell align="center">MD</TableCell>
              <TableCell align="center">30+</TableCell>
              <TableCell align="center">Linkedin Anchor</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <Typography variant='h6' sx={{fontSize:"x-large",fontWeight: 600,margin:"1rem 0rem 1rem 2rem"}}>Download</Typography>
    <Box sx={{width:"50rem",height:"6rem",backgroundColor:"aliceblue",margin:"1rem 2rem 2rem 2rem"}}>
    <FormControl sx={{ m: 1, minWidth: 250,backgroundColor:"white",margin:"1.5rem 0rem 0rem 2rem" }} size="small">
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Financial Result</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 250,backgroundColor:"white",margin:"1.5rem 0rem 0rem 2rem" }} size="small">
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Select Year</em>
          </MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="success" sx={{width:"10rem",margin:"1.5rem 2rem 0rem 2rem",  backgroundColor:"green"}}>Download</Button>
    </Box>
            <hr style={{color:"darkgray"}}/>

    <Typography variant='h3' sx={{margin:"5rem 0rem 0rem 18rem"}}>Frequently Asked Questions</Typography>
    <Typography variant='p' sx={{margin:"1rem 0rem 0rem 22rem"}}>Find Answers to common questions that you may have in your mind</Typography>
    <Box sx={{width:"40rem",margin:"3rem 0rem 2rem 17rem"}}>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange1('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Q.1: How To Buy Polymatech Unlisted Shares ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange1('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Q.2: How To Sell Polymatech Unlisted Shares ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange1('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Q.3: What Is The Lock-In Period Of Polymatech Unlisted Shares ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange1('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Q.4 How Is DIS used To Sell Polymatech Unlisted Shares ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange1('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Q.5 Minimum Ticket Size For Investment In Polymatech Unlisted Shares ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange1('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Q.5 Minimum Ticket Size For Investment In Polymatech Unlisted Shares ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange1('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Q.5 Minimum Ticket Size For Investment In Polymatech Unlisted Shares ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange1('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>Q.5 Minimum Ticket Size For Investment In Polymatech Unlisted Shares ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange1('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography>Q.5 Minimum Ticket Size For Investment In Polymatech Unlisted Shares ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange1('panel10')}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography>Q.5 Minimum Ticket Size For Investment In Polymatech Unlisted Shares ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      <hr style={{color:"darkgray"}}/>
      <Typography variant='h4' style={{margin:"2rem 0rem 2rem 15rem",fontWeight: 700}}>Discussion On Polymatech Unlisted Shares : </Typography>
      <hr style={{color:"darkgray",width:"50rem"}}/>
      <Box sx={{width:"50rem",margin:"4rem 0rem 4rem 13rem"}}>
      <JoditEditor config={config}/>
      <Button variant="contained" sx={{backgroundColor:"green",margin:"1rem 0rem 2rem 21rem"}}>Submit</Button>
      </Box>
      <Footer/>
        </>
    )
}