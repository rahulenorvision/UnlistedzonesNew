import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import Google from'./Google.jpg';
import Google1 from './Google1.png'

export default function Testimonial() {
    const [value, setValue] = React.useState(5);
  return (
    
      <React.Fragment>
        <Box style={{backgroundColor:"#05053a"}}>
        <Box sx={{fontSize:"xxx-large",padding: "1em 0em 0em 11em",fontWeight: 700,color:"white"}}>Testimonials</Box>
        
    <Box sx={{  marginTop: "2em" }}>
    <Box sx={{display:"flex",flexDirection:"row"}}>
        <Box sx={{width:"48em",height:"17em",backgroundColor:"white",margin: "1em",borderRadius: "15px"}}>
    <CardContent >
    <Typography  variant="h6"  component="div">
        Transactions Are Lightning Fast
      </Typography>
      <Box sx={{
        '& > legend': { mt: 2 },
      }}>
      <Rating name="read-only" value={value} readOnly />
      </Box>
      <Typography sx={{ mb: 1.5,fontSize: "0.9rem" }} color="text.secondary">
        "Transactions are Lightning Fast. Shares Got Credited Immediately Upon Sending Payment. Fair And Genuine Transaction. Best Part Is You Get To Purchase Unlisted Shares at Much Lower Denominations Which Others Do Not Offer." 
      </Typography>
      <Box sx={{display:"flex"}}>
      <Typography variant="body2" sx={{fontSize: "medium",fontWeight: 600,padding:"3em 0.3em 0em 0em"}}>
        Gopinath Damodaran
      </Typography>
        <Typography sx={{color: "darkgray",padding: "3em 1em 0em 0em"}}>(Long Term Investor)</Typography>
        </Box>
    </CardContent>
    </Box>
    <Box sx={{width:"48em",height:"17em",backgroundColor:"white",margin: "1em",borderRadius: "15px"}}>
    <CardContent>
    <Typography  variant="h5"  component="div">
        Excellent Service And TrustWorthy
      </Typography>
      <Box sx={{
        '& > legend': { mt: 2 },
      }}>
      <Rating name="read-only" value={value} readOnly />
      </Box>
      <Typography sx={{ fontSize: "0.9rem"  }} color="text.secondary">
        "Excellent Service And Trustworthy. Last Experience was Awesome With Buying First Private Equity. Recommended Whoever Wants To Deal With Unlisted Equities. "
      </Typography>
      <Box sx={{display:"flex",paddingTop: "1.5em"}}>
      <Typography variant="body2" sx={{fontSize: "medium",fontWeight: 600,padding: "1.5em 0.3em 0em 0em"}}>
        Nilesh Dahiwalker
      </Typography>
        <Typography sx={{color: "darkgray",padding: "1.5em 1em 0em 0em"}}>(Equity Investor)</Typography>
        </Box>
    </CardContent>
    </Box >
    <Box sx={{width:"48em",height:"17em",backgroundColor:"white",margin: "1em",borderRadius: "15px"}}>
    <CardContent>
    <Typography  variant="h5"  component="div">
        We Dealt With UnlistedZone
      </Typography>
      <Box sx={{
        '& > legend': { mt: 2 },
      }}>
      <Rating name="read-only" value={value} readOnly />
      </Box>
      <Typography sx={{ mb: 1.5,fontSize: "0.9rem"  }} color="text.secondary">
        "We Dealt With UnlistedZone. The Promoter Are Genuine And Very Professional. Very Prompt In Providing Document, Funds. Thorough Understanding And Very Helpful. Highly Recommended.  "
      </Typography>
      <Box sx={{display:"flex"}}>
      <Typography variant="body2" sx={{fontSize: "medium",fontWeight: 600,padding: "3em 0.3em 0em 0em"}}>
        Rahul Gupta
      </Typography>
        <Typography sx={{color: "darkgray",padding: "3em 1em 0em 0em"}}>(Ace Investor)</Typography>
        </Box>
    </CardContent>
    </Box>
    </Box>
    </Box>
    <Box sx={{padding: "2em 29em 5em 28em"}}><Button  variant="outlined" sx={{height:120,width:450,color:"white",border: "1px solid white",borderRadius: "15px",'&:hover':{backgroundColor:'white',boxShadow:"none",color:"black"}}}><Box ><Box sx={{  fontSize: "large"}}>Click For More Verified Reviews</Box><Box><img src={Google1} alt='GoogleImage'/></Box>
    <Box><Rating name="read-only" value={value} readOnly /></Box></Box></Button></Box>
    </Box>
  </React.Fragment>
  );
}
