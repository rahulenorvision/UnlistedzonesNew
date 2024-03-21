import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import cochin from './cochin.png';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/Footer/Footer';
import Pagination from '@mui/material/Pagination';

export default function Blog(){
    return(
        <>
        <Navbar/>
        <Typography variant="h3" component="h2" sx={{margin:"3rem 0rem 0rem 32rem"}}>
                  Blog/News 
        </Typography>
        <Typography variant="p" sx={{margin:"0rem 0rem 0rem 7rem"}}>
                    Investing in the unlisted market can offer unique opportunities for investors looking to diversify their portfolio and potentially earn significant returns.
                </Typography>
                <TextField id="outlined-basic" label="Search..." variant="outlined" sx={{width:"50rem",height:"2rem",margin:"1rem 0rem 0rem 14rem"}}  />

            <Box sx={{margin:"8rem 0rem 2rem 1rem",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
            <Card sx={{ maxWidth: 375,height:600}}>
      <CardActionArea>
        <CardMedia
            sx={{objectFit: "fill"}}
          component="img"
          height="375"
          image={cochin}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="div" sx={{fontSize:"large", fontWeight: 600,'&:hover':{
                color:"green"
            } }}> 
          Sterlite Power  Partnership with GIC Pte for India's Transmission Projects
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sterlite Power Transmission Ltd (SPTL), a subsidiary of Vedanta Ltd, is in the process of transferring three power transmission projects in India to its joint venture with GIC Pte, a Singapore-based s ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 375,height:600 }}>
      <CardActionArea>
        <CardMedia
        sx={{objectFit: "fill"}}
          component="img"
          height="375"
          image={cochin}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"large", fontWeight: 600,'&:hover':{
                color:"green"
            } }}>
          Sterlite Power  Partnership with GIC Pte for India's Transmission Projects
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sterlite Power Transmission Ltd (SPTL), a subsidiary of Vedanta Ltd, is in the process of transferring three power transmission projects in India to its joint venture with GIC Pte, a Singapore-based s ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 375,height:600 }}>
      <CardActionArea>
        <CardMedia
        sx={{objectFit: "fill"}}
          component="img"
          height="375"
          image={cochin}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"large", fontWeight: 600,'&:hover':{
                color:"green"
            } }}>
          Sterlite Power  Partnership with GIC Pte for India's Transmission Projects
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sterlite Power Transmission Ltd (SPTL), a subsidiary of Vedanta Ltd, is in the process of transferring three power transmission projects in India to its joint venture with GIC Pte, a Singapore-based s ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    <hr style={{margin:"1rem 2rem 1rem 2rem"}}/>
    <Box sx={{margin:"1rem 0rem 2rem 1rem",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
    <Card sx={{ maxWidth: 375,margin:"1rem 0rem 0rem 0rem",height:600 }}>
      <CardActionArea>
        <CardMedia
        sx={{objectFit: "fill"}}
          component="img"
          height="375"
          image={cochin}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"large", fontWeight: 600,'&:hover':{
                color:"green"
            } }}>
          Sterlite Power  Partnership with GIC Pte for India's Transmission Projects
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sterlite Power Transmission Ltd (SPTL), a subsidiary of Vedanta Ltd, is in the process of transferring three power transmission projects in India to its joint venture with GIC Pte, a Singapore-based s ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 375,margin:"1rem 0rem 0rem 0rem",height:600 }}>
      <CardActionArea>
        <CardMedia
        sx={{objectFit: "fill"}}
          component="img"
          height="375"
          image={cochin}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"large", fontWeight: 600,'&:hover':{
                color:"green"
            } }}>
          Sterlite Power  Partnership with GIC Pte for India's Transmission Projects
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sterlite Power Transmission Ltd (SPTL), a subsidiary of Vedanta Ltd, is in the process of transferring three power transmission projects in India to its joint venture with GIC Pte, a Singapore-based s ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 375,margin:"1rem 0rem 0rem 0rem",height:600 }}>
      <CardActionArea>
        <CardMedia
        sx={{objectFit: "fill"}}
          component="img"
          height="375"
          image={cochin}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"large", fontWeight: 600,'&:hover':{
                color:"green"
            } }}>
          Sterlite Power  Partnership with GIC Pte for India's Transmission Projects
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sterlite Power Transmission Ltd (SPTL), a subsidiary of Vedanta Ltd, is in the process of transferring three power transmission projects in India to its joint venture with GIC Pte, a Singapore-based s ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    <hr style={{margin:"1rem 2rem 1rem 2rem"}}/>
    <Box sx={{margin:"1rem 0rem 2rem 1rem",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
    <Card sx={{ maxWidth: 375,margin:"1rem 0rem 0rem 0rem",height:600 }}>
      <CardActionArea>
        <CardMedia
        sx={{objectFit: "fill"}}
          component="img"
          height="375"
          image={cochin}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"large", fontWeight: 600,'&:hover':{
                color:"green"
            } }}>
          Sterlite Power  Partnership with GIC Pte for India's Transmission Projects
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sterlite Power Transmission Ltd (SPTL), a subsidiary of Vedanta Ltd, is in the process of transferring three power transmission projects in India to its joint venture with GIC Pte, a Singapore-based s ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 375,margin:"1rem 0rem 0rem 0rem",height:600 }}>
      <CardActionArea>
        <CardMedia
        sx={{objectFit: "fill"}}
          component="img"
          height="375"
          image={cochin}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"large", fontWeight: 600,'&:hover':{
                color:"green"
            } }}>
          Sterlite Power  Partnership with GIC Pte for India's Transmission Projects
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sterlite Power Transmission Ltd (SPTL), a subsidiary of Vedanta Ltd, is in the process of transferring three power transmission projects in India to its joint venture with GIC Pte, a Singapore-based s ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 375,margin:"1rem 0rem 0rem 0rem",height:600 }}>
      <CardActionArea>
        <CardMedia
        sx={{objectFit: "fill"}}
          component="img"
          height="375"
          image={cochin}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"large", fontWeight: 600,'&:hover':{
                color:"green"
            } }}>
          Sterlite Power  Partnership with GIC Pte for India's Transmission Projects
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sterlite Power Transmission Ltd (SPTL), a subsidiary of Vedanta Ltd, is in the process of transferring three power transmission projects in India to its joint venture with GIC Pte, a Singapore-based s ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    <Pagination count={10} variant="outlined" shape="rounded" sx={{margin: "2rem 0rem 2rem 28rem"}}/>
    <Footer/>
        </>
    )
}