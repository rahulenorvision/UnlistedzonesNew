import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import oravel_stays from './oravel_stays.jpg';
import topunlisted from './topunlisted.jpg';
import usercial from './usercial.jpg';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

    
export default function EndPage() {
        return (
            <>
      <Box sx={{fontSize:"xxx-large",padding:"0em 0em 1em 9em",fontWeight: 600}}>Unlisted Shares In News</Box>
      <Box sx={{display:"flex",justifyContent : "space-evenly"}}>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia sx={{minHeight:300,cursor: "default"}}
          component="img"
          height="140"
          image={topunlisted}
          alt="green iguana"
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{cursor: "text"}}>
            08 March, 2024,
          </Typography>
          <Link sx={{textDecoration:"none"}}><Typography gutterBottom variant="h5" component="div" sx={{fontSize: "larger","fontWeight": 600,color:"black","&:hover":{color:"green",boxshadow:"none"}}}>
            CIAL Unveils Increased Flights And New Routes For 2024 
          </Typography></Link>
          <Typography variant="body2" color="text.secondary" sx={{cursor: "text"}}>
            Coachin International Airport Ltd (CIAL) has revealed its forthcoming summer schedule, slated to operate from March 31 to october 26, boasting a significant uptick in weekly operations compared to the... 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia sx={{minHeight:300,cursor: "default"}}
          component="img"
          height="140"
          image={usercial}
          alt="green iguana"
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{cursor: "text"}}>
            08 March, 2024
          </Typography>
          <Link sx={{textDecoration:"none"}}><Typography gutterBottom variant="h5" component="div" sx={{fontSize: "larger","fontWeight": 600,color:"black","&:hover":{color:"green",boxshadow:"none"}}}>
            Oravel Stays Ltd, The Parent Company of OYO, Ventures Into Premium Hospitality With Palette Brand 
          </Typography></Link>
          <Typography variant="body2" color="text.secondary" sx={{cursor: "text"}}>
            Oravel stays Ltd, the parent company of OYO, a prominent player in the hospitality industry, has revealed its ambitious plan to introduce a series of self-operated premium hotels under the palette br... 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea >
        <CardMedia sx={{minHeight:300,cursor: "default"}}
          component="img"
          height="140"
          image={oravel_stays}
          alt="green iguana"
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{cursor: "text"}}>
            11 March, 2024.
          </Typography>
          <Link sx={{textDecoration:"none",}}><Typography gutterBottom variant="h5" component="div" sx={{fontSize: "larger","fontWeight": 600,color:"black","&:hover":{color:"green",boxshadow:"none"}}}>
            Top 5 Unlisted Shares Of 2024 In India
          </Typography></Link>
          <Typography variant="body2" color="text.secondary" sx={{cursor: "text"}}>
            1 NCL Bulidtech Unlisted Shares A) Business Model: Coatings (Paints) Walls (AAC Blocks) Window/Door B) Segment Wise Break-Up FY 2023 (In Crores) Particulars Coatings(22.55%)...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    <Box sx={{padding: "2em 0em 0em 35em",margin:"2em 0em 2em 0em"}}>
    <Button variant="outlined" sx={{width:"16em",height: "3em",borderRadius: "14px",color: "black",border: "1px solid",fontSize: "large",fontWeight: 700}}>View More</Button>
    </Box>
    </>
  );
}
