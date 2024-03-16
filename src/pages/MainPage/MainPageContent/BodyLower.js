import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import Box from '@mui/material/Box';

export default function BodyLower(){
    return(
        <>
        <div  style={{height:"35em"}}>
            <div>
        <h1 style={{"padding": "2em 0em 0em 8em","fontSize": "xxx-large",    "fontWeight": "700"}}>Process To Buy Unlisted Shares</h1>
        <p style={{"padding": "2em 0em 0em 28em"}}>Recommended For Those Interested In Dealing With Unlisted Shares</p>
        </div>
        <div style={{"display":"flex","margin": "5em 0em 0em 3em","justifyContent":"space-evenly"}}>
            <div style={{"display":"flex","height": "0em","width": "23em","marginLeft": "4em" }}>
                <div style={{"margin": "1em 2em 0em 0em","padding": "0.2em 1em 0em 0em"}}>
                <div style={{"backgroundColor": "green", "color": "white", "height": "2.5em","width": "2.5em","borderRadius": "51px", "textAlign": "center","padding":" 7px 0px 0px 1px","marginLeft": "3em"}}>1</div>
                <div style={{"fontSize": "xxLarge","fontWeight": "600"}}>Contact Us</div>
                <div>Connect With Our RMs and Get Best Unlisted Share Prices.</div>
                </div>
                <div style={{"fontSize": "8em","color":"#008000bd"}}>&rarr;</div>
            </div>
            <div style={{"display":"flex","height": "0em","width": "23em","marginLeft": "4em" }}>
            <div style={{"margin": "1em 2em 0em 0em"}}>
                <div style={{"backgroundColor": "green", "color": "white", "height": "2.5em","width": "2.5em","borderRadius": "51px", "textAlign": "center","padding":" 7px 0px 0px 1px","marginLeft": "3em"}}>2</div>
                <div style={{"fontSize": "xxLarge","fontWeight": "600","width": "8em"}}>Deal Processing</div>
                <div>First, The Buyer Sends Payment To Our Bank Then UnlistedZone Team Starts Processing.</div>
            </div>
                <div style={{"fontSize": "8em","color":"#008000bd"}}>&rarr;</div>
                {/* <Box>
        <ArrowRightAltSharpIcon style={{"font-size": "8em","color": "green"}}/>
        </Box> */}
            </div>
            <div style={{"display":"flex","height": "0em","width": "23em","marginLeft": "4em" }}>
                <div style={{"margin": "1em 2em 0em 0em","padding": "0.2em 0em 0em 1em","width": "15em"}}>
                <div style={{"backgroundColor": "green", "color": "white", "height": "2.5em","width": "2.5em","borderRadius": "51px", "textAlign": "center","padding":" 7px 0px 0px 1px","marginLeft": "3em"}}>3</div>
                <div style={{"fontSize": "xxLarge","fontWeight": "600"}}>Deal Completion</div>
                <div>After Getting The Payment Our Team Transfer Shares Within 24hrs</div>
                </div>
            </div>
        </div>
        </div>
        {/* <ArrowForwardIcon/> */}
        {/* <ArrowForwardSharpIcon/> */}
        
        </>
    )
}