import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/index.jsx";
import './MainBody.css';
import care from './MainPageContent/care.jpg';
import nse from './MainPageContent/nse.jpg'
import polymatch from './MainPageContent/polymatch.jpg'
import potash from './MainPageContent/potash.jpg'
import speaker from './MainPageContent/speaker.png'
import BodyInside from './MainPageContent/BodyInside';
import BodyLower from './MainPageContent/BodyLower';
import BodyTwo from './MainPageContent/BodyTwo';
import EndPage from './MainPageContent/EndPage';
import TablePage from './MainPageContent/Table';
import Testimonial from './MainPageContent/Testimonial';
import {Link} from 'react-router-dom';
import search from '../../assets/images/search.jpg';
import hbf from '../../assets/images/hbf.png';
import incomet from '../../assets/images/incomet.png';
import indus from '../../assets/images/indus.png';
import relationsai from '../../assets/images/relationsai.png';
import taiki from '../../assets/images/taiki.png';
import webyne from '../../assets/images/webyne.png';
import CardViewMore from "./MainPageContent/CardViewMore.js";


export default function MainBody(){
    return(
        <>
    <Navbar/>
    <div className='containermain'>
        <h1 className="head">Buy Or Sell Unlisted Shares, Pre IPO Shares, ESOP </h1>
        <p className="para">You Can Find List Of Unlisted Shares Which are available for Trading, buy and sell Unlisted Shares at best Prices. </p>
        <button className="buttonmain">Learn More</button>
        <div >
        <img className="imagemain" src="https://unlistedzone.com/frontend/img/main-trade.png" alt="image"/>
        </div>
        </div>
        <div className="searchbar">
        <img className="image" src={search} alt="searching"></img>
        <input className='input' type='text' placeholder='Search...'
        />
        
        <button className='buttonNav' type='button'>Search</button>
        </div>
        <div className='boxes'>
            <div className='boxes1'>
        <div className='box1'>
        <div className='box11'>
            <img src={hbf} style={{backgroundColor: "#337ab7",margin:"2.5rem 0rem 0rem 0.5rem",width:"6rem",height:"2rem"}} alt='nse'/>
            <p>
                HBF Limited Unlisted<br/> Shares <br/>&#8377;4800
                <br/><p> (+0.00)(0%) 15D</p>
                </p>
        </div>
        <div className='box12'>
            <Link to={`/polymatech`}><img src={incomet} style={{backgroundColor:"#337ab7",margin:"2.5rem 0rem 0rem 0.5rem",width:"6rem",height: "5rem"}} alt='nse'/></Link>
            <p className='polymatch'>
                Incomet Limited Unlisted<br/> Shares <br/>&#8377;4800
                <br/><p> (+0.00)(0%) 15D</p>
                </p>
        </div>
    
        </div>
        <div className='box1'>
        <div className='box11'>
            <img src={indus} alt='nse' style={{backgroundColor: "#337ab7",margin:"2.5rem 0rem 0rem 0.5rem",width:"6rem",height:"2rem"}}/>
            <p>
                Indus Limited Unlisted<br/> Shares <br/>&#8377;4800
                <br/><p> (+0.00)(0%) 15D</p>
                </p>
        </div>
        <div className='box22'>
        <img src={relationsai} alt='nse' style={{backgroundColor:"#337ab7",margin:"2.5rem 0rem 0rem 0.5rem",width:"6rem",height: "5rem"}}/>
            <p>
                Relations AI Limited Unlisted<br/> Shares <br/>&#8377;4800
                <br/><p> (+0.00)(0%) 15D</p>
                </p>
        </div>
    
        </div>
        <div className='box1'>
        <div className='box11'>
            <img src={taiki} alt='nse'style={{backgroundColor: "#337ab7",margin:"2.5rem 0rem 0rem 0.5rem",width:"6rem",height:"2rem"}}/>
            <p>
                Taiki Limited Unlisted<br/> Shares <br/>&#8377;4800
                <br/><p> (+0.00)(0%) 15D</p>
                </p>
        </div>
        <div className='box12'>
            <div>
        <img src={webyne} alt='nse' style={{backgroundColor:"#337ab7",margin:"2.2rem 0rem 0rem 0.5rem",width:"6rem",height:"5rem"}}/>
        </div>
            <p>
                Webyne Limited Unlisted<br/> Shares <br/>&#8377;4800
                <br/><p> (+0.00)(0%) 15D</p>
                </p>
        </div>
    
        </div>
        </div>
        <div className='boxes2'>
        <div className='boxes21'>
            <h1>Attention Required</h1>
            <div>
                <p>Create Your Own Account and Begin Your <br/> Investment Journey In Unlisted Shares With <br/> UnlistedZones.</p>
            </div>
            <div className='buttmycard'>
            <button className='butmycard' type='button' >Complete Setup</button>
            <img src={speaker} alt='speaker'/>
            </div>
        </div>
        </div>
        </div>
        <div>
        <button type='button' className='bottombutton'><a className="cardviewmorebutton" href='/CardViewMore'>View More</a></button>
        </div>
        <BodyInside/>
        <BodyTwo/>
        <TablePage/>
        <div  style={{height:"35em"}}>
            <div>
        <h1 style={{"padding": "2em 0em 0em 6em","fontSize": "xxx-large",    "fontWeight": "700"}}>Process To Buy Unlisted Shares</h1>
        <p style={{"padding": "1em 0em 0em 24em"}}>Recommended For Those Interested In Dealing With Unlisted Shares</p>
        </div>
        <div style={{"display":"flex","margin": "5em 0em 0em 3em","justifyContent":"space-evenly"}}>
            <div style={{"display":"flex","height": "0em","width": "23em","marginLeft": "4em" }}>
                <div style={{"margin": "1em 2em 0em 0em","padding": "0.2em 1em 0em 0em"}}>
                <div style={{"backgroundColor": "green", "color": "white", height: "2em",width:" 2.5em","borderRadius": "51px", "textAlign": "center","padding":" 7px 0px 0px 0px","marginLeft": "3em"}}>1</div>
                <div style={{"fontSize": "xxLarge","fontWeight": "600",margin: "1rem 0rem 0rem 2rem" }}>Contact Us</div>
                <div style={{padding: "1rem 0rem 0rem 0rem" }}>Connect With Our RMs and Get Best Unlisted Share Prices.</div>
                </div>
                <div style={{"fontSize": "8em","color":"#008000bd"}}>&rarr;</div>
            </div>
            <div style={{"display":"flex","height": "0em","width": "23em","marginLeft": "4em" }}>
            <div style={{"margin": "1em 2em 0em 0em"}}>
                <div style={{"backgroundColor": "green", "color": "white",height: "2em",width:" 2.5em","borderRadius": "51px", "textAlign": "center","padding":" 7px 0px 0px 0px","marginLeft": "3em"}}>2</div>
                <div style={{"fontSize": "xxLarge","fontWeight": "600","width": "8em",margin: "1rem 0rem 0rem 1rem "}}>Deal Processing</div>
                <div style={{padding: "1rem 0rem 0rem 0rem" }}>First, The Buyer Sends Payment To Our Bank Then UnlistedZone Team Starts Processing.</div>
            </div>
                <div style={{"fontSize": "8em","color":"#008000bd"}}>&rarr;</div>
                {/* <Box>
        <ArrowRightAltSharpIcon style={{"font-size": "8em","color": "green"}}/>
        </Box> */}
            </div>
            <div style={{"display":"flex","height": "0em","width": "23em","marginLeft": "4em" }}>
                <div style={{"margin": "1em 2em 0em 0em","padding": "0.2em 0em 0em 1em","width": "15em"}}>
                <div style={{"backgroundColor": "green", "color": "white", height: "2em",width:" 2.5em","borderRadius": "51px", "textAlign": "center","padding":" 7px 0px 0px 0px","marginLeft": "3em"}}>3</div>
                <div style={{"fontSize": "xxLarge","fontWeight": "600",margin:"1rem 0rem 0rem 1rem" }}>Deal Completion</div>
                <div style={{padding: "1rem 0rem 0rem 0rem" }}>After Getting The Payment Our Team Transfer Shares Within 24hrs</div>
                </div>
            </div>
        </div>
        </div>
        <Testimonial/>
        <EndPage/>
    <Footer/>
    </>
    )
}