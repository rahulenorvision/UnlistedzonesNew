import * as React from 'react';
import Navbar from '../../../components/navbar/index';
import Footer from '../../../components/Footer/Footer';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import hbf from '../../../assets/images/hbf.png';
import incomet from '../../../assets/images/incomet.png';
import indus from '../../../assets/images/indus.png';
import relationsai from '../../../assets/images/relationsai.png';
import taiki from '../../../assets/images/taiki.png';
import webyne from '../../../assets/images/webyne.png';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  

export default function CardViewMore(){
    return(
        <>
        <Navbar/>
        <Box sx={{margin:"1rem 1rem 1rem 18rem"}}>
        <TextField id="outlined-basic" label="Search" variant="outlined" sx={{width:500}} />
        <Button variant="contained" sx={{margin:"0.5rem 0rem 0rem 0.5rem",backgroundColor:"green"}} color='success'>Search</Button>
        </Box>
        <Box sx={{display:"flex",flexWrap:"wrap"}}>
        <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'},    fontWeight: 600 }} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'} ,    fontWeight: 600}} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'} ,    fontWeight: 600}} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'} ,    fontWeight: 600}} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'} ,    fontWeight: 600}} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'} ,    fontWeight: 600}} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'} ,    fontWeight: 600}} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'} ,    fontWeight: 600}} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'} ,    fontWeight: 600}} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'},    fontWeight: 600 }} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100}}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'},    fontWeight: 600 }} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'} ,    fontWeight: 600}} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'} ,    fontWeight: 600}} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100}}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'},    fontWeight: 600 }} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100}}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'},    fontWeight: 600 }} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{width: 100, height: 100}}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'},    fontWeight: 600 }} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{width: 100, height: 100}}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'} ,    fontWeight: 600}} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{width: 100, height: 100}}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'},    fontWeight: 600 }} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{width: 100, height: 100}}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'} ,    fontWeight: 600}} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100}}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'},    fontWeight: 600 }} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{width: 100, height: 100}}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'} ,    fontWeight: 600}} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{width: 100, height: 100}}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'} ,    fontWeight: 600}} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{width: 100, height: 100}}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'},    fontWeight: 600 }} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{width: 100, height: 100}}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'},    fontWeight: 600 }} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={{
        p: 2,
        margin: '1rem 1rem 1rem 2rem',
        maxWidth: 325,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{width: 100, height: 100}}>
            <Img alt="complex" src={hbf} sx={{backgroundColor:"blue"}} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" sx={{'&:hover':{color:'green',cursor:"pointer"}}} component="div">
              HBF India Private Limited
              </Typography>
              <Typography variant="body2" gutterBottom>
              Shares <br/>&#8377;4800
              </Typography>
             
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer','&:hover':{color:'green'},    fontWeight: 600 }} variant="body2">
              (+0.00)(0%) 15D
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Box>
      <Footer/>

        </>
    )
}